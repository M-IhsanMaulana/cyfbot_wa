const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "kissmanga",
    alias: ["kissmanga"],
    use: "<query>",
    desc: "Search Anime From Kissmanga",
    type: "animeweb",
    example: `%prefix%command <query>`,
    start: async(client, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/kissmanga", { query: text }, "apikey"))
        let caption = `Kissmanga Search :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.manga_name}\n`
            caption += `⭔ Link : ${i.manga_url}\n\n`
        }
        client.sendText(m.from, caption, m)
    },
    isQuery: true
}