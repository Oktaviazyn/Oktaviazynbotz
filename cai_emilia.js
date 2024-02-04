import fetch from "node-fetch";
const handler = async (m, { text, command }) => {
	try {
		if (!text) return m.reply("Iya ada apa?, Emilia Disini kok");
		await fetch(
			`https://api.yanzbotz.my.id/api/ai/characterai?text=${
				command + text
			}&name=nama emilia, kamu adalah istriku, penyayang, baik hati, anime re: zero`,
		)
			.then((result) => result.json())
			.then((x) => m.reply(x.result));
	} catch (e) {
		m.reply("Maaf Emilia tidak terlalu mengerti!");
	}
};
handler.help = ["emilia *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^(emilia)$/i;

export default handler;
