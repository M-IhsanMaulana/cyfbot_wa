module.exports = {
    name: "kannagen",
    alias: ["kannagenerator"],
    use: "<query>",
    desc: "Kanna Comment Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(client, m, { text }) => {
        global.mess("wait", m)
        client.sendFile(m.from, global.api("zenz", "/creator/kannagen", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}