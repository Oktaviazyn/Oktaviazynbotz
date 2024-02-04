import fetch from "node-fetch";

let handler = async (m, { conn }) => {
	try {
		let response = await fetch(
			`https://api.royalprinz.my.id/api/animepic/gremory`,
		);
		let data = await response.buffer();
		await conn.sendFile(m.chat, data, "neko.png", "Nih kak >,<", m);
	} catch (e) {
		console.error(e);
		return conn.reply(m.chat, "Terjadi kesalahan saat mengambil gambar.", m);
	}
};

handler.help = ["gremory"];
handler.tags = [tanime];
handler.command = /^(gremory)$/i;

export default handler;
