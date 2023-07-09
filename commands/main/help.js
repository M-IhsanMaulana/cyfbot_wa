const { sleep } = require("../../lib/Function")

module.exports = {
    name: "menu",
    alias: ["help","?","menu"],
    desc: "List all command",
    type: "main",
    start: async(client, m, { commands, args, prefix, text, toUpper }) => {
        const { pushName, sender } = m
        if (args[0]) {
            let data = []
            let name = args[0].toLowerCase()
            let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
            if (!cmd || cmd.type == "hide") return m.reply("No Command Found")
            else data.push(`*Command :* ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
            if (cmd.alias) data.push(`*Alias :* ${cmd.alias.join(", ")}`)
            if (cmd.use) data.push(`*Use:* ${cmd.use}`);
            if (cmd.desc) data.push(`*Description :* ${cmd.desc}\n`)
            if (cmd.example) data.push(`*Example :* ${cmd.example.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
            return m.reply(`*Info Command ${cmd.name.replace(/^\w/, c => c.toUpperCase())}*\n\n${data.join("\n")}`)
        } else {
            let info = `Silahkan Join Group untuk mengetahui seputar bot terkait update atau hal lainnya \n Our Group : https://chat.whatsapp.com/H5YeA9EfNKPBPrtvU2TZjc\n`
            let teks = `Hello, ${pushName === undefined ? sender.split("@")[0] : pushName}\nBerikut List Perintah CYF BOT\n${info}\n`
            teks += `─⭓ ❨ *${config.botname}* ❩ ⭓\n`

            for (let type of commands.type) {
                teks += `╭──◩ ❨ *${toUpper(type)} Menu* ❩\n`
                teks += `${commands.list[type].filter(v => v.type).map((cmd) => `┝❏ ${prefix + cmd.name} ${cmd.use ? " " + cmd.use : ""}`).join("\n")}\n`
                teks += `╰──◩\n\n`
            }

            teks += `Untuk melihat info detail dan cara penggunaan command silahkan ketikan ${prefix}help <nama command>\nJika terdapat perintah yang error atau tidak berfungsi silahkan lapor/hubungi ke owner agar di cek dan di perbaiki`;
            
            // client.sendMessage(m.from, teks, { quoted: m })
            client.sendText(m.from, teks, m)
        }
    },
    noLimit: true,
}
