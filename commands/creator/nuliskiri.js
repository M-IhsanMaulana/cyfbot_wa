module.exports = {
    name: "nuliskiri",
    alias: ["mnuliskiri"],
    use: "<query>",
    desc: "Mager Nulis Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(client, m, { text }) => {
        global.mess("wait", m)
        client.sendFile(m.from, global.api("zenz", "/creator/nuliskiri", { text: text }, "apikey"), "", m)
    },
    isQuery: true
}