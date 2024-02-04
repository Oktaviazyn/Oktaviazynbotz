export default async function handler(m, { text }) {
	const member = await (
		await conn.groupMetadata(m.chat)
	).participants.map((v) => v.id);
	var txt = "";
	member.forEach(function (x) {
		const vcard = [
			"BEGIN:VCARD",
			"VERSION:3.0",
			`FN:${conn.getName(x)}`,
			`TEL;type=CELL;type=VOICE;waid=${x.split("@")[0]}:+${x.split("@")[0]}`,
			"END:VCARD",
			"",
		].join("\n");
		txt += vcard;
	});
	conn.sendMessage(
		m.chat,
		{
			document: Buffer.from(txt, "utf-8"),
			fileName: "contacts.vcf",
			mimetype: "text/vcard",
		},
		{
			quoted: m,
		},
	);
}
handler.help = ["getcontact 🅟"];
handler.tags = [tgroup];
handler.command = ["getcontact", "getkontak", "savecontact", "savekontak"];

handler.group = true;
