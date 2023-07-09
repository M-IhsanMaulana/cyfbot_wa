const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "emoji",
    alias: ["emot", "emoticon"],
    use: "<query>",
    desc: "Convert Emoji To Sticker",
    type: "creator",
    example: `\nList Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nEmoji : %prefix%command 🤔\nEmoji 2 : %prefix%command 🤔 <type>`,
    start: async(client, m, { args }) => {
        global.mess("wait", m)
        let [a, b] = args
        let fetch = await fetchUrl(global.api("zenz", "/creator/emoji", {query: a}, "apikey"))
        if (b) {
            switch(b.toLowerCase()) {
                case "apple": 
                    client.sendFile(m.from, fetch.result.apple, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "google":
                    client.sendFile(m.from, fetch.result.google_noto_color_emoji, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "samsung":
                    client.sendFile(m.from, fetch.result.samsung, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "microsoft":
                    client.sendFile(m.from, fetch.result.microsoft_teams, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "whatsapp":
                    client.sendFile(m.from, fetch.result.whatsapp, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "twitter":
                    client.sendFile(m.from, fetch.result.twitter_emoji_stickers, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "facebook":
                    client.sendFile(m.from, fetch.result.facebook, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "skype":
                    client.sendFile(m.from, fetch.result.skype, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "joypixels":
                    client.sendFile(m.from, fetch.result.joypixels, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "sony":
                    client.sendFile(m.from, fetch.result.sony_playstation, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "openmoji":
                    client.sendFile(m.from, fetch.result.openmoji, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "emojidex":
                    client.sendFile(m.from, fetch.result.emojidex, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "notoemoji":
                    client.sendFile(m.from, fetch.result.noto_color_emoji,_animated, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "messenger":
                    client.sendFile(m.from, fetch.result.messenger, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "lg":
                    client.sendFile(m.from, fetch.result.lg, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "htc":
                    client.sendFile(m.from, fetch.result.HTC, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "mozilla":
                    client.sendFile(m.from, fetch.result.mozilla, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "softbank":
                    client.sendFile(m.from, fetch.result.softbank, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "docomo":
                    client.sendFile(m.from, fetch.result.docomo, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
            }
        } else {
            client.sendFile(m.from, fetch.result.google_noto_color_emoji,+ "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
        }
    },
    isQuery: true
}

function type() {
    return ["apple", "google","samsung", "microsoft", "whatsapp", "twitter", "facebook", "skype", "joypixels", "sony", "openmoji", "emojidex", "noto_emoji", "messanger", "lg", "htc", "mozilla", "softbank", "docomo"]
}