let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return m.reply("Ketik: .animedifv2 <prompt>");
	m.reply(wait);
	try {
		let data = `https://api.yanzbotz.my.id/api/text2img/anything?prompt=${text}`;
		conn.sendFile(m.chat, data, "apa", `Prompt : ${text}`, m);
	} catch (e) {
		m.reply(error);
	}
};
handler.help = ["animedifv2 *<𝒑𝒓𝒐𝒎𝒑𝒕>*"];
handler.tags = [tai];
handler.command = ["animedifv2"];
handler.premium = true;
handler.limit = true;

export default handler;
