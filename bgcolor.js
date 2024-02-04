import axios from "axios";
import uploadImage from "../lib/uploadImage.js";

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || "";
	if (!mime) return m.reply("Kirim/Reply Gambar Dengan Caption .bgcolor blue");
	if (!text) return m.reply("Kirim/Reply Gambar Dengan Caption .bgcolor blue");
	m.reply(wait);
	let media = await q.download();
	let urll = await uploadImage(media);
	let res = await bgColor(urll, text);
	conn.sendMessage(m.chat, {
		image: res,
		caption: `*Result* : ${usedPrefix + command} ${text}`,
	});
};
handler.help = ["bgcolor"];
handler.tags = [ttools];
handler.command = /^(bgcolor)$/i;

export default handler;

const bgColor = (url, color) => {
	return new Promise(async (resolve, reject) => {
		const payload = {
			image_file_b64: "",
			image_url: url,
			size: "preview",
			type: "auto",
			type_level: "1",
			format: "auto",
			roi: "0% 0% 100% 100%",
			crop: false,
			crop_margin: "0",
			scale: "original",
			position: "original",
			channels: "rgba",
			add_shadow: false,
			semitransparency: true,
			bg_color: color,
			bg_image_url: "",
		};
		await axios({
			method: "POST",
			url: "https://api.remove.bg/v1.0/removebg",
			data: payload,
			headers: {
				accept: "application/json",
				"X-API-Key": "UgjxxGCBGrEy98UwMwziHLp2",
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				const buffer = Buffer.from(res.data.data.result_b64, "base64");
				resolve(buffer);
			})
			.catch((e) => {
				resolve(e?.response);
			});
	});
};
