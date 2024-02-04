import fetch from "node-fetch";
let handler = async (m, { text, usedPrefix, command }) => {
	if (!text) throw `Hay adakah yang bisa saya bantu??`;
	await m.reply("Searching...");
	let putra = await fetch(
		`https://api.lolhuman.xyz/api/openai?apikey=02c9d517fcb020c279040776&text=${text}&user=user-unique-id`,
	);
	let hasil = await putra.json();
	let txt = `${hasil.result}`.trim();
	conn.sendMessage(m.chat, {
		text: txt,
		contextInfo: {
			externalAdReply: {
				title: `${global.namebot}`,
				body: "OpenAi (ChatGpt)",
				thumbnailUrl: "https://telegra.ph/file/3366f66d35c4e9c6c2945.jpg",
				sourceUrl: "",
				mediaType: 1,
				renderLargerThumbnail: true,
			},
		},
	});
};
handler.help = ["openai *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^(openai)$/i;
export default handler;
