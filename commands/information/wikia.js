const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "wikia",
    alias: ["wikien"],
    use: "<query>",
    desc: "Get Information From Wikipedia Abstract",
    type: "information",
    example: `%prefix%command <query>`,
    start: async(client, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/information/wikia", { query: text }, "apikey"))
        client.sendText(m.from, fetch.result, m)
    },
    isQuery: true
}