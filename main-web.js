/*
 * Nama Pengembang: Aliciazyn
 * Kontak Whatsapp: wa.me/6288268142831
 * Akun Github: github.com/AiciaxyviorMd
 * Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
 */

/*
 * Nama Pengembang: Aliciazyn
 * Kontak Whatsapp: wa.me/6288268142831
 * Akun Github: github.com/AiciaxyviorMd
 * Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
 */

import { promises } from "fs";
import { join } from "path";

let handler = async function (m, { conn, __dirname }) {
	let _package =
		JSON.parse(
			await promises
				.readFile(join(__dirname, "../package.json"))
				.catch((_) => ({})),
		) || {};

	m.reply(
		`
*Global.Website* :

*Website OffC*
https://www.youtube.com/@aliciazyn

*Chanel Wa*
https://whatsapp.com/channel/0029VaEneoWInlqGcjxgdg2Z

*Website Gh:*
 https://github.com/AiciaxyviorMd
`.trim(),
	);
};

handler.help = ["web"];
handler.tags = [tmain];
handler.command = ["web"];

export default handler;
