import axios from "axios";

const characterList = [
	"Nino",
	"Miku",
	"Paimon",
	"Klee",
	"Erza",
	"Luffy",
	"Robin",
];

const handler = async (m, { text, command, conn }) => {
	try {
		const parts = text.split(" ");
		const character = parts[0];
		const charaName = characterList.includes(character) ? character : "Nino";

		const userText = parts.slice(1).join(" ");

		if (!userText) return m.reply("Ketik .cai <nama_karakter> <teks>");

		const apiUrl = `https://api-charaai.vercel.app/charaai?chara=${charaName}&text=${userText}`;

		const response = await axios.get(apiUrl);

		if (response.status === 200) {
			const data = response.data.trim();
			if (data) {
				conn.reply(m.chat, data, m, {
					contextInfo: {
						externalAdReply: {
							title: "",
							body: "",
							thumbnailUrl: "",
							sourceUrl: "",
							mediaType: 2,
						},
					},
				});
			} else {
				m.reply("Tidak ada hasil yang ditemukan.");
			}
		} else {
			m.reply("Terjadi kesalahan saat mengambil data dari API.");
		}
	} catch (e) {
		m.reply("Terjadi kesalahan dalam mengambil data.");
		console.error(e);
	}
};

handler.command = ["danil"];
handler.tags = [tai];
handler.help = ["danil *<nama_karakter> <teks>*"];

export default handler;
