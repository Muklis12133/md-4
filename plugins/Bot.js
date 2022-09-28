import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./tmp/Bot.opus') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.customPrefix = /^(bot|robot|p|hallo|hello|tes|tes123|muklis|klis|woy)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler
