const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "tikporn",
    alias: ["porntik"],
    desc: "Generate Random Video From tikporn",
    type: "downloader",
    example: "%prefix%command",
    isPremium: true,
    start: async(client, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/tikporn", {}, "apikey"))
        let teks = `⭔ Title : ${fetch.result.title}\n⭔ Desc : ${fetch.result.desc}\n⭔ Upload : ${fetch.result.upload}\n⭔ Like : ${fetch.result.like}\n⭔ Dislike : ${fetch.result.dislike}\n⭔ Views : ${fetch.result.views}`
        client.sendFile(m.from, fetch.result.video, "", m, { caption: teks })
    },
}