import fetch from "node-fetch";

const getyoubotResponse = async (q, u) => {
	try {
		const response = await fetch(
			`https://kiicodeofficial.my.id/api/others/cai?q=${q}&text=gw ibeng jomok&apikey=Ceri`,
		);
		const data = await response.json();
		return data.data.output;
	} catch (error) {
		console.error(error);
		return null;
	}
};

const handler = async (m, { text }) => {
	if (!text)
		throw "Contoh: .ibeng Pesan yang ingin Anda sampaikan kepada asisten AI";

	m.reply(wait);

	try {
		const response = await getyoubotResponse(text, m.name);

		m.reply(response);
	} catch (error) {
		console.error("Error:", error);
		m.reply(eror);
	}
};

handler.help = ["ibeng *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^(ibeng)$/i;

export default handler;