/*
 * Nama Pengembang: Aliciazyn
 * Kontak Whatsapp: wa.me/6288268142831
 * Akun Github: github.com/AiciaxyviorMd
 * Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
 */

export async function before(m, { conn, participants }) {
	// Inisialisasi state jika belum ada
	if (!conn.time_join) {
		conn.time_join = {
			join: false,
			time: 0,
		};
	}

	const currentTime = Math.floor(Date.now() / 1000);

	// Cek apakah pesan berasal dari grup dan apakah sudah memenuhi cooldown
	if (!m.isGroup || conn.time_join.time > currentTime) {
		console.log("Not a group message or still in cooldown");
		return;
	}

	// Cek apakah pengirim adalah user premium
	const isOwners = global.db.data.users[m.sender]?.owner;

	let messageText = "";
	let mentionedUsers = participants
		.map((u) => u.id)
		.filter((v) => v !== conn.user.jid);

	// Logika sambutan berdasarkan nomor pengirim
	switch (m.sender) {
		case "6287817197812@s.whatsapp.net":
			messageText = "*_Hallo Kak Meinanda Cantik 🥰_* ";
			break;
		case "6288994107174@s.whatsapp.net":
			messageText = "*_Hallo Pencipta ku 😘_* ";
			break;
		default:
			if (isOwners) {
				messageText = "Selamat datang, Owner ku !";
			}
			break;
	}

	// Kirim pesan jika ada teks sambutan yang harus dikirim
	if (messageText) {
		await conn.sendMessage(
			m.chat,
			{
				text: messageText,
			},
			{
				quoted: m,
				mentions: mentionedUsers,
			},
		);

		// Atur ulang state time_join untuk cooldown
		conn.time_join = {
			join: true,
			time: currentTime + 600, // Cooldown 2 detik
		};
	} else {
		console.log("No message to send");
	}
}

/*
Danil jomok
*/
