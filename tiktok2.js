import fetch from "node-fetch";

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text)
		throw `Masukkan link Tiktok!\nExample : .tiktok https://vm.tiktok.com/ZSNFY6Tf9/`;
	m.reply(wait);
	let abc = await fetch(
		`https://api.arifzyn.xyz/download/tiktok?url=${text}`,
	).then((res) => res.json());
	let bcd = abc.result.video["no-watermark"];

	conn.sendFile(m.chat, bcd, "", `*Tiktok Downloader ❦*\n\n_© Nezuu.Botz_`, m);
};
handler.help = ["tiktok2 *𝒖𝒓𝒍*"];
handler.tags = [tdownload];
handler.command = ["tiktok2", "tt2", "tiktokdl2", "ttdl2"];

export default handler;
