let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return m.reply("Ketik: .animedif <prompt>");
	m.reply(wait);
	try {
		let data = `https://api.yanzbotz.my.id/api/text2img/neima?prompt=${text}`;
		conn.sendFile(m.chat, data, "", `Prompt : ${text}`, m);
	} catch (e) {
		m.reply(error);
	}
};
handler.help = ["neima *𝒑𝒓𝒐𝒎𝒑𝒕*"];
handler.tags = [tai];
handler.command = ["neima"];

export default handler;
