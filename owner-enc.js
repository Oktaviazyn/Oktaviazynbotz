import JavaScriptObfuscator from 'javascript-obfuscator';

let handler = async (m, { conn, text }) => {
if (!text) throw `[!] Masukan textnya`
let res = JavaScriptObfuscator.obfuscate(text)
conn.reply(m.chat, res.getObfuscatedCode(), m)
}
handler.help = ['enc','encrypt']
handler.tags = [ttools]
handler.command = /^(enc|encrypt)$/i

export default handler