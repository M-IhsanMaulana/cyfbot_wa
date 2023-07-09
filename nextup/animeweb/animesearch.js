const { fetchUrl, parseResult } = require("../../lib/Function")

module.exports = {
    name: "animesearch",
    alias: ["animesearch"],
    use: "<query>",
    desc: "Search Anime From MyAnime",
    type: "animeweb",
    example: `%prefix%command <query>`,
    start: async(client, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/animesearch", { query: text }, "apikey"))
        let caption = await parseResult("Anime Search", fetch.result, { delete: ["url"] })
        client.sendText(m.from, caption, m)
    },
    isQuery: true
}