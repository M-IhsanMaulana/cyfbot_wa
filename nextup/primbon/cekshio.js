const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "cekshio",
    alias: ["shio"],
    use: "<query>",
    desc: "Cek Arti Shio",
    type: "primbon",
    example: `\nList Type :\n\n${type().join("\n")}\n\nExample : %prefix%command <type>`,
    start: async(client, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/primbon/shio", { query: text }, "apikey"))
        let caption = `Primbon Arti Shio :\n\n`
        let i = fetch.result
        caption += `⭔ Catatan : ${i.result}\n`
        client.sendText(m.from, caption, m)
    },
    isQuery: true
}

function type() {
    return [
        "Tikus",
        "Kerbau",
        "Macan",
        "Kelinci",
        "Naga",
        "Ular",
        "Kuda",
        "Kambing",
        "Monyet",
        "Ayam",
        "Anjing",
        "Babi"
    ]
}