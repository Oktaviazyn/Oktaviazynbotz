import gtts from "node-gtts";
import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import axios from "axios";

let getBuffer = async (url, options) => {
	try {
		options = options || {};
		const res = await axios({
			method: "get",
			url,
			headers: {
				DNT: 1,
				"Upgrade-Insecure-Request": 1,
			},
			...options,
			responseType: "arraybuffer",
		});
		return res.data;
	} catch (e) {
		console.log(`Error: ${e}`);
	}
};

const handler = async (m, { conn, text }) => {
	if (!text) return m.reply("🐱 Input Text");
	try {
		const apiUrl = `https://api.azz.biz.id/api/alicia?q=${encodeURIComponent(
			m.quoted && m.quoted.text
				? `AI : "${m.quoted.text}"\n\nUser : ${text}`
				: `User : ${text}`,
		)}&user=${m.sender}&key=alok`;

		const response = await axios.get(apiUrl);
		const responseData = response.data.respon;

		const ttsBuffer = await getBuffer(
			`https://api.yanzbotz.my.id/api/tts/janie?query=${encodeURIComponent(
				responseData,
			)}`,
		);

		conn.sendMessage(
			m.chat,
			{
				audio: ttsBuffer,
				mimetype: "audio/mpeg",
				ptt: true,
				contextInfo: {
					mentionedJid: [m.sender],
					externalAdReply: {
						body: "",
						containsAutoReply: true,
						mediaType: 1,
						mediaUrl: "",
						renderLargerThumbnail: true,
						showAdAttribution: true,
						sourceUrl: "",
						thumbnail: await getBuffer(
							"https://telegra.ph/file/c1a543378f281747a29aa.jpg",
						),
						title: "Alicia Kheng",
					},
				},
			},
			{ quoted: m },
		);
	} catch (e) {
		console.log(`Error: ${e}`);
		saying("Error Bang", conn, m);
	}
};

handler.help = ["aivoice *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^(aivoice)$/i;
handler.limit = true;
handler.premium = false;

export default handler;
