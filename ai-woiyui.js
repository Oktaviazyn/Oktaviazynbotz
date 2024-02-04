import fetch from "node-fetch";

const handler = async (m, { text, conn }) => {
	if (!text)
		throw "Contoh: .Yui Pertanyaan yang ingin Anda sampaikan kepada asisten AI";
	await m.reply(wait);

	try {
		const js = await fetch(
			`https://api.azz.biz.id/api/youbot?q=${text}&key=global`,
		);
		const json = await js.json();

		await conn.sendMessage(
			m.chat,
			{
				text: json.hasil,
				contextInfo: {
					externalAdReply: {
						title: "Yui Hoshikawa",
						body: "Yui.com",
						thumbnailUrl: "https://telegra.ph/file/baea443679fb83e6cdd1a.jpg",
						sourceUrl: "https://www.instagram.com/cssalmons/",
						mediaType: 1,
						renderLargerThumbnail: true,
					},
				},
			},
			{ quoted: m },
		);
	} catch (err) {
		m.reply(util.format(js));
	}
};
handler.premium = true;
handler.help = ["hoshikawa *ᴛᴇxᴛ*", "woiyui *ᴛᴇxᴛ*"];
handler.command = ["hoshikawa", "woiyui"];
export default handler;
