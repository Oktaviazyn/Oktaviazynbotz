let handler = async (m, { conn, text, isROwner, isOwner }) => {
	if (text) {
		if (isROwner) global.conn.welcome = text;
		else if (isOwner) conn.welcome = text;
		global.db.data.chats[m.chat].sWelcome = text;
		m.reply("Welcome berhasil diatur");
	} else
		throw "Contoh penggunaan:\n\n@user (Mention)\n@subject (Judul Grup)\n@desc (Deskripsi Grup)";
};
handler.help = ["setwelcome *ᴛᴇxᴛ*"];
handler.tags = [tgroup];
handler.command = /^setwelcome$/i;

handler.admin = true;
handler.botAdmin = true;

export default handler;
