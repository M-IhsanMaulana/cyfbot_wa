const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "xvideos",
    alias: ["xvideodownload"],
    use: "<url>",
    desc: "Download Media From https://xvideos.com",
    type: "downloader",
    example: "%prefix%command <url>",
    isPremium: true,
    start: async(client, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/xvideos", { url: isUrl(text)[0] }, "apikey"))
        let teks = `⭔ Title : ${fetch.result.title}\n⭔ Duration : ${fetch.result.duration}s`
        client.sendFile(m.from, fetch.result.files.low, "", m, { caption: teks })
    },
    isQuery: true
}