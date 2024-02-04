import fetch from "node-fetch";
const handler = async (m, { text }) => {
	try {
		if (!text) return m.reply("Ketik .chatgpt4 <teks>");
		await fetch(`https://api.yanzbotz.my.id/api/ai/gpt4?query=${text}`)
			.then((result) => result.json())
			.then((x) => m.reply(x.result));
	} catch (e) {
		m.reply(error);
	}
};
handler.help = ["chatgpt4 *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = ["chatgpt4", "gpt4", "ai4"];

export default handler;
