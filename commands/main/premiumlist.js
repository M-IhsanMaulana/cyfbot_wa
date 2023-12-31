module.exports = {
    name: "premiumlist",
    alias: ["listpremium"],
    desc: "Premium List Information",
    type: "main",
    example: "%prefix%command",
    start: async(client, m) => {
        let data = _premium
        let caption = `List Prem\nAmount : ${data.length}\n\n`
        for (let i of data) {
            let checkExp = require("parse-ms")(i.expired - Date.now());
            caption += `*ID :* wa.me/${i.id.split("@")[0]}\n*Expired :* ${checkExp.days} day ${checkExp.hours} hour ${ checkExp.minutes } minute ${checkExp.seconds} second\n\n`;
        }
		client.sendText(m.from, caption, m)
    },
    noLimit: true,
}