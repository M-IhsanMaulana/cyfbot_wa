const { fetchUrl, isUrl, getRandom } = require("../../lib/Function")

module.exports = {
    name: "racaty",
    alias: ["racatydownload"],
    use: "<url>",
    desc: "Download Media From https://racaty.io",
    type: "downloader",
    example: "%prefix%command <url>",
    isPremium: true,
    start: async(client, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/racaty", { url: isUrl(text)[0] }, "apikey"))
        let { sizeH, mime, data, ext } = await client.getFile(fetch.result.url)
        let fileName = await getRandom(ext)
        client.sendMessage(m.from, { document: data, fileName, mimetype: mime, caption: `Racaty Downloader\n\n⭔ File Size : ${sizeH}` }, { quoted: m })
    },
    isQuery: true
}