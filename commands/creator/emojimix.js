module.exports = {
    name: "emojimix",
    alias: ["mixemoji"],
    use: "<query>",
    desc: "Convert And Mix Emoji To Sticker",
    type: "creator",
    example: "\nEmojimix : %prefix%command 🤔\nEmojimix 2 : %prefix%command 😅🤔",
    start: async(client, m, { args }) => {
        let [a, b] = args.join("")
        global.mess("wait", m)
        if (b) {
            client.sendFile(m.from, global.api("zenz", `/creator/emojimix`, {text: a, text2: b}, "apikey"), "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
        } else {
            client.sendFile(m.from, global.api("zenz", `/creator/emojimix2`, {text: a}, "apikey"), "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
        }
    },
    isQuery: true
}