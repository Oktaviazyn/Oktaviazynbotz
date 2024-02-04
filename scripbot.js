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
*≡ SCRIPT PREMIUM*

「 *Nezuu.Botz V2* 」
「 *No bot : 6287736551289* 」

⛊ Special Features :
" *Cai character/ai character* "
" *Diffusion/animedif* ",
" *Neima/midjourney* ",
" *Aivoice/ttsanime/micmonster* ",
" *Ai, ChatGpt, Bard* ",
" *Ulartangga* ",
" *Play ytmp43* ",
" *Bingimage/realistic* ",
" *Owner, Creator, Mods* ",
" *Txt2img/txt3img* ",
" *Zetavoice/kobovoice* ", 
" *Jadianime/storyanime* ", 
💡 _Masih banyak lagi ya guys_

Benefits :
☰ Free Updates Insyaallah 😹
☰ Bonus ApiKey Premium🤭

Jika Kalian Berminat :
- Hubungin 088994107174
🏷️ HARGA : *~40.000~*
🏷️ HARGA : *20.000* _Creator Baik Hati_*
`.trim(),
	);
};

handler.help = ["script"];
handler.tags = [tmain];
handler.command = ["sc", "script"];

export default handler;
