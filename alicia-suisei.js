// Import the necessary modules using ESM syntax
import fetch from "node-fetch";

// Define the handler function
let handler = async (m, { text, usedPrefix, command }) => {
	if (!text) return m.reply("Masukan query");

	let order = {
		text: wait,
		mentions: [m.sender],
		contextInfo: { forwardingScore: 256, isForwarded: true },
	};

	// Use template literals for the URL
	let zeta = await fetch(
		`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=nama suisei ada yang bisa saya bantu?`,
	);
	let oke = await zeta.json();

	// Adjust the response structure and export default
	conn.sendMessage(
		m.chat,
		{
			text: `${oke.result}`,
			contextInfo: {
				externalAdReply: {
					showAdAttribution: false,
					title: "Nama Nezuu",
					body: "Character Ai",
					mediaUrl: "",
					description: "",
					previewType: "PHOTO",
					thumbnailUrl: `https://telegra.ph/file/43d9fcff57f9d2dad81a4.jpg`, // Gambar chara
				},
			},
		},
		{ quoted: m },
	);
};

// Add help, tags, command, and premium properties
handler.help = ["suisei *ᴛᴇxᴛ*"];
handler.tags = [tai];
handler.command = /^(suisei)$/i;
handler.premium = false;

// Export the handler as the default module export
export default handler;
