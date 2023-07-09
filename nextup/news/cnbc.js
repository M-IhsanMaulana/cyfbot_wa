const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "cnbc",
    alias: ["cnbcnews"],
    desc: "Latest News From CNBC",
    type: "news",
    example: `%prefix%command`,
    start: async(client, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/news/cnbc", {}, "apikey"))
        let caption = `Latest News From CNBC\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul Berita : ${i.berita}\n`
            caption += `⭔ Di Upload : ${i.berita_diupload}\n`
            caption += `⭔ Url : ${i.berita_url}\n\n`
        }
        client.sendFile(m.from, fetch.result[0].berita_thumb, "", m, { caption })
    }
}
