module.exports = {
    name: "attp",
    alias: ["texttopicture"],
    use: "<query>",
    desc: "ATTP Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(client, m, { text }) => {
        global.mess("wait", m)
        client.sendFile(m.from, global.api("zenz", "/creator/attp", { text: text }, "apikey"), "", m)
    },
    isQuery: true
}