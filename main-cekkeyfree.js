import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
try {
if (!text) throw 'Masukan Apikeynya'
let api = await fetch(`https://kiicodeofficial.my.id/checkapikeyfree?apikey=${text}`)
let hasil = await api.json()
m.reply(`Apikey: ${hasil.result.apikey}\nLimit: ${hasil.result.limit}`)
} catch (e) {
m.reply('Maaf Kak Apikey Tersebut Tidak Terdaftar')
}
}
handler.help = ['cekkeyfree']
handler.tags = [tmain]
handler.command = /^(cekkeyfree)$/i

export default handler