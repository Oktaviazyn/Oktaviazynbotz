var handler = async (m, { args, text, conn, usedPrefix, command }) => {
	if (!text)
		throw `Ketik : *${usedPrefix}${command} < nomor/tema >*
Contoh : *${usedPrefix}${command} 1/ungkapan umum*`;
	if (text === "1" || "ungkapan umum") {
		conn.sendMessage(
			m.chat,
			{
				text: `⭐ *UNGKAPAN UMUM* ⭐
======================

⚽ *はい 。*
       _hai_
       Ya.

🏀 *いいえ。*
        _iie_
       Tidak.

🏈 *おねがいします。*
       _onegai shimasu_
》 Terjemahan langsung: "Saya mohon."
》 Makna:
     • Tolong ya...
     • Mohon (bantuannya, kerjasamanya, dll...)

⚾ *こんにちは。*
       _konnichiwa_
》 Sebagai sapaan umum.
》 Makna:
     • Halo.
     • Selamat siang.

🥎 *おはようございます。*
       _ohayou gozaimasu_
       Selamat pagi.

🏓 *こんばんは。*
       _konbanwa_
       Selamat malam. (Untuk menyapa.)

🏸 *おやすみなさい。*
       _oyasumi nasai_
       Selamat malam. (Di akhir percakapan.)
》 *おやすみ。*
     _oyasumi_ (informal)

🎾 *はじめまして。*
       _hajimemashite_
》 Diucapkan ketika pertama bertemu, sebelum memperkenalkan diri.
》 Makna:
     • Salam kenal.

🪀 *よろしくおねがいします。*
       _yoroshiku onegai shimasu_
》 Biasanya diucapkan setelah perkenalan.
》 Makna:
     • Salam kenal.
     • Mohon kerjasamanya.

🏐 *もしもし。*
       _moshi moshi_
       Halo? (Ketika menelpon)

🏉 *すみません。*
       _sumimasen_
       • Permisi. (Ketika bertanya.)
       • Maaf. (Formal)

🥏 *ありがとうございます。*
       _arigatou gozaimasu_
       Terima kasih banyak.
》 *ありがとう。*
      _arigatou_ (informal)
      • Terima kasih.
      • Makasih.

🎱 *ごめんなさい。*
       _gomen nasai_
       • Mohon maaf.
       • Maafkan aku.
》 *ごめん。*
     _gomen_ (informal)
_______________________
🇯🇵 Belajar Nihon-go`,
			},
			{ quoted: m },
		);
	} else if (text === "2" && text === "huruf hiragana dasar") {
		conn.sendMessage(
			m.chat,
			{
				text: `⭐ *HURUF HIRAGANA DASAR* ⭐
=====================

Huruf hiragana yaitu salah satu jenis huruf Jepang.

Ia dipakai biasanya untuk menulis kata-kata yang berasal dari bahasa Jepang sendiri (yang berasal dari bahasa asing umumnya pakai huruf Katakana).

Untuk pemula yang belajar bahasa Jepang biasanya masih banyak menggunakan Hiragana, dan semakin tinggi levelnya, akan semakin banyak menggunakan kanji.

Huruf-huruf dasar hiragana yang umum yaitu sebagai berikut:

あ   い   う   え   お
a      i     u     e     o

か   き   く   け   こ
ka   ki    ku   ke   ko

さ   し   す   せ   そ
sa  shi   su   se   so

た   ち   つ   て   と
ta   chi   tsu  te    to

な   に   ぬ   ね   の
na   ni    nu   ne   no

は   ひ   ふ   へ   ほ
ha   hi   fu   he   ho

ま   み   む   め   も
ma  mi   mu  me  mo

や          ゆ           よ
ya           yu           yo

ら   り   る   れ   ろ
ra    ri     ru    re    ro

わ                         を
wa                         wo
               ん
                n

Penulisannya cukup mudah karena dituliskan satu per satu saja.

Contoh Kata:
● ねこ = ne + ko
= neko (kucing)

● あたま = a + ta + ma
= atama (kepala)
_______________________
🇯🇵 Belajar Nihon-go`,
			},
			{ quoted: m },
		);
	} else if (text === "3") {
		conn.sendMessage(
			m.chat,
			{
				text: `⭐ *Huruf Hiragana* ⭐
Tanda Tenten (``) dan Maru (°)
_______________________
Kedua tanda ini digunakan untuk mengubah sedikit bunyi dari beberapa huruf:

*✅ Tanda Tenten/Dakuten (``)*
Untuk mengubah baris KA, SA, TA, dan HA
Menjadi GA, ZA, DA, BA

か き く け こ --> が ぎ ぐ げ ご
ka ki ku ke ko --> ga gi gu ge go

さ し す せ そ --> ざ じ ず ぜ ぞ
sa shi su se so --> za ji zu ze zo

た ち つ て と --> だ ぢ づ で ど
ta chi tsu te to --> da ji dzu de do

は ひ ふ へ ほ --> ば び ぶ べ ぼ
ha hi fu he ho --> ba bi bu be bo

*✅ Tanda Maru/Handakuten (°)*
Untuk mengubah baris HA menjadi PA

は ひ ふ へ ほ --> ぱ ぴぷぺ ぽ 
ha hi fu he ho --> pa pi pu pe po
_______________________
🇯🇵 Belajar Nihon-go
24-09-21`,
			},
			{ quoted: m },
		);
	}
};
handler.help = ["materijepang *𝐧𝐨/𝐭𝐞𝐦𝐚*"];
handler.tags = [tanime];
handler.command = /^(materi|materijepang|materijapan|mat)$/i;

export default handler;
