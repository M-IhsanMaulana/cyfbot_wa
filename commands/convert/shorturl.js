const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "shorturl",
    alias: ["shorturl"],
    use: "<url>",
    desc: "Short Url",
    type: "convert",
    example: "%prefix%command <url>",
    start: async(client, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/convert/shorturl", { url: isUrl(text)[0] }, "apikey"))
        client.sendText(m.from, fetch.result, m)
    },
    isQuery: true
}