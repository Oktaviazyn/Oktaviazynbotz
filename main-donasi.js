let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/2a395d702b7f2e43d1e57.jpg'
let sewa = `Hai Kak, Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah, Dengan Kamu Berdonasi Berarti Kamu Berkontribusi Dalam Perkembangan Bot Ini..

▧「 *P E M B A Y A R A N* 」

*🎗️E-Walet*
• Ovo = 081936287658
• Dana = 0895704952222
• Gopay = 0895704952222
• LinkAja = 081936287658
• Shopee = 081936287658

👤A/N : P***I

Terima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargai 👽
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['donasi']
handler.tags = [tmain]
handler.command = /^(donasi|donate)$/i

export default handler