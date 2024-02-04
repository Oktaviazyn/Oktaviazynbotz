import axios from "axios";

export default async function handler(m, { text }) {
	if (!text)
		return m.reply(
			"Usage:\n!blackbox < prompt >\n\nExample:\n!blackbox What is javascript",
		);
	try {
		const getJson = await blackbox(text);
		const getText = await getJson.response[0][0];
		conn.sendMessage(
			m.chat,
			{
				text: getText.trim(),
				mentions: [m.sender],
			},
			{
				quoted: m,
			},
		);
	} catch (e) {
		m.reply(eror);
	}
}
handler.command = ["blackbox"];
handler.help = ["blackbox *ᴛᴇxᴛ*"];
handler.tags = [tai];

const blackbox = (text) => {
	return new Promise(async (resolve, reject) => {
		await axios
			.post("https://www.useblackbox.io/chat-request-v4", {
				textInput: text,
				allMessages: [
					{
						user: text,
					},
				],
				stream: "",
				clickedContinue: false,
			})
			.then((response) => {
				resolve(response.data);
			})
			.catch((e) => {
				resolve(e?.response);
			});
	});
};
