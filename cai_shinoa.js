import fetch from "node-fetch";
const handler = async (m, { text }) => {
	try {
		if (!text) return m.reply("Iya ada apa?, Shinoa Disini kok");
		await fetch(
			`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=shinoa hiiragi`,
		)
			.then((result) => result.json())
			.then((x) => m.reply(x.result));
	} catch (e) {
		m.reply("Maaf Shinoa tidak terlalu mengerti!");
	}
};

handler.help = ["shinoa *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^(shinoa)$/i;

export default handler;
