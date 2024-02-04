import { googleImage } from "@bochilteam/scraper";
var handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Use example ${usedPrefix}${command} Minecraft`;
	const res = await googleImage(text);
	let image = res.getRandom();
	let link = image;
	conn.sendFile(
		m.chat,
		link,
		"google.jpg",
		`*Google Image*
*-* Result: ${text}
*-* Source: Google
`,
		m,
	);
};
handler.help = ["gimage *ᴛᴇxᴛ*"];
handler.tags = [tdownload];
handler.command = /^(gimage|googleimage|image)$/i;

export default handler;
