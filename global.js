const fs = require("fs")
const { color, bgColor } = require('./lib/Color')
const moment = require("moment-timezone");
const timeNow = moment.tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");

global.level = require("./data/level")

global.premium = require("./data/premium")
global._premium = JSON.parse(fs.readFileSync("./database/premium.json"))

global.user = require("./data/user")
global._user = JSON.parse(fs.readFileSync("./database/user.json"))

global.group = require("./data/group")
global._group = JSON.parse(fs.readFileSync("./database/group.json"))

global.rpg = require("./data/rpg")
global._rpg = JSON.parse(fs.readFileSync("./database/rpg.json"))

global.mess = (type, m) => {
    let msg = {
        wait: '[⏳] Mohon tunggu sebentar, Permintaan anda sedang di proses!',
        owner: 'Mohon maaf perintah ini hanya dapat digunakan oleh Owner Bot!',
        premium: 'Mohon maaf perintah ini hanya dapat digunakan oleh User Premium saja, Jika ingin menjadi User Premium silahkan hubungi Owner Bot!',
        group: 'Mohon maaf perintah ini hanya dapat digunakan di dalam grup saja!',
        private: 'Mohon maaf perintah ini hanya dapat digunakan di dalam Private Chat saja!',
        admin: 'Mohon maaf perintah ini hanya dapa di akses oleh admin group!',
        botAdmin: 'Mohon maaf perintah ini hanya dapat digunakan ketika bot menjadi admin!',
        bot: 'Fitur ini hanya dapat diakses oleh Bot',
        dead: 'Fitur ini sedang dimatikan!',
        media: 'Mohon maaf silahkan reply media yang ingin dijadikan Sticker!',
        error: "Mohon maaf terjadi kesalahan, mohon lapor ke Owner Bot untuk dicek dan di perbaiki bila ada masalah!"
    }[type]
    if (msg) return m.reply(msg, m.from, { quoted: m })
}

global.printLog = (typedata, log) => {
    console.log(
        color(`[| ${timeNow} |]=%> [ SERVER ] ~> `, "lime"),
        color(`Type : [ ${typedata} ]`, "#A1FF"),
        color(`[ DATA ] ~> `, "#A1FFCE"),
        color(`${log}`)
    )
}