import fetch from "node-fetch";

const handler = async (m, { conn: akiraa, text }) => {
	if (!text)
		return akiraa.reply(m.chat, "Masukan question pertanyaan", fkontak);
	m.reply("wait");
	const you = await fetch(
		`https://api.azz.biz.id/api/youbot?q=${text}&key=global`,
	);
	const ai = await you.json();
	const hasil = `
° *A I   Y O U . C O M*

${ai.hasil}
`;

	await conn.sendMessage(
		m.chat,
		{
			text: hasil,
			contextInfo: {
				externalAdReply: {
					title: "AI YOU.COM",
					body: "",
					thumbnailUrl: "https://telegra.ph/file/bed3c8c2380e5025d98d3.png",
					sourceUrl: null,
					mediaType: 1,
					renderLargerThumbnail: true,
				},
			},
		},
		{ quoted: m },
	);
};

handler.command = handler.help = [
	"ai-you2 *ᴛᴇxᴛ*",
	"youai2 *ᴛᴇxᴛ*",
	"aiy2 *ᴛᴇxᴛ*",
];
handler.tags = [tai];

export default handler;
