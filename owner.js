/*
 * Nama Pengembang: Aliciazyn
 * Kontak Whatsapp: wa.me/6288268142831
 * Akun Github: github.com/AiciaxyviorMd
 * Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
 */

import fetch from "node-fetch";
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
	let teks = "Ini dia Pencipta ku ✿◠‿◠";
	await conn.sendMessage(
		m.chat,
		{
			text: teks,
			mentions: [m.sender],
			contextInfo: {
				forwardingScore: 9999999,
				isForwarded: false,
				mentionedJid: [m.sender],
				externalAdReply: {
					showAdAttribution: false,
					renderLargerThumbnail: true,
					title: "BagusOkta ❦",
					body: "Jangan di spam ya!!",
					containsAutoReply: true,
					mediaType: 1,
					thumbnailUrl: `https://telegra.ph/file/2a395d702b7f2e43d1e57.jpg`,
					mediaUrl: ``,
					sourceUrl: "https://wa.me/6288994107174'",
				},
			},
		},
		{ quoted: m },
	);
};
handler.help = ["owner"];
handler.tags = [tmain];
handler.command = /^(owner|creator)$/i;

export default handler;
