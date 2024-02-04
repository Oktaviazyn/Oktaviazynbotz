let handler = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = {
		// Switch Case Like :v
		open: "bukan_pengumuman",
		close: "pengumuman",
	}[args[0] || ""];
	if (isClose === undefined)
		throw `
*Format salah! Contoh :*
  *○ ${usedPrefix + command} close*
  *○ ${usedPrefix + command} open*
`.trim();
	await conn.groupSettingUpdate(m.chat, isClose);
};
handler.help = ["groupsetting *ᴄʟᴏꜱᴇ / ᴏᴘᴇɴ*"];
handler.tags = [tgroup];
handler.command = /^(group|groupsetting)$/i;

handler.admin = true;
handler.botAdmin = true;
handler.owner = true;
export default handler;
