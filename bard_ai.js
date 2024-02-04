import Bard from "bard-ai";

const handler = async (m, { conn, text }) => {
	if (!text) throw "Yes, can I help you ?";
	try {
		const myBard = new Bard(
			"aQg-UaZ0qzxG2IZmZiSrCJlTEtbqU5nsuBtmG2lZs0TLmR3aMi9dfksLZ7SWixbrxZRHEA.",
		);
		const message = await myBard.ask(text);
		m.reply(message);
	} catch (e) {
		console.log(e);
		throw "Error response Bard Ai";
	}
};
handler.help = ["bard *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^(bard)$/i;

handler.limit = true;

export default handler;
