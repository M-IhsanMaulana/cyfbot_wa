require("./global")
const P = require ('pino')
const { Boom } = require ('@hapi/boom')
const { default: makeWASocket, delay, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, useMultiFileAuthState, useSingleFileAuthState,  jidNormalizedUser } = require ('@whiskeysockets/baileys')
const fs = require("fs")
const path = require("path")
const cron = require('node-cron')
const { Collection, Simple, Store } = require("./lib")

const Welcome = require("./lib/Welcome")
const config = JSON.parse(fs.readFileSync('./config.json'))
const { serialize, WAConnection } = Simple
const Commands = new Collection()

global.prefa = /^[#$+.?_&<>!/\\]/
Commands.prefix = prefa

const store = makeInMemoryStore({ logger: P().child({ level: 'silent', stream: 'store' }) })
store.readFromFile('./session/baileys_store.json')
setInterval(() => {
	store.writeToFile('./session/baileys_store.json')
}, 10000)

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in config.APIs ? config.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: config.APIs.apikey } : {}) })) : '')

const readCommands = () => {
    let dir = path.join(__dirname, "./commands")
    let dirs = fs.readdirSync(dir)
    let listCommand = {}
    try {
        dirs.forEach(async (res) => {
            let groups = res.toLowerCase()
            Commands.type = dirs.filter(v => v !== "_").map(v => v)
            listCommand[groups] = []
            let files = fs.readdirSync(`${dir}/${res}`).filter((file) => file.endsWith(".js"))
            //console.log(files)
            for (const file of files) {
                const command = require(`${dir}/${res}/${file}`)
                listCommand[groups].push(command)
                Commands.set(command.name, command)
                delay(100)
            }
        })
        Commands.list = listCommand
        global.printLog('SYSTEM', 'All commands has been loaded successfully !! , Starting connecting to server')
    } catch (e) {
        console.error(e)
    }
}

const connect = async () => {
    await readCommands()
    let { state, saveCreds } = await useMultiFileAuthState(path.resolve('./session'))
    let { version, isLatest } = await fetchLatestBaileysVersion()
    global.printLog('SYSTEM', `Starting using version ${version} and isLatest ${isLatest}`)

    let connOptions = {
        version,
        logger: P({ level: 'silent' }),
        printQRInTerminal: true,
        markOnlineOnConnect: false,
        patchMessageBeforeSending: (message) => {

                const requiresPatch = !!(
                  message.buttonsMessage
              	|| message.templateMessage
              	|| message.listMessage
                );
                if (requiresPatch) {
                    message = {
                        viewOnceMessage: {
                            message: {
                                messageContextInfo: {
                                    deviceListMetadataVersion: 2,
                                    deviceListMetadata: {},
                                },
                                ...message,
                            },
                        },
                    };
                }
                return message;
    },
        auth: state,
        syncFullHistory: true
    }

    const client = new WAConnection(makeWASocket(connOptions))
    // global.Store = Store.bind(client)

    client.ev.on("creds.update", saveCreds)

    client.ev.on("connection.update", async(update) => {
        if (update.connection == "open" && client.type == "legacy") {
            client.user = {
                id: client.state.legacy.user.id,
                jid: client.state.legacy.user.id,
                name: client.state.legacy.user.name
            }
        }
        const { lastDisconnect, connection } = update
        if (connection) {
            console.info(`Connection Status : ${connection}`)
        }

        if (connection == "connecting") {
            global.printLog('SYSTEM', 'Connecting Bot Server to Whatsapp')
        } else if (connection == "close") {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) {
                global.printLog('SYSTEM', 'Bad Session File , Please Delete Session Exist and Scan Again')
                client.logout()
            } else if (reason === DisconnectReason.connectionClosed) {
                global.printLog('SYSTEM', 'Connection Closed ,Reconnecting to server...')
                connect()
            } else if (reason === DisconnectReason.connectionLost) {
                global.printLog('SYSTEM', 'Connection Lost From Server, Reconnecting to server...')
                connect()
            } else if (reason === DisconnectReason.connectionReplaced) {
                global.printLog('SYSTEM', 'Connection Replaced, Another New Session Opened, Please Close Current Session First')
                client.logout()
            } else if (reason === DisconnectReason.loggedOut) {
                global.printLog('SYSTEM', 'Device Loged Out, Please Run and Scan Again...')
                client.logout()
            } else if (reason === DisconnectReason.restartRequired) {
                global.printLog('SYSTEM', 'Restart Required, Restarting Bot and Server...')
                connect()
            } else if (reason === DisconnectReason.timedOut) {
                global.printLog('SYSTEM', 'Connection TimeOut , Reconnecting to server...')
                connect()
            } else client.end(`Unknown DisconnectReason: ${reason} | ${connection}`)
        } else if (connection) {
            global.printLog('SYSTEM', 'Server Bot is Now Connected to Whatsapp and Bot Already Running')
        }
    })

    // Welcome
    client.ev.on("group-participants.update", async (m) => {
		Welcome(client, m)
	})

    client.ev.on("messages.upsert", async (chatUpdate) => {
        m = serialize(client, chatUpdate.messages[0])

        if (!m.message) return
        if (m.key && m.key.remoteJid == "status@broadcast") return
        if (m.key.id.startsWith("BAE5") && m.key.id.length == 16) return
        
        if (config.options.autoRead) await client.readMessages([m.key])
        require("./bot")(client, m, Commands, chatUpdate)
    })

    if (client.user && client.user?.id) client.user.jid = jidNormalizedUser(client.user?.id)

	return client

}

cron.schedule('0 0 * * *', () => {
    var folder = './temp/'
    fs.readdir(folder, (err, files) => {
        if (err) throw err
        for (const file of files) {
            console.log(file + ' : File Deleted Successfully.')
            fs.unlink(folder + file, function (err) {
                if (err && err.code == 'ENOENT') {
                    console.info("File doesn't exist, won't remove it.");
                } else if (err) {
                    console.error("Error occurred while trying to remove file");
                } else {
                    console.info(`removed`);
                }
            });
        }
    })
    console.log('Success Deleted temp Folder')
}, {
    scheduled: true,
    timezone: config.timezone
})

connect()
