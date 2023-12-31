const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalksausage",
    alias: ["nicksausage"],
    use: "<id>",
    desc: "Sausage Man Stalker",
    type: "stalker",
    example: `%prefix%command <id>`,
    start: async(client, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nicksausage", { query: text }, "apikey"))
        let caption = `Sausage Man Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        client.sendText(m.from, caption, m)
    },
    isQuery: true
}