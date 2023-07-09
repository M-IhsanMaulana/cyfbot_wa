module.exports = {
    name: "owner",
    alias: ["owner"],
    desc: "Owner Information",
    type: "main",
    example: "%prefix%command",
    start: async (client, m) => {
        client.sendText(m.from, "Klik Nomor Di Bawah Ini\n\nwa.me/" + config.owner[0], m)
    },
    noLimit: true,
}