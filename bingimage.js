/*ALICIA*/

import axios from "axios";

var handler = async (m, { conn, text, usedPrefix, a5wXu8gj58, command }) => {
	if (!text) throw `Use example ${usedPrefix}${command} pormpt nya maze`;
	m.reply("Silahkan Tunggu Kami membutuhkan waktu");
	const saru = await axios.get(
		`https://api.ibeng.tech/api/ai/bingcreate?q=${text}&apikey=a5wXu8gj58`,
	);

	for (let i = 0; i < saru.data.data.length; i++) {
		let semarmesem = saru.data.data[i];
		await conn.sendFile(
			m.chat,
			semarmesem,
			`binginmmagw_${i}.jpg`,
			`*Result:* ${text}\n*Source:* api.ibeng.tech`,
			m,
		);
	}
};

handler.help = ["bingimage *𝒑𝒓𝒐𝒎𝒑𝒕*"];
handler.tags = [tai];
handler.premium = true;
handler.command = /^(bingimage|lmaokang)$/i;

export default handler;
