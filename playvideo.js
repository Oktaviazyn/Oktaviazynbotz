import ytdl from "ytdl-core";
import yts from "yt-search";
import fetch from "node-fetch";
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return m.reply("Teksnya mana");
	let emi = "Emilia WhatApp Bot";
	m.reply(wait);
	try {
		let search = await yts(text);
		let url =
			search.all[0].type === "channel" ? search.all[1].url : search.all[0].url;
		let mp4 = await ytmp4(url);
		let title = mp4.meta.title;
		conn.sendFile(m.chat, mp4.buffer, title + ".mp4", "", m, 0, {
			mimetype: "video/mp4",
			asDocument: true,
			contextInfo: {
				externalAdReply: {
					title: title,
					body: emi,
					thumbnailUrl: mp4.meta.image,
					thumbnail: (await fetch(mp4.meta.image)).buffer(),
					mediaType: 2,
					mediaUrl: url,
				},
			},
		});
	} catch (e) {
		m.reply(eror);
	}
};
handler.help = ["playvideo *qᴜᴇʀʏ*"];
handler.tags = [tdownload];
handler.command = ["playvideo", "playmp4"];

export default handler;

async function ytmp4(url) {
	try {
		const { videoDetails } = await ytdl.getInfo(url, {
			lang: "id",
		});
		const stream = ytdl(url, {
			filter: "videoandaudio",
		});
		const chunks = [];
		stream.on("data", (chunk) => {
			chunks.push(chunk);
		});
		await new Promise((resolve, reject) => {
			stream.on("end", resolve);
			stream.on("error", reject);
		});
		const buffer = Buffer.concat(chunks);
		return {
			meta: {
				title: videoDetails.title,
				channel: videoDetails.author.name,
				seconds: videoDetails.lengthSeconds,
				description: videoDetails.description,
				image: videoDetails.thumbnails.slice(-1)[0].url,
			},
			buffer: buffer,
			size: buffer.length,
		};
	} catch (error) {
		throw error;
	}
}
