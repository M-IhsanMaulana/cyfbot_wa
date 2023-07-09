module.exports = {
    name: "ephoto",
    alias: ["ephoto360"],
    use: "<query>",
    desc: "Create Maker From https://ephoto360.com/",
    type: "textmaker",
    example: `\nList Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type> <text>`,
    start: async (client, m, { text, args, prefix, command }) => {
        type = args[0].toLowerCase()
        let [text1, ...text2] = text.replace(args[0], "").trimStart().split`|`
        text2 = text2.join("|")
        switch (type) {
            case "american":
                client.sendFile(m.from, global.api("zenz", "/ephoto/american", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "anonymous":
                client.sendFile(m.from, global.api("zenz", "/ephoto/anonymous", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "aov":
                client.sendFile(m.from, global.api("zenz", "/ephoto/aov", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "arrow":
                client.sendFile(m.from, global.api("zenz", "/ephoto/arrow", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "arrow2":
                client.sendFile(m.from, global.api("zenz", "/ephoto/arrow2", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "blackpink":
                client.sendFile(m.from, global.api("zenz", "/ephoto/blackpink", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "blueneon":
                client.sendFile(m.from, global.api("zenz", "/ephoto/blueneon", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "cake":
                client.sendFile(m.from, global.api("zenz", "/ephoto/cake", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "caper":
                client.sendFile(m.from, global.api("zenz", "/ephoto/caper", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "cloth":
                client.sendFile(m.from, global.api("zenz", "/ephoto/cloth", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "cloud":
                client.sendFile(m.from, global.api("zenz", "/ephoto/cloud", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "coverpubg":
                client.sendFile(m.from, global.api("zenz", "/ephoto/coverpubg", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "crank":
                client.sendFile(m.from, global.api("zenz", "/ephoto/crank", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "dragonfire":
                client.sendFile(m.from, global.api("zenz", "/ephoto/dragonfire", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "eraser":
                client.sendFile(m.from, global.api("zenz", "/ephoto/eraser", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "foggy":
                client.sendFile(m.from, global.api("zenz", "/ephoto/foggy", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "glasses":
                client.sendFile(m.from, global.api("zenz", "/ephoto/glasses", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "graffiti":
                client.sendFile(m.from, global.api("zenz", "/ephoto/graffiti", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "greenbrush":
                client.sendFile(m.from, global.api("zenz", "/ephoto/greenbrush", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "hallowen":
                client.sendFile(m.from, global.api("zenz", "/ephoto/hallowen", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "horror":
                client.sendFile(m.from, global.api("zenz", "/ephoto/horror", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "incandescent":
                client.sendFile(m.from, global.api("zenz", "/ephoto/incandescent", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "leafgraphy":
                client.sendFile(m.from, global.api("zenz", "/ephoto/leafgraphy", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "letters":
                client.sendFile(m.from, global.api("zenz", "/ephoto/letters", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "metals":
                client.sendFile(m.from, global.api("zenz", "/ephoto/metals", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "ml":
                client.sendFile(m.from, global.api("zenz", "/ephoto/ml", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "neonblue":
                client.sendFile(m.from, global.api("zenz", "/ephoto/neonblue", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "neonbp":
                client.sendFile(m.from, global.api("zenz", "/ephoto/neonbp", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "nightstars":
                client.sendFile(m.from, global.api("zenz", "/ephoto/nightstars", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "pig":
                client.sendFile(m.from, global.api("zenz", "/ephoto/pig", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "pubgavatar":
                client.sendFile(m.from, global.api("zenz", "/ephoto/pubgavatar", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "puppy":
                client.sendFile(m.from, global.api("zenz", "/ephoto/puppy", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "socialbutton":
                client.sendFile(m.from, global.api("zenz", "/ephoto/socialbutton", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "sunlight":
                client.sendFile(m.from, global.api("zenz", "/ephoto/sunlight", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "television":
                client.sendFile(m.from, global.api("zenz", "/ephoto/television", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "typography":
                client.sendFile(m.from, global.api("zenz", "/ephoto/typography", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "typography2":
                client.sendFile(m.from, global.api("zenz", "/ephoto/typography2", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "warface":
                client.sendFile(m.from, global.api("zenz", "/ephoto/warface", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "water":
                client.sendFile(m.from, global.api("zenz", "/ephoto/water", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "yasuologo":
                client.sendFile(m.from, global.api("zenz", "/ephoto/yasuologo", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
        }
    },
    isQuery: true
}

function type() {
    return [
        "american",
        "anonymous",
        "aov",
        "arrow",
        "arrow2",
        "blackpink",
        "blueneon",
        "cake",
        "caper",
        "cloth",
        "cloud",
        "coverpubg",
        "crank",
        "dragonfire",
        "eraser",
        "foggy",
        "glasses",
        "graffiti",
        "greenbrush",
        "hallowen",
        "horror",
        "incandescent",
        "leafgraphy",
        "letters",
        "metals",
        "ml",
        "neonblue",
        "neonbp",
        "nightstars",
        "pig",
        "pubgavatar",
        "puppy",
        "socialbutton",
        "sunlight",
        "television",
        "typography",
        "typography2",
        "warface",
        "water",
        "yasuologo"
    ]
}
