import fetch from "node-fetch";
const handler = async (m, { text, command }) => {
	try {
		if (!text) return m.reply("Iya ada apa?, Emilia Disini kok");
		await fetch(
			`https://api.yanzbotz.my.id/api/ai/characterai?text=${
				command + text
			}&name=nama elaina, kamu adalah istriku, penyayang, baik hati, anime majo no tabi tabi`,
		)
			.then((result) => result.json())
			.then((x) => m.reply(x.result));
	} catch (e) {
		m.reply("Maaf Elaina tidak terlalu mengerti!");
	}
};
handler.help = ["elaina *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^(elaina)$/i;

export default handler;
