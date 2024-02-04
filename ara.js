import util from "util";
import path from "path";

let handler = async (m, { conn, usedPrefix, command }) => {
	const araAudioURLs = [
		"https://bucin-livid.vercel.app/audio/ara2.mp3",
		"https://bucin-livid.vercel.app/audio/ara.mp3",
		"https://bucin-livid.vercel.app/audio/audio_ara-ara.mp3",
	];

	const loveyouAudioURLs = [
		"https://bucin-livid.vercel.app/audio/lopyou.mp3",
		"https://xnuvers007.github.io/mp3/loveyoubaby.mp3",
	];
	const randomAraAudio =
		araAudioURLs[Math.floor(Math.random() * araAudioURLs.length)];

	const randomLoveyouAudio =
		loveyouAudioURLs[Math.floor(Math.random() * loveyouAudioURLs.length)];
	if (command == "ara") {
		conn.sendFile(m.chat, randomAraAudio, "ara.mp3", null, m, true, {
			type: "audioMessage",
			ptt: true,
		});
	} else if (command == "lopyou" || command == "lopyu") {
		conn.sendFile(m.chat, randomLoveyouAudio, "lopyou.mp3", null, m, true, {
			type: "audioMessage",
			ptt: true,
		});
	}
};

handler.help = ["ara", "lopyou"];
handler.tags = [tanime];
handler.command = /^(ara|lopyo?u)$/i;

export default handler;
