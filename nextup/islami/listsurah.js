const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "listsurah",
    alias: ["surah"],
    desc: "List Of Surah Al-quran",
    type: "islami",
    start: async(client, m) => {
        let fetch = await fetchUrl(global.api("zenz", "/islami/listsurah", {}, "apikey"))
        let teks = `List Surah Al-quran\n\n`
        for (var x in fetch.result) {
            teks += `${x}. ${fetch.result[x]}\n`
        }
        client.sendText(m.from, teks, m)
    }
}