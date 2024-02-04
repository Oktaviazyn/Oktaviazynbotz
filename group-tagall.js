let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
	let users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid);
	m.reply(
		`*Teks:*\n${text ? `${text}\n` : ""}\n⛊──⛾「 Tag All 」⛾──⛊\n` +
			users.map((v) => "│♪ @" + v.replace(/@.+/, "")).join`\n` +
			"\n⛊──⛾「 Tag All 」⛾──⛊",
		null,
		{
			mentions: users,
		},
	);
};

handler.help = ["tagall *𝒈𝒓𝒐𝒖𝒑*"];
handler.tags = [tgroup];
handler.command = ["tagall"];
handler.admin = true;
handler.group = true;

export default handler;
