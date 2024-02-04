import api from "api-dylux";
import fetch from "node-fetch";

let handler = async (m, { text, usedPrefix, command }) => {
	if (!text)
		throw `Masukkan Link Tiktok!\nExample\n${
			usedPrefix + command
		} https://vm.tiktok.com/ZSNFY6Tf9/`;

	m.reply(wait);
	try {
		let data = await api.tiktok2(text);
		let bcd = data.video.noWatermark;

		conn.sendFile(
			m.chat,
			bcd,
			"",
			`*Tiktok Downloader ❦*\n\n_© Nezuu.Botz_`,
			m,
		);
	} catch (e) {
		m.reply(error);
	}
};
handler.help = ["tiktok *𝒖𝒓𝒍*"];
handler.tags = [tdownload];
handler.command = ["tiktok", "tt", "tiktokdl", "ttdl"];

export default handler;
