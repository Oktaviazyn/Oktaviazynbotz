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
NEED LIST *VPS MINT* :

*Deskripsi Layanan:*  
Layanan: VPS 
Garansi Full 30 hari
Bisa Perpanjang

*Metode Pembayaran:*  
[Transfer Bank, Qriss, E-wallet]

*Update 22 Oktober 2023*

- CPU: 2 Core
- RAM: 1GB
- Disk: 50GB
- Os: Ubuntu
- Lokasi: US
- Harga: Rp27.000

- CPU: 2 Core
- RAM: 3 GB
- Disk: 25 GB 
- Os: Ubuntu
- Lokasi: US
- Harga: Rp28.000

- CPU: 1 Core
- RAM: 1,5 GB
- Disk: 30 GB 
- Os: Ubuntu
- Lokasi: US
- Harga: Rp30.000

- CPU: 4 Core
- RAM: 8GB
- Disk: 60GB
- Os: bebas req
- Lokasi: SG
- Harga: Rp110.000

- CPU: 8 Core
- RAM: 8GB
- Disk: 160GB
- Os: bebas req
- Lokasi: US
- Harga: Rp130.000

Admin : Junet
 6285179566808
Admin : Ifung
6282136015884

Group : https://chat.whatsapp.com/EDsI9GTiljt9RdBw8ZZo6W

Terima kasih, semoga bermanfaat.
`.trim(),
	);
};

handler.help = ["vps"];
handler.tags = [tmain];
handler.command = ["vps"];

export default handler;
