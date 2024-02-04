let handler = async (m, { conn, groupMetadata }) => {
	conn.reply(m.chat, `${await groupMetadata.id}`, m);
};
handler.help = ["cekid *𝒈𝒓𝒐𝒖𝒑*"];
handler.tags = [tgroup];
handler.command = /^(cekid|idgc|gcid)$/i;

handler.group = true;

export default handler;
