let handler = async (m, { conn, args, usedPrefix, command, participants }) => {
	let isClose = {
		// Switch Case Like :v
		open: "not_announcement",
		close: "announcement",
		unlock: "unlocked",
		lock: "locked",
	}[args[0] || ""];
	if (isClose === undefined)
		throw `
*Format salah! Contoh :*
  *○ ${usedPrefix + command} close*
  *○ ${usedPrefix + command} open*
  *○ ${usedPrefix + command} unlock*
  *○ ${usedPrefix + command} lock*
`.trim();
	await conn.groupSettingUpdate(m.chat, isClose);
	conn.reply(m.chat, `Grup Telah Di ${isClose}`, m, {
		mentions: participants.map((a) => a.id),
	});
};
handler.help = ["group *ᴄʟᴏꜱᴇ / ᴏᴘᴇɴ*"];
handler.tags = [tgroup];
handler.command = /^(group)$/i;

handler.admin = true;
handler.botAdmin = true;

export default handler;
