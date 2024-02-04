let handler = async (m, { conn, text }) => {
	if (!text) throw `Masukan Text Untuk Bio Baru Bot`;
	try {
		await conn.updateProfileStatus(text).catch((_) => _);
		conn.reply(m.chat, "Sukses Mengganti Bio Bot", m);
	} catch {
		throw "Yah Error Kak...";
	}
};
handler.help = ["setbotbio *ᴛᴇxᴛ*"];
handler.tags = [towner];
handler.command = /^setbiobot|setbotbio$/i;
handler.rowner = true;

export default handler;
