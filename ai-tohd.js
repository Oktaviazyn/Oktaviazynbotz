import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'
import uploadFile from '../lib/uploadFile.js' 

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Send Foto Dengan Caption .tohd'
m.reply(wait)
let media = await q.download()
let url = await uploadFile(media)
let hasil = await (await fetch(`https://kiicodeofficial.my.id/api/ai/hd?url=${url}&apikey=Ceri`)).buffer()
await conn.sendFile(m.chat, hasil, '', '_Nih Kak Hasilnya_', m)
	
}
handler.help = ['tohd']
handler.tags = [tai]
handler.command = /^(tohd)$/i
handler.premium = true

export default handler