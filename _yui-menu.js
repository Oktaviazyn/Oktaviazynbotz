/*
 * Nama Pengembang: KiiCode
 * Kontak Whatsapp: wa.me/6283877118785
 * Akun Github: github.com/Kii-Kanaeru
 * Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
 */

import moment from "moment-timezone";
import { Styles } from "../lib/Styles.js";
const handler = async (m, { conn, usedPrefix: _P, isOwner, isPremium }) => {
	const teks = `✧──···[ ᴅ ᴀ s ʙ ᴏ ᴀ ʀ ᴅ ]···──✧
            ˚꒷︶꒷꒥꒷˚꒷︶꒷꒥꒷
◦ *Verison 2*
◦ *creator: [BagusOkta]*           
Hi! ,My name is Nezuu. Saya Dapat Digunakan Dalam Beberapa Hal Yang Anda Perlukan, Seperti *Bertanya, Game , Musik Dan Lain Lain* Saya Senang Dapat Membantu Kamu, Nezuu Gemoyy Yang Suka Berimajinasi, Terangi Harimu Dengan Senyuman Karamelku.

╭〣 
│ ∘ .ᴍᴇɴᴜᴀɪ
│ ∘ .ᴍᴇɴᴜᴀɴɪᴍᴇ
│ ∘ .ᴍᴇɴᴜᴅᴏᴡɴʟᴏᴀᴅ
│ ∘ .ᴍᴇɴᴜɢᴀᴍᴇ
│ ∘ .ᴍᴇɴᴜɢʀᴏᴜᴘ
│ ∘ .ᴍᴇɴᴜɪɴᴛᴇʀɴᴇᴛ
│ ∘ .ᴍᴇɴᴜɪꜱʟᴀᴍɪ
│ ∘ .ᴍᴇɴᴜᴍᴀɪɴ
│ ∘ .ᴍᴇɴᴜᴏᴡɴᴇʀ
│ ∘ .ᴍᴇɴᴜʀᴀɴᴅᴏᴍ
│ ∘ .ᴍᴇɴᴜᴛᴏᴏʟꜱ
│ ∘ .ᴍᴇɴᴜʀᴘɢ
│ ∘ .ᴍᴇɴᴜxᴘ
│ ∘ .ᴍᴇɴᴜᴀʟʟ
╰───────────〣 
             
Nezuu 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐎𝐓 `;
	await conn.sendMessage(
		m.chat,
		{
			text: Styles(teks),
			mentions: [m.sender],
			contextInfo: {
				forwardingScore: 9999999,
				isForwarded: false,
				mentionedJid: [m.sender],
				externalAdReply: {
					showAdAttribution: false,
					renderLargerThumbnail: true,
					title: ucapan(),
					containsAutoReply: true,
					mediaType: 1,
					thumbnailUrl: `https://telegra.ph/file/cb9ffc6d2b3cb0fdd5da1.jpg`,
					mediaUrl: ``,
					sourceUrl: "https://kiicodeofficial.my.id",
				},
			},
		},
		{ quoted: m },
	);
};

handler.help = ["menu"];
handler.tags = [tmain];
handler.command = ["menu"];
handler.limit = true;
handler.register = true;

export default handler;

function ucapan() {
	const time = moment.tz("Asia/Jakarta").format("HH");
	let res = "Sudah Dini Hari Kok Belum Tidur Kak?";
	if (time >= 4) {
		res = "sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ";
	}
	if (time >= 10) {
		res = "sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ";
	}
	if (time >= 15) {
		res = "sᴇʟᴀᴍᴀᴛ sᴏʀᴇ";
	}
	if (time >= 18) {
		res = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ";
	}
	return res;
}
