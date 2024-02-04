// Update By Xnuvers007

import fetch from "node-fetch";

var handler = async (m, { conn, text }) => {
	if (!text) throw `Masukan Judul Manga Yang Ingin Kamu Cari!`;
	conn.reply(m.chat, "Chottomatte...", m);
	let res = await fetch("https://api.jikan.moe/v4/manga?q=" + text);
	if (!res.ok) throw "Tidak Ditemukan";
	let json = await res.json();
	let {
		chapters,
		url,
		type,
		score,
		scored,
		scored_by,
		rank,
		popularity,
		members,
		background,
		status,
		volumes,
		synopsis,
		favorites,
	} = json.data[0];
	// let author = json.data[0].authors[0].name
	// let authormynimelist = json.data[0].authors[0].url
	let judul = json.data[0].titles
		.map((jud) => `${jud.title} [${jud.type}]`)
		.join(", ");
	let xnuvers007 = json.data[0].authors
		.map((Xnuvers007) => `${Xnuvers007.name} (${Xnuvers007.url})`)
		.join(", ");
	let genrenya = json.data[0].genres
		.map((xnvrs007) => `${xnvrs007.name}`)
		.join(", ");

	let animeingfo = `*-* Tittle : ${judul}
*-* Chapter : ${chapters}
*-* Type : ${type}
*-* Status : ${status}
*-* Genre : ${genrenya}
*-* Volume : ${volumes}
*-* Favorit : ${favorites}
*-* Score : ${score}
*-* Hasil Score : ${scored}
*-* Score Member : ${scored_by}
*-* Peringkat : ${rank}
*-* Popularitas : ${popularity}
*-* Members : ${members}
*-* Url : ${url}
*-* Authors : ${xnuvers007}
*-* Background : ${background}

*Sinopsis*
${synopsis}
`;
	conn.sendFile(
		m.chat,
		json.data[0].images.jpg.image_url,
		"manga.jpg",
		`*Hasil pencarian dari ${text}*\n` + animeingfo,
		m,
	);
};
handler.help = ["mangainfo *𝒋𝒖𝒅𝒖𝒍*"];
handler.tags = [tanime];
handler.command = /^(mangainfo|manga|infomanga)$/i;

export default handler;
