import { addExif } from "../lib/sticker.js";

let handler = async (m, { conn, text }) => {
	if (!m.quoted) throw "Quoted the sticker!";
	let stiker = false;
	try {
		let [packname, ...author] = text.split("|");
		author = (author || []).join("|");
		let mime = m.quoted.mimetype || "";
		if (!/webp/.test(mime)) throw "Balas sticker!";
		let img = await m.quoted.download();
		if (!img) throw "Balas sebuah sticker!";
		stiker = await addExif(img, packname || "", author || "");
	} catch (e) {
		console.error(e);
		if (Buffer.isBuffer(e)) stiker = e;
	} finally {
		if (stiker)
			conn.sendFile(m.chat, stiker, "wm.webp", "", m, false, {
				asSticker: true,
			});
		else throw "Gagal [Error 404]";
	}
};
handler.help = ["stickerwm *ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ*"];
handler.tags = [ttools];
handler.command = /^(stickerwm|stikerwm|swm)$/i;

export default handler;
