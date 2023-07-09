module.exports = {
    name: "photooxy",
    alias: ["photooxy"],
    use: "<query>",
    desc: "Create Maker From https://photooxy.com/",
    type: "textmaker",
    example: `\nList Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type> <text>`,
    start: async (client, m, { text, args, prefix, command }) => {
        type = args[0].toLowerCase()
        let [text1, ...text2] = text.replace(args[0], "").trimStart().split`|`
        text2 = text2.join("|")
        switch (type) {
            case "burnpaper":
                client.sendFile(m.from, global.api("zenz", "/photooxy/burnpaper", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "butterfly":
                client.sendFile(m.from, global.api("zenz", "/photooxy/butterfly", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "coffecup":
                client.sendFile(m.from, global.api("zenz", "/photooxy/coffecup", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "coffee":
                client.sendFile(m.from, global.api("zenz", "/photooxy/coffee", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "doubleheart":
                client.sendFile(m.from, global.api("zenz", "/photooxy/doubleheart", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "flaming":
                client.sendFile(m.from, global.api("zenz", "/photooxy/flaming", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "grass":
                client.sendFile(m.from, global.api("zenz", "/photooxy/grass", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "gravity":
                client.sendFile(m.from, global.api("zenz", "/photooxy/gravity", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "lovemessage":
                client.sendFile(m.from, global.api("zenz", "/photooxy/lovemessage", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "lovetext":
                client.sendFile(m.from, global.api("zenz", "/photooxy/lovetext", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "naruto":
                client.sendFile(m.from, global.api("zenz", "/photooxy/naruto", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "oceansea":
                client.sendFile(m.from, global.api("zenz", "/photooxy/oceansea", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "quotewood":
                client.sendFile(m.from, global.api("zenz", "/photooxy/quotewood", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "rainbow":
                client.sendFile(m.from, global.api("zenz", "/photooxy/rainbow", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "romantic":
                client.sendFile(m.from, global.api("zenz", "/photooxy/romantic", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "shadow":
                client.sendFile(m.from, global.api("zenz", "/photooxy/shadow", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "slidetext":
                client.sendFile(m.from, global.api("zenz", "/photooxy/slidetext", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "smoke":
                client.sendFile(m.from, global.api("zenz", "/photooxy/smoke", { text: text1 }, "apikey"), "", m, { caption: `Generate Photooxy` })
                break
            case "glitch":
                if (!text2) return m.reply(`Example : ${prefix + command} glitch client|Zoldyck`)
                client.sendFile(m.from, global.api("zenz", "/photooxy/glitch", { text: text1, text2: text2 }, "apikey"), "", m, { caption: `photooxy Logo` })
                break
        }
    },
    isQuery: true
}

function type() {
    return [
        "burnpaper",
        "butterfly",
        "coffecup",
        "coffee",
        "doubleheart",
        "flaming",
        "grass",
        "gravity",
        "lovemessage",
        "lovetext",
        "naruto",
        "oceansea",
        "quotewood",
        "rainbow",
        "romantic",
        "shadow",
        "slidetext",
        "smoke",
        "glitch"
    ]
}
