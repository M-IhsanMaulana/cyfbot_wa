const { getRandom } = require("../../lib/Function")
const request = require('request')
const fs = require('fs')

module.exports = {
    name: "jadianime",
    alias: ["jadianime"],
    use: "<reply>",
    desc: "Photo Image Editor",
    type: "photoeditor",
    example: `%prefix%command --image reply`,
    isPremium: true,
    start: async(client, m, { command, prefix, quoted, mime }) => {
        if (!quoted) return  m.reply(`Reply to Supported media With Caption ${prefix + command}`)
        if (/image/.test(mime)) {
            let download = await client.downloadAndSaveMediaMessage(quoted)
            file_name = getRandom('jpg')
            request({
                url: global.api("zenz", "/photoeditor/jadianime", {}, "apikey"),
                method: 'POST',
                formData: {
                    "sampleFile": fs.createReadStream(download)
                },
                encoding: "binary"
            }, async function(error, response, body) {
                fs.unlinkSync(download)
                fs.writeFileSync(file_name, body, "binary")
                ini_buff = fs.readFileSync(file_name)
                await client.sendFile(m.from, ini_buff, "", m).then(() => {
                    fs.unlinkSync(file_name)
                })
            });
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}