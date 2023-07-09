const { delay, extractMessageContent } = require("@adiwajshing/baileys")
const { isUrl, fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "sticker",
    alias: ["s","stiker"],
    use: "<reply>",
    desc: "Convert Image, Video, Gif To Sticker",
    type: "convert",
    example: "\nsticker : %prefix%command --media reply\nPP sticker : %prefix%command @tag\nurl sticker : %prefix%command <url>",
    start: async(client, m, { command, prefix, text, quoted, mime }) => {
        if (!quoted) return  m.reply(`Reply to Supported media With Caption ${prefix + command}`)
        global.mess("wait", m)
        if (/image|video|sticker/.test(mime)) {
            let download = await client.downloadMediaMessage(quoted)
            client.sendFile(m.from, download, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
        } else if (isUrl(text)) {
            if (isUrl(text)) client.sendFile(m.from, isUrl(text)[0], "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
            else m.reply('No Url Match')
        } else if (text) {
            let fetch = await fetchUrl(global.api("zenz", "/searching/stickersearch", { query: text }, "apikey"))
            for (let url of fetch.result) {
                await delay(1000)
                client.sendFile(m.from, url, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
            }
        } else if (quoted.type == "templateMessage") {
            let download = await client.downloadMediaMessage(quoted)
            client.sendFile(m.from, download, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
        } else if (quoted.type == "buttonsMessage") {
            let download = await client.downloadMediaMessage(quoted)
            client.sendFile(m.from, download, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
        // } else if (quoted.mentions[0]) {
        //     let url = await client.profilePictureUrl(quoted.mentions[0], "image")
        //     client.sendFile(m.from, url, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}