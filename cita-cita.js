import fetch from "node-fetch";

let handler = async (m, { conn, command }) => {
	let res = await fetch(
		"https://raw.githubusercontent.com/BadXyz/txt/main/citacita/citacita.json",
	);
	let json = await res.json();

	// Assuming fsizedoc is supposed to be a variable with the desired value
	let fsizedoc = 10; // Replace 10 with the actual value you want

	await conn.sendMessage(
		m.chat,
		{
			audio: { url: json.getRandom() },
			seconds: fsizedoc,
			ptt: true,
			mimetype: "audio/mpeg",
			fileName: "vn.mp3",
			waveform: [100, 0, 100, 0, 100, 0, 100],
		},
		{ quoted: m },
	);
};

handler.help = ["citacita"];
handler.tags = [trandom]; // Assuming 'trandom' is a typo, replaced with 'random'
handler.command = /^(citacita)$/i;

export default handler;
