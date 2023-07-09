module.exports = {
    name: "tweetmaker",
    alias: ["twc","tweetcomment"],
    use: "<query>",
    desc: "Twitter Comment Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(client, m, { text }) => {
        global.mess("wait", m)
        client.sendFile(m.from, global.api("zenz", "/creator/maketweet", {
            text: text, 
            text2: m.pushName
        }, "apikey"), "", m)
    },
    isQuery: true
}