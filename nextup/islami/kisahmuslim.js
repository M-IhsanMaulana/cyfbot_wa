const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "kisahmuslim",
    alias: ["muslim"],
    desc: "The Story of muslim",
    type: "islami",
    example: "%prefix%command",
    start: async(client, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/islami/kisahmuslim", {}, "apikey"))
        let teks = `⭔ Judul : ${fetch.result.Judul}\n⭔ Kisah :\n${fetch.result.Cerita}`
        client.sendFile(m.from, fetch.result.Thumb, "", m, { caption: teks })
    },
}