const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "gorevid",
    alias: ["gore"],
    desc: "Generate Random Gore Video",
    type: "downloader",
    example: "%prefix%command",
    isPremium: true,
    start: async(client, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/gore", {}, "apikey"))
        let teks = `⭔ Title : ${fetch.result.title}\n⭔ Tag : ${fetch.result.tag}\n⭔ Upload : ${fetch.result.upload}\n⭔ Author : ${fetch.result.author}`
        client.sendFile(m.from, fetch.result.video1, "", m, { caption: teks })
    },
}