import fetch from "node-fetch";
import { BardAI } from "bardie";

const handler = async (m, { conn, text }) => {
	if (!text) throw "Yes, can I help you ?";
	try {
		const bard = new BardAI();
		const response = await bard.question({ ask: text });
		if (!response.status) {
			m.reply(response.content);
			throw "Try Again Later..";
		}
	} catch (e) {
		console.log(e);
		throw "Error response Bard Ai";
	}
};

handler.help = ["bardie *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^(bardie)$/i;
handler.limit = true;

export default handler;
