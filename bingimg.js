import axios from "axios";

var handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Use example ${usedPrefix}${command} pormpt nya maze`;
	m.reply("Silahkan Tunggu Kami membutuhkan waktu");

	try {
		const saru = await axios.get(
			`https://kiicodeofficial.my.id/api/ai/bingcreate?q=${text}&apikey=Ceri`,
		);

		console.log("Response from API:", saru.data);

		if (saru.data && saru.data.data && saru.data.data.length > 0) {
			for (let i = 0; i < saru.data.data.length; i++) {
				let semarmesem = saru.data.data[i];
				console.log("Image URL:", semarmesem);

				await conn.sendFile(
					m.chat,
					semarmesem,
					`binginmmagw_${i}.jpg`,
					`*Result:* ${text}\n*Source:* kiicodeofficial.my.id`,
					m,
				);
			}
		} else {
			m.reply("No data found for the given prompt.");
		}
	} catch (error) {
		console.error("Error fetching data:", error);
		m.reply("Error fetching data. Please try again later.");
	}
};

handler.help = ["bingimg *𝒑𝒓𝒐𝒎𝒑𝒕*"];
handler.tags = [tai]; // Assuming 'tai' is a defined variable
handler.premium = true;
handler.command = /^(bingimg|hayangbing)$/i;

export default handler;
