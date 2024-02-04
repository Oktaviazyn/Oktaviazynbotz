let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return m.reply("Ketik: .absolutev2 <prompt>");
	m.reply(wait);
	try {
		let data = `https://api.yanzbotz.my.id/api/text2img/absolutelyV2?prompt=${text}`;
		conn.sendFile(m.chat, data, "apa", `Prompt : ${text}`, m);
	} catch (e) {
		m.reply(error);
	}
};
handler.help = ["absolutev2 *<prompt>*"];
handler.tags = [tai];
handler.command = ["absolutev2"];

export default handler;
