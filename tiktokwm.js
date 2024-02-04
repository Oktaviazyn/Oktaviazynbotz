import fetch from "node-fetch";
import api from "api-dylux";
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	if (!args[0])
		throw `🚩 *Example:* ${
			usedPrefix + command
		} https://vt.tiktok.com/ZS8TQkpTK/`;

	let nenen = await api.tiktok(text);
	await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
	await m.reply("Tunggu Sebentar...");
	let cap = `*DOWNLOADER TIKTOK*
 
 
*Nickname :* ${nenen.nickname}
*Duration :* ${nenen.duration}
*Description :* ${nenen.description}`;
	conn.sendFile(m.chat, nenen.play, "ttmp4.mp4", cap, m);
};
handler.help = ["tiktokwm *𝒖𝒓𝒍*"];
handler.tags = [tdownload];
handler.command = /^(ttwm|tiktokwm)$/i;
handler.limit = true;
export default handler;
