const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "chattgpt",
    alias: ["chattai"],
    use: "<query>",
    desc: "GPT Chatt",
    type: "entertainment",
    example: `%prefix%command`,
    start: async(client, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/chattgpt", { query: text }, "apikey"))
        client.sendText(m.from, fetch.result, m)
    },
}