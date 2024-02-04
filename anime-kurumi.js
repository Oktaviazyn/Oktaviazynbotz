import fetch from "node-fetch";

let handler = async (m, { conn }) => {
	try {
		let response = await fetch(
			`https://api.royalprinz.my.id/api/animepic/kurumi`,
		);
		let data = await response.buffer();
		await conn.sendFile(m.chat, data, "neko.png", "Nih kak >,<", m);
	} catch (e) {
		console.error(e);
		return conn.reply(m.chat, "Terjadi kesalahan saat mengambil gambar.", m);
	}
};

handler.help = ["kurumi"];
handler.tags = [tanime];
handler.command = /^(kurumi)$/i;

export default handler;
