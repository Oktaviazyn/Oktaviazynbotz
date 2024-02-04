let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return m.reply("Ketik: .midjourney <prompt>");
	m.reply(wait);
	try {
		let data = `https://api.yanzbotz.my.id/api/text2img/midjourney?prompt=${text}`;
		conn.sendFile(m.chat, data, "apa", `Prompt : ${text}`, m);
	} catch (e) {
		m.reply(error);
	}
};
handler.help = ["midjourney *𝒑𝒓𝒐𝒎𝒑𝒕*"];
handler.tags = [tai];
handler.command = ["midjourney"];

handler.premium = true;

export default handler;
