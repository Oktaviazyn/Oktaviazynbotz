import fetch from "node-fetch";

const handler = async (m, { conn, text }) => {
	if (!text) {
		m.reply("Ada yang bisa di bantu");
	} else {
		const apiUrl = `https://api.azz.biz.id/api/alicia?q=${text}&key=alok`;

		m.reply("bntr kak ak loding..."); // Add loading message

		try {
			const response = await fetch(apiUrl);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();
			const result = data.respon;
			m.reply(result);
		} catch (error) {
			console.error("There was a problem with the fetch operation:", error);
			m.reply("Maaf kak, api lagi emror");
		}
	}
};

handler.command = ["c-ai"];
handler.help = ["c-ai *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.premium = false;
handler.limit = false;

export default handler;
