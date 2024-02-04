import fetch from "node-fetch";
const handler = async (m, { text }) => {
	try {
		if (!text) return m.reply("Ketik .chatgpt3 <teks>");
		await fetch(`https://api.yanzbotz.my.id/api/ai/gpt3?query=${text}`)
			.then((result) => result.json())
			.then((x) => m.reply(x.result));
	} catch (e) {
		m.reply(error);
	}
};
handler.help = ["chatgpt3 *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = ["chatgpt3", "gpt3", "ai3"];

export default handler;
