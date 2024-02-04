import fs from "fs";

const handler = async (m, { conn, args, command }) => {
	const img = "https://telegra.ph/file/7f26a7dee8cda798f34f9.png";
	const owner = `
    Hai teman-teman! 🌟 Jika kalian menikmati layanan bot WhatsApp ini dan ingin mendukung pengembangan serta pemeliharaannya, mari berkontribusi dengan donasi. Dukungan kalian sangat berarti untuk menjaga agar bot tetap berjalan lancar dan memberikan manfaat kepada semua pengguna.

Donasi dari kalian akan digunakan untuk biaya server, pemeliharaan, dan pengembangan fitur baru. Terima kasih atas setiap dukungan dan kontribusinya! 

 *Donasi Bot*
Donasi Bot terserah kalian mau berapa yang penting iklas dalem memberikan , Kini Bot Yuihoshikawa dalam tahap pengebangan Jika ingin membantu silakan *Hubungi Owner*
  `;

	await conn.sendFile(m.chat, img, "payment.jpg", `${owner}`, m);
};

handler.help = ["donasi"];
handler.tags = [ttools];
handler.command = /^(donasi)$/i;

export default handler;
