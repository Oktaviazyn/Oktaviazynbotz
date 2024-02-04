import axios from "axios";
import { FormData, Blob } from "formdata-node";

const handler = async (m) => {
	try {
		const q = m.quoted ?? m;
		const mime = (q.msg ?? q).mimetype;
		if (!mime)
			return m.reply(
				`Usage:\nBalas pesan bertipe Foto / Gambar dengan caption ↓\n!unblur`,
			);
		await m.reply(wait);
		const buffer = await q.download();
		const tmpFiles = await Tmp(buffer);
		const x = await unblur(tmpFiles);
		conn.sendMessage(
			m.chat,
			{ image: { url: x.url }, mentions: [m.sender] },
			{ quoted: m },
		);
	} catch (e) {
		m.reply("Error");
	}
};
handler.help = ["enhance *ʀᴇᴘʟʏ ꜰᴏᴛᴏ*"];
handler.tags = [ttools];
handler.command = ["enhance", "unblur", "upscale", "hd"];
export default handler;

async function unblur(url, scale) {
	const scaleNumber = scale ? scale : 2;
	const { data } = await axios(`https://toolsapi.spyne.ai/api/forward`, {
		method: "post",
		data: {
			image_url: url,
			scale: scaleNumber,
			save_params: {
				extension: ".png",
				quality: 95,
			},
		},
		headers: {
			"content-type": "application/json",
			accept: "*/*",
		},
	});
	return data;
}

function Tmp(imageBuffer) {
	return new Promise(async (resolve, reject) => {
		try {
			const form = new FormData();
			const blob = new Blob([imageBuffer], { type: "image/jpg" });
			form.append("file", blob, "image.jpg");
			const { data } = await axios
				.request({
					baseURL: "https://tmpfiles.org",
					url: "/api/v1/upload",
					method: "POST",
					data: form,
				})
				.catch((e) => e?.response);
			const result = data.data.url.replace(
				"https://tmpfiles.org",
				"https://tmpfiles.org/dl",
			);
			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
}
