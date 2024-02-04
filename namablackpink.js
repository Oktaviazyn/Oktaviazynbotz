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
Blackpink adalah grup vokal wanita asal Korea Selatan yang dibentuk oleh YG Entertainment pada tahun 2016. Grup ini terdiri dari empat anggota, yaitu:

* *Kim Jisoo* (지수) yang lahir pada tanggal 3 Januari 1995 di Seoul, Korea Selatan. Ia adalah anggota tertua di grup dan memiliki posisi sebagai vokalis dan visual.
![[Image of Kim Jisoo, anggota Blackpink]](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCyO0f9Kd2_J2c8DBGYrLPw1epiZF5yfepjvpIHiKocy_y5duQvtoc-7beRcJj)
* *Jennie Kim* (제니) yang lahir pada tanggal 16 Januari 1996 di Seoul, Korea Selatan. Ia memiliki posisi sebagai main rapper dan vokalis.
![[Image of Jennie Kim, anggota Blackpink]](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSruQ9V0f43JT6HKJenUuTt4hmsJpp2mmFLDcC5lSHu5aVLiCX1HXyXDSG0JF2N)
* *Roséanne Park* (로제) yang lahir pada tanggal 11 Februari 1997 di Auckland, Selandia Baru. Ia memiliki posisi sebagai main vokalis.
![[Image of Roséanne Park, anggota Blackpink]](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-8gFoaDWG3P3EAVIQbMLn7Naq2ps4o0xX05-dhkk6SR3RuIyVglJ08_dXQ_eG)
* *Lalisa Manobal* (ลิซ่า) yang lahir pada tanggal 27 Maret 1997 di Buriram, Thailand. Ia memiliki posisi sebagai rapper dan main dancer.
![[Image of Lalisa Manobal, anggota Blackpink]](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQY15VnKg7u2DwRnPhNKQjLa2oECWyHCZAdlUuU1t-N_hHEKx2Vja1RUD69_Gfo)

Blackpink telah menjadi salah satu grup K-Pop paling populer di dunia. Mereka telah memenangkan berbagai penghargaan, termasuk 24 Golden Disc Awards, 12 Mnet Asian Music Awards, dan 5 MTV Video Music Awards.

*Contoh*.pin roseanne park blackpink

Terima kasih, semoga bermanfaat.
`.trim(),
	);
};

handler.help = ["daftarnamablackpink"];
handler.tags = [tmain];
handler.command = ["daftarnamablackpink"];

export default handler;
