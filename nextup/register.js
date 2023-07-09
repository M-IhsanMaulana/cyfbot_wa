module.exports = {
    name: "register",
    alias: ["verify"],
    desc: "Add User To Database",
    type: "main",
    example: "%prefix%command",
    start: async(client, m) => {
        const { pushName, sender } = m
        const namaUser = `${pushName === undefined ? sender.split("@")[0] : pushName}`
        user.addUser(m.sender, namaUser, _user)
        user.verify(m.sender, _user)
        rpg.addRpg(m.sender, _rpg)
        client.sendText(m.from, "sukses", m)
    },
    noLimit: true,
}