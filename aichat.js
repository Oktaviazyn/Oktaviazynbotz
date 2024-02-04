import fetch from "node-fetch";

const handler = async (m, { text }) => {
	if (!text)
		throw "Contoh: .aichat Pesan yang ingin Anda sampaikan kepada asisten AI";

	m.reply(wait);
	const messages = [
		{ role: "system", content: "Anda adalah asisten yang membantu." },
		{ role: "user", content: encodeURIComponent(text) },
	];

	try {
		const output = await Aichat.createAsync(model, messages);
		m.reply(output);
	} catch (error) {
		console.error("Error:", error);
		m.reply(eror);
	}
};

handler.help = ["aichat *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^(aichat)$/i;

export default handler;
