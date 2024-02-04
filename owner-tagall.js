let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
	let users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid);
	m.reply(
		`${text ? `${text}\n` : ""}┌─「 Tag All 」\n` +
			users.map((v) => "│◦❒ @" + v.replace(/@.+/, "")).join`\n` +
			"\n└────",
		null,
		{
			mentions: users,
		},
	);
};

handler.help = ["o-tagall 𝒈𝒓𝒐𝒖𝒑"];
handler.tags = [towner];
handler.command = ["o-tagall"];
handler.owner = true;
handler.group = true;

export default handler;
