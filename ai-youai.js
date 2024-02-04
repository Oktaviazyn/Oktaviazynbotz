import fetch from "node-fetch";
import { createHash } from "crypto";

let handler = async (m, { conn, args, eror, usedPrefix, command }) => {
	let text;
	if (args.length >= 1) {
		text = args.slice(0).join(" ");
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text;
	} else {
		throw "Input Teks";
	}
	try {
		await m.reply("Menunggu...");
		let res = await youai(text);
		await m.reply(res);
	} catch (e) {
		throw eror;
	}
};
handler.help = ["youai *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^youai$/i;

export default handler;

/* Plugins by Alicia */
const API = "https://api.ibeng.tech/api/ai/youai?query=";
const KEY = "&apikey=6sPZmDZKLH";
async function youai(input) {
	const response = await fetch(API + input + KEY);
	const data = await response.json();
	return data.data.completion;
}
