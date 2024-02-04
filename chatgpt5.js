import fetch from "node-fetch";
const handler = async (m, { text }) => {
	try {
		if (!text) return m.reply("Ketik .chatgpt5 <teks>");
		await fetch(`https://api.yanzbotz.my.id/api/ai/gpt5?query=${text}`)
			.then((result) => result.json())
			.then((x) => m.reply(x.result));
	} catch (e) {
		m.reply(error);
	}
};
handler.help = ["chatgpt5 *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = ["chatgpt5", "gpt5", "ai5"];

export default handler;
