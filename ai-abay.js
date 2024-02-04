/*iBeng*/
/*jangan hapus wm nye*/

import fetch from "node-fetch";

const getyoubotResponse = async (q, u) => {
	try {
		const response = await fetch(
			`https://api.ibeng.tech/api/others/cai?q=${q}&text=gw abay jomok&apikey=6sPZmDZKLH`,
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
		throw "Contoh: .abay Pesan yang ingin Anda sampaikan kepada asisten AI";

	m.reply(wait);

	try {
		const response = await getyoubotResponse(text, m.name);

		m.reply(response);
	} catch (error) {
		console.error("Error:", error);
		m.reply(eror);
	}
};

handler.help = ["abay *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^(abay)$/i;

export default handler;
