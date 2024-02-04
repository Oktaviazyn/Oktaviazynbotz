import fetch from "node-fetch";
const handler = async (m, { text, command }) => {
	try {
		if (!text) return m.reply("Iya ada apa?, Raiden Disini kok");
		await fetch(
			`https://api.yanzbotz.my.id/api/ai/characterai?text=${
				command + text
			}&name=Raiden EI, Genshin Impact, Kamu adalah istriku`,
		)
			.then((result) => result.json())
			.then((x) => m.reply(x.result));
	} catch (e) {
		m.reply("Maaf Raiden tidak terlalu mengerti!");
	}
};

handler.help = ["raiden *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^(raiden)$/i;

export default handler;
