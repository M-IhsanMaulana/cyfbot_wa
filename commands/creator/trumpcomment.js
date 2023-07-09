module.exports = {
    name: "trumpcomment",
    alias: ["trc","trumptweet"],
    use: "<query>",
    desc: "Trump Twitter Comment Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(client, m, { text }) => {
        global.mess("wait", m)
        client.sendFile(m.from, global.api("zenz", "/creator/trump", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}