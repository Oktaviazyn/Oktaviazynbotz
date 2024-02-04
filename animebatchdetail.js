import fetch from "node-fetch";
import { JSDOM } from "jsdom";

const handler = async (m, { conn, args }) => {
	if (args.length !== 1) {
		return conn.reply(
			m.chat,
			"Gunakan perintah ini dengan contoh: animebatchdetail [link]",
			m,
		);
	}

	const url = args[0];

	try {
		const response = await fetch(url);
		const html = await response.text();
		const { document } = new JSDOM(html).window;

		const detailElements = document.querySelectorAll(".spe span");
		const descriptionElements = document.querySelectorAll(".downman p");
		const downloadElements = document.querySelectorAll(".dlx ul");

		if (detailElements.length < 9) {
			return conn.reply(m.chat, "Tidak dapat menemukan info anime.", m);
		}

		const detail = Array.from(detailElements, (span) => span.textContent);
		const description = Array.from(descriptionElements, (p) => p.textContent);

		const downloads = Array.from(downloadElements, (ul) => {
			const quality = ul.querySelector("strong").textContent;
			const links = Array.from(ul.querySelectorAll("a"), (a) => {
				return `${a.textContent} ${a.href}`; // Menyertakan nama unduhan dan tautan
			});
			return `${quality}\n${links.join("\n")}`;
		});

		const [
			judul,
			judulAlternatif,
			tipe,
			status,
			_,
			season,
			releaseDate,
			studio,
			duration,
			genre,
			score,
		] = detail;
		const message = `
Anime Detail:
Judul Anime: ${judul}
Judul Alternatif: ${judulAlternatif}
Tipe Anime: ${tipe}
Status Anime: ${status}
Musim Rilis: ${season}
Tanggal Rilis: ${releaseDate}
Studio: ${studio}
Durasi per Episode: ${duration}
Genre: ${genre}
Skor: ${score}

Deskripsi:
${description.join("\n")}

Link Unduhan:
${downloads.join("\n")}
        `;

		conn.reply(m.chat, message, m);
	} catch (error) {
		console.error(error);
		conn.reply(
			m.chat,
			"Terjadi kesalahan saat mengambil data anime detail.",
			m,
		);
	}
};

handler.help = ["animebatchdetail *ʟɪɴᴋ*"];
handler.tags = [tanime];
handler.command = /^(animebatchdetail)$/i;

export default handler;
