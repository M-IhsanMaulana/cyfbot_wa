const { fetchUrl, isUrl, getRandom } = require("../../lib/Function")

module.exports = {
    name: "bayfiles",
    alias: ["bayfilesdownload"],
    use: "<url>",
    desc: "Download Media From https://bayfiles.com",
    type: "downloader",
    example: "%prefix%command <url>",
    isPremium: true,
    start: async(client, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/bayfiles", { url: isUrl(text)[0] }, "apikey"))
        let { sizeH, mime, data } = await client.getFile(fetch.result)
        let fileName = fetch.result.split("/")[5]
        client.sendMessage(m.from, { document: data, fileName, mimetype: mime, caption: `Bayfiles Downloader\n\n⭔ File Size : ${sizeH}` }, { quoted: m })
    },
    isQuery: true
}