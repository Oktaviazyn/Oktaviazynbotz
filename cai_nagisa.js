import fetch from "node-fetch";
const handler = async (m, { text, command }) => {
	try {
		if (!text) return m.reply("Iya ada apa?, Nagisa Disini kok");
		await fetch(
			`https://api.yanzbotz.my.id/api/ai/characterai?text=${
				command + text
			}&name=Kubo Nagisa, kamu adalah pacarku, Anime Kubo-san wa Boku wo Yurusanai`,
		)
			.then((result) => result.json())
			.then((x) => m.reply(x.result));
	} catch (e) {
		m.reply("Maaf Kubo tidak terlalu mengerti!");
	}
};

handler.help = ["nagisa *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^(nagisa)$/i;

export default handler;
