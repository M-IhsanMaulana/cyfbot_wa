const ms = require('parse-ms')
const toMs = require('ms')

module.exports = {
    name: "premium",
    alias: ["prem"],
    use: "<query>",
    desc: "Add or Delete Premium User to database",
    type: "owner",
	example: "\n\nExample: %prefix%command add @tag/62812xxx 30d\nExample: %prefix%command del @tag/62812xxx",
    start: async (client, m, { ar, args, prefix, command }) => {
		if (args.length < 2) return m.reply(`Example: ${prefix + command} add @tag/62812xxx 30d\nExample: ${prefix + command} del @tag/62812xxx`)
        if (ar[0] === 'add') {
			if (m.mentions.length !== 0) {
				for (let i = 0; i < m.mentions.length; i++) {
					premium.addPremiumUser(m.mentions[0], args[2], _premium);
					m.reply(`*「 PREMIUM ADDED 」*\n\n*ID :* ${args[1]}\n*Expired :* ${ms(toMs(args[2])).days} day ${ms(toMs(args[2])).hours} hour ${ms(toMs(args[2])).minutes} minute`)
				}
			} else {
				premium.addPremiumUser(args[1] + "@s.whatsapp.net", args[2], _premium);
				m.reply(`*「 PREMIUM ADDED 」*\n\n*ID :* ${args[1]}\n*Expired :* ${ms(toMs(args[2])).days} day ${ms(toMs(args[2])).hours} hour ${ms(toMs(args[2])).minutes} minute`)
			}
		} else if (ar[0] === 'del') {
			if (m.mentions.length !== 0) {
				for (let i = 0; i < m.mentions.length; i++) {
					premium.delPremiumUser(m.mentions[0], _premium)
					m.reply('Premium Deleted')
				}
			} else {
				premium.delPremiumUser(args[1] + "@s.whatsapp.net", _premium);
				m.reply('Premium Deleted')
			}
		} else {
			m.reply('Pilih add / del')
		}
    },
    isOwner: true
}