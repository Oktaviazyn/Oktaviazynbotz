import fetch from "node-fetch";

let handler = async (m, { conn, text, command }) => {
	if (!text) throw `Teksnya`;
	let url = `https://kiicodeofficial.my.id/api/ai/dalle?text=${text}&apikey=Ceri`;
	conn.sendFile(m.chat, await (await fetch(url)).buffer(), url, null);
};
handler.command = /^(dalle|aidalle|openaiimage)$/i;
handler.tags = [tai];
handler.help = ["openaiimage *ᴛᴇxᴛ*", "dalle *ᴛᴇxᴛ*"];
handler.limit = true;
handler.premium = false;
export default handler;