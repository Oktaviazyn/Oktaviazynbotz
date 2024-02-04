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
Halloo 👋Dsini Adalah Menu sewa Yui Jika Ingin Menysewa Yui Hubungin Owner Yui Yaaa💞
        
1. Grup / 30 Hari
Rp. 15.000 Dana
Rp. 15.000 Pulsa

2. Premium / 30 Hari
Rp. 10.000 Dana
Rp. 10.000 Pulsa

3. Premium + Grup / 30 Hari
Rp. 20.000 Dana
Rp. 20.000 Pulsa

Jika Ingin Menysewa Yui Ketik .owner🐾

Terima kasih.
`.trim(),
	);
};

handler.help = ["sewabot"];
handler.tags = [tmain];
handler.command = ["sewabot"];

export default handler;
