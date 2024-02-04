import axios from "axios";
import uploadImage from "../lib/uploadImage.js";
import fs from "fs";

let handler = async (m, { conn, text, usedPrefix, command }) => {
	try {
		let q = m.quoted ? m.quoted : m;
		let mime = (q.msg || q).mimetype || "";
		if (!mime) throw "where is the photo? u want me to take a pic of ur mom?";
		if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`;

		let wait = "Menunggu...";
		m.reply(wait);

		let img = await q.download();
		let url = await uploadImage(img);

		let response = `https://api.yanzbotz.my.id/api/ai/bardimg?query=${text}&url=${url}&apiKey=user`;

		const eak = await axios.get(response);

		const alicia = eak.data.result;

		await m.reply(alicia);
	} catch (e) {
		console.error("Error:", error);
		conn.reply(m.chat, error, m);
	}
};

handler.help = ["bardimg *ʀᴇᴘʟʏ ꜰᴏᴛᴏ*"];
handler.tags = [tai];
handler.command = ["bardimg"];
handler.limit = true;

export default handler;
