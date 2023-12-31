const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkpubg",
    alias: ["nickpubg"],
    use: "<id>",
    desc: "PUBG Mobile Stalker",
    type: "stalker",
    example: `%prefix%command <id>`,
    start: async(client, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nickpubg", { query: text }, "apikey"))
        let caption = `Arena Of Valor Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        client.sendText(m.from, caption, m)
    },
    isQuery: true
}