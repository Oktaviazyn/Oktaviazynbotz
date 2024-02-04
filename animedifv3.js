let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return m.reply("Ketik: .animedifv3 <prompt>");
	m.reply(wait);
	try {
		let data = `https://api.yanzbotz.my.id/api/text2img/anythingV2?prompt=${text}`;
		conn.sendFile(m.chat, data, "apa", `Prompt : ${text}`, m);
	} catch (e) {
		m.reply(error);
	}
};
handler.help = ["animedifv3 *<𝒑𝒓𝒐𝒎𝒑𝒕>*"];
handler.tags = [tai];
handler.command = ["animedifv3"];
handler.premium = true;
handler.limit = true;

export default handler;
