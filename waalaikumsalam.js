var handler = async (m, { conn, usedPrefix: _p }) => {
	let info = `_وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ_\n_Wa\'alaikumussalam wr.wb._`;
	await conn.reply(m.chat, info, m);
	return conn.sendMessage(m.chat, {
		react: {
			text: "🙏",
			key: m.key,
		},
	});
};
handler.customPrefix =
	/^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i;
handler.command = new RegExp();

export default handler;
