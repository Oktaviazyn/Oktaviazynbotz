let handler = async (m, { conn, text, usedPrefix, command }) => {
	const deleteMessage = {
		delete: {
			remoteJid: m.key.remoteJid,
			fromMe: false,
			id: m.key.id,
			participant: [m.sender],
		},
	};
	await conn.sendMessage(m.chat, deleteMessage);
	conn.sendMessage(
		m.chat,
		{ text: " *Pa Pe Pa Pe Etikanya Mana Nih, Ga bisa apa salam sesuai agamamu?* " },
		{ quoted: m, ephemeralExpiration: global.ephemeral },
	);
};

handler.customPrefix = /^(p)$/i;
handler.command = new RegExp();
export default handler;