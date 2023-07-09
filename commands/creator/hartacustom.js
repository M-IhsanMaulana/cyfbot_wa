module.exports = {
    name: "hartacustom",
    alias: ["tahtacustom","hartatahtacustom"],
    use: "<query>",
    desc: "Harta Tahta Custom Maker",
    type: "creator",
    example: "%prefix%command satu|dua|tiga",
    start: async(client, m, { text, prefix, command }) => {
        if (!text.includes('|')) return m.reply(`Example : ${prefix + command} satu|dua|tiga`)
        global.mess("wait", m)
        let [a, b, c] = text.split`|`
        client.sendFile(m.from, global.api("zenz", "/creator/tahtacustom", { text: a,  text2: b,  text3: c }, "apikey"), "", m)
    },
    isQuery: true
}