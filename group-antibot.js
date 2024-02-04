let handler = async (
	m,
	{ conn, usedPrefix, command, args, isOwner, isAdmin, isROwner },
) => {
	let chat = global.db.data.chats[m.chat];

	if (args[0] === "on") {
		if (chat.antiBot) {
			return m.reply("**ANTI BOT**\n_Sudah diaktifkan sebelumnya!_");
		} else {
			chat.antiBot = true;
			return m.reply("**ANTI BOT**\n_Telah diaktifkan!_");
		}
	} else if (args[0] === "off") {
		if (!chat.antiBot) {
			return m.reply("**ANTI BOT**\n_Sudah dinonaktifkan sebelumnya!_");
		} else {
			chat.antiBot = false;
			return m.reply("**ANTI BOT**\n_Telah dinonaktifkan!_");
		}
	} else {
		return m.reply(`Gunakan ${usedPrefix}antibot <on/off>`);
	}
};

handler.help = ["antibot *on/off*"];
handler.tags = [tgroup];
handler.group = true;
handler.command = ["antibot"];

export default handler;
