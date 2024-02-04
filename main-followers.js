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
NEED LIST *FOLLOWERS MINT* :

INSTAGRAM FOLL INDO

        200 FOLLOWERS 5RB
        400 FOLLOWERS 10RB
        600 FOLLOWERS 15RB
        900 FOLLOWERS 20RB
         1000 FOLLOWERS 25RB

NOTE : PERMANEN

TETIS 
https://instagram.com/layanan_sosial_media

INSTAGRAM FOL LUAR

       200 FOLLOWERS 5RB
       500 FOLLOWERS 10RB
       700 FOLLOWERS 15RB
       1000 FOLLOWERS 20RB
        2000 FOLLOWERS 35 RB

NOTE: PERMANEN

VIA :DANA
Group : https://chat.whatsapp.com/EDsI9GTiljt9RdBw8ZZo6W

Terima kasih, semoga bermanfaat.
`.trim(),
	);
};

handler.help = ["flw"];
handler.tags = [tmain];
handler.command = ["flw"];

export default handler;
