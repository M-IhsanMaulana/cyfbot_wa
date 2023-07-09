module.exports = {
    name: "cekpremium",
    alias: ["cekprem"],
    desc: "Premium Check Information",
    type: "users",
    example: "%prefix%command",
    isPremium: true,
    noLimit: true,
    start: async(client, m) => {
        let cekprem = require("parse-ms")((await premium.getPremiumExpired(m.sender, _premium)) - Date.now())
        let caption = `*Expired :* ${cekprem.days} day ${cekprem.hours} hour ${cekprem.minutes} minute ${cekprem.seconds} Second`
        client.sendText(m.from, caption, m)
    }
}