module.exports = {
    name: "bidencomment",
    alias: ["bidentweet"],
    use: "<query>",
    desc: "Biden Twitter Comment Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(client, m, { text }) => {
        global.mess("wait", m)
        client.sendFile(m.from, global.api("zenz", "/creator/biden", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}