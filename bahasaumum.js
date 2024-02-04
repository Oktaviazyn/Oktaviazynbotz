var handler = async (m, { args, text, conn, usedPrefix, command }) => {
	if (!text)
		throw `Example\n*${usedPrefix}${command} 3dcg*

Ketik *${usedPrefix}${command} list* untuk melihat list *${command}*`;
	if (text === "3dcg") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ 3DCG*
Grafika komputer 3D atau disebut 3DCG adalah representasi dari data geometrik 3D terhadap grafika komputer 2D. Lebih mudahnya Orang akan bergerak dan data gerakan Orang akan dijadikan anime. Hasilnya akan menjadi Animasi 3D, kadang 3DCG dianggap kaku karena hanya bisa menurut pada gerak Manusia.
Contoh: Titan AoT: Final, Action scene The God of High School`,
			},
			{ quoted: m },
		);
	} else if (text === "3 rules anime") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ 3 Rules Anime*
Merupakan sebuah teknik untuk menentukan ketertarikan pada suatu anime. Caranya dengan menonton 3 episode suatu anime, lalu mempertimbangkan bagus tidaknya suatu anime dalam membangun cerita.
Contoh: Memutuskan berhenti setelah menonton 3 episode Hyouka, Memutuskan lanjut setelah menonton 3 episode Overlord Toradora.`,
			},
			{ quoted: m },
		);
	} else if (text === "action figure") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Action Figure*
Merupakan patung atau benda cetak 3D yang dibuat mirip dengan suatu hal dalam anime, baik itu karakter, benda dengan Ciri khas, maupun lainnya.
Contoh: Action Figure Naruto, Action Figure kapal Sunny Go`,
			},
			{ quoted: m },
		);
	} else if (text === "anime") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Anime*
Anime adalah nama yang diambil dari kata "animation". Anime merupakan video animasi 2D yang berasal dari Jepang. Anime berbeda dengan kartun, baik dari segi cerita yang lebih menarik, visual yang lebih baik, maupun grafisnya.
Contoh: Naruto, Tokyo Ghoul`,
			},
			{ quoted: m },
		);
	} else if (text === "anime movie") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️  Anime Movie*
Yaitu anime yang bertipe sekali jalan, anime movie tidak seperti movie luar negeri lainnya. Durasi tidak wajib melebihi 1 jam. Terdapat banyak anime movie dengan durasi singkat.
Contoh: Kimi no Nawa, Houtarobi no Mori e`,
			},
			{ quoted: m },
		);
	} else if (text === "arc") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Arc*
Arc Adalah sebuah kumpulan cerita dalam suatu topik yang masih berhubungan dalam 1 kesamaan, baik kesamaan tempat, kesamaan inti cerita, kesamaan masalah dll. Arc dipakai  untuk beberapa chapter manga, atau beberapa episode anime.
Contoh: One Piece Arc Onigashima, One Punch Man Arc asosiasi monster`,
			},
			{ quoted: m },
		);
	} else if (text === "author") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Author*
Merupakan sebutan untuk pemilik atau orang yang memiliki kewenangan dalam menentukan suatu cerita karangannya sendiri.
Contoh: Eiichiro Oda - Author (mangaka) One Piece, Kugane Maruyama (Novelis) Overlord`,
			},
			{ quoted: m },
		);
	} else if (text === "batch") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Batch*
Yaitu "tumpukan", dalam dunia anime batch mengacu pada 1 season anime yang sudah selesai tayang. Sebenarnya batch itu tidak  terkait season, jadi bisa 12 eps, 24 eps, 50 eps dll sesuai dengan berapa file yang ditumpuk.
Contoh: Batch full season 12 eps, Batch anime 50 eps`,
			},
			{ quoted: m },
		);
	} else if (text === "bd") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Blu-Ray Disc Anime*
Biasanya disebut dengan BD, merupakan sebuah media penyimpanan data yang dijual oleh perusahaan pembuat anime dengan keunggulan suara & gambar lebih jernih, tidak ada sensor, serta tidak ada pemotongan video.
Contoh: BD Tenki no Ko, BD Yuru Camp`,
			},
			{ quoted: m },
		);
	} else if (text === "canon") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Canon*
Memiliki arti "Asli", Canon adalah sebuah istilah yang ditujukan kepada cerita yang ditulis langsung oleh Author. Sedangkan Non-Canon adalah cerita yang ditulis oleh rekan kerja Author dan disetujui oleh Author.
Contoh: Canon Manga One Piece, Non-Canon One Piece movie Gold`,
			},
			{ quoted: m },
		);
	} else if (text === "cd drama") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ CD Drama*
CD Drama sangat jarang dikeluarkan, isinya biasanya tentang percakapan Seiyuu (Voice Actor) yang menceritakan hal-hal yang tidak dibahas dalam anime dan Source nya.
Contoh: CD drama Overlord`,
			},
			{ quoted: m },
		);
	} else if (text === "cm") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ CM*
Merupakan singkatan dari Comersial Message dari suatu produser maupun studio yang menggunakan media anime untuk penyampaiannya. Pesan yang disampaikan bisa berupa promosi, pesan umum, dll.
Contoh: CM promosi Movie Violet Evergarden, CM pola hidup sehat One Piece`,
			},
			{ quoted: m },
		);
	} else if (text === "cliffhanger") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Cliffhanger*
Adalah sebuah istilah yang digunakan untuk menggambarkan Ending suatu anime yang tidak terselesaikan dengan baik. Dalam bahasa umum disebut "cerita menggantung".
Contoh: Ending Tonari no Kaibutsu Kun, Ending No Game No Life`,
			},
			{ quoted: m },
		);
	} else if (text === "cosplay") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Cosplay*
Adalah singkatan dari "Costum Play" yang artinya memainkan karakter seseorang karakter, baik itu dari manga, anime, game dll. Seseorang yang ber cosplay disebut "Cosplayer"
Contoh: Belle Delphine`,
			},
			{ quoted: m },
		);
	} else if (text === "chuunibyou") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Chuunibyou*
Disebut juga "Sindrom kelas 8" Adalah sebuah kelainan mental tingkat ringan yang membuat seseorang menjadi sering berkhayal tentang hal supranatural atau berbagai unsur fantasi. Berbeda dengan anak kecil, bisa dikatakan Chuunibyou jika setidaknya sudah mulai remaja (kelas 8)
Contoh: Takanashi Rika, Satou Ryuko`,
			},
			{ quoted: m },
		);
	} else if (text === "debate") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Debate*
Artinya diskusi mengenai topik anime yang membandingkan suatu anime atau karakter didalamnya dengan karakter anime lain dalam anime tersebut maupun anime lain dengan perbincangan secara sistematis. Biasanya Debate disertai dengan bukti tentang karakter anime yang didebatkan untuk mendukung argumen.
Contoh: Rimuru (Tensura) vs Anos Voldigad (Maou Gakuin)`,
			},
			{ quoted: m },
		);
	} else if (text === "demografi") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Demografi*
Demografi adalah kumpulan dari beberapa genre yang memiliki fokus untuk kalangan tertentu. Misal genre Action, Physcological dan Thriller yang tidak cocok untuk anak anak akan digolongkan ke demografi laki laki dewasa atau Seinen.
Contoh: Demografi Shoujo, Demografi Shounen`,
			},
			{ quoted: m },
		);
	} else if (text === "dere") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Dere*
'Dere' berasal dari istilah Bahasa Jepang, 'deredere' yang merupakan penggambaran jika seseorang tengah jatuh cinta.
Contoh: Tsundere, Yandere`,
			},
			{ quoted: m },
		);
	} else if (text === "donghua") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Donghua*
Sebuah Animasi China. Namun tidak hanya berwujud 2D, Donghua bisa berbentuk animasi 3D yang memiliki detail cakap. Walaupun begitu keterangannya kurang dari anime karena berbagai macam alasan dan kekurangan.
Contoh: Wu Dong Qian Kun, Quanzhi Fashi`,
			},
			{ quoted: m },
		);
	} else if (text === "doujinshi") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Doujinshi*
Merupakan istilah untuk komik yang dibuat oleh fans, menggunakan karakter dari manga / anime yang sudah terkenal, namun menggunakan cerita dari mereka sendiri. Doujinshi akrab dengan Fanfiction (Cerita buatan fans.)
Contoh: Re: Zero Alternative Ending, Kimetsu no Yaiba: Kanao x Tanjiro`,
			},
			{ quoted: m },
		);
	} else if (text === "easter egg") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Easter Egg*
Merupakan sebutan untuk sebuah detail kecil, serta sulit dan tidak seharusnya ditemukan yang memiliki makna, se-sepele apapun. Biasanya diselipkan dalam anime terkenal tanpa tujuan jelas.
Contoh: Terlihat Action Figure Karakter anime lain di dalam Anime, terdapat Poster anime di Anime lain.`,
			},
			{ quoted: m },
		);
	} else if (text === "explicit genre") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Explicit Genre*
Jenis konten yang sebenarnya hanya cocok untuk pengguna dalam usia dewasa, 17 tahun ke atas misalnya. Konten yang menggunakan Explicit Content biasanya mengandung audio atau visual yang tidak cocok untuk pengguna di bawah umur.`,
			},
			{ quoted: m },
		);
	} else if (text === "fanshare") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Fanshare*
Adalah sebuah laman web tidak resmi yang mengambil media dari berbagai sumber, dan diupload kembali di website mereka. Fanshare seringkali mencuri konten dari Fansub, namun kadang mencuri dari situs Legal.
Contoh: AnoBoy, Otakudesu`,
			},
			{ quoted: m },
		);
	} else if (text === "fanpage") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Fanpage*
Adalah sebuah laman dalam media sosial apapun yang berisi tentang hal" terkait dengan suatu topik atau karya. Fanpage anime biasanya membahas secara lengkap mengenai anime dan seputarnya.
Contoh: Fanpage Overlord, Fanpage Nasu`,
			},
			{ quoted: m },
		);
	} else if (text === "fansub") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Fansub*
Adalah sebuah situs yang mendedikasikan untuk menerjemahkan media kedalam bahasa lain. Terjemahan Fansub tidak dibuat secara Legal, jadi sering kali hasil terjemahannya dicuri karena tidak terdapat copyright.
Contoh: Anitoki, Samehadaku`,
			},
			{ quoted: m },
		);
	} else if (text === "fanservice") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Fanservice*
Adalah sebuah trik untuk menarik para penonton, biasanya fanservice disajikan dalam bentuk karakter anime tampan, cantik, maupun sexy sebagai hiburan.
Contoh: Adegan pantai berbikini, Adegan yang memperlihatkan bentuk tubuh karakternya.`,
			},
			{ quoted: m },
		);
	} else if (text === "fanart") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Fan Art*
Adalah sebuah gambar yang dibuat oleh fans, yang dibuat dengan bebas dan bisa mengotak-atik karakter dari anime / manga dengan tetap menampilkan ciri awal. Seiring waktu, Fan Art beralih dari sekedar memakai Anime/ manga, menjadi bebas dalam menggambar.
Contoh: Fan art anime Random, Osakana Neko`,
			},
			{ quoted: m },
		);
	} else if (text === "filler") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Filler*
Berarti "isian" bermakna sebuah bentuk episode yang tidak mengambil bahan dari manapun. Filler tidak seperti OVA yang dipakai pada anime seasonal. Filler lebih sering dipakai oleh anime longrun yang kehabisan bahan untuk pembuatan anime.
Contoh: Filler Bleach, Filler Black Clover`,
			},
			{ quoted: m },
		);
	} else if (text === "grafik") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Grafik*
Dalam dunia animasi, memiliki arti umum berbeda dengan kurva. Grafik adalah kata yang dipakai untuk menunjukkan kwalitas animasi beserta detail dan ketelitian dalam tampilannya.
Contoh: Grafik tinggi Jujutsu Kaisen, Grafik rendah Ex-Arm`,
			},
			{ quoted: m },
		);
	} else if (text === "grafis") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Grafis*
Berbeda dengan grafik, Grafis memiliki makna kejelasan dan kekuatan dalam menampilkan gambar yang tersedia. Semakin tinggi grafis, semakin jelas gambar pada anime.
Contoh: Grafis Video Kwalitas 360, Grafis Video kwalitas 4K`,
			},
			{ quoted: m },
		);
	} else if (text === "genre") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Genre*
Genre adalah sesuatu yang ingin ditonjolkan dalam cerita. Semisal jika memang anime menonjolkan Comedy, maka genre tersebut memang Comedy.
Contoh: Slice of Life, Drama. Ketik "Arti Genre anime" untuk selengkapnya.`,
			},
			{ quoted: m },
		);
	} else if (text === "husbu") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Husbu*
Kata Husbu diambil dari bahasa Inggris Husband yang berarti suami. Dalam dunia per-anime-an Husbu adalah Seorang karakter anime laki laki yang disukai oleh Perempuan di dunia nyata sebagai karakter favorit.
Contoh: Levi Ackerman, Todoroki Shouto`,
			},
			{ quoted: m },
		);
	} else if (text === "hiatus") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Hiatus*
Memiliki makna "libur", kata Hiatus bisa menciptakan kerisuhan. Hiatus menunjukkan suatu Karya yang berhenti ditengah jalan karena alasan tertentu dari author.
Contoh: Mangaka HxH berhenti update tanpa alasan, Mangaka One Piece Hiatus untuk refreshing`,
			},
			{ quoted: m },
		);
	} else if (text === "imdb") {
		conn.sendMessage(
			m.chat,
			{
				text: `Internet Movie Database (IMDb) adalah sebuah Basis data daring informasi yang berkaitan dengan film, acara televisi, video rumahan, dan permainan video, dan acara internet, termasuk daftar pemeran, biografi kru produksi dan personil, ringkasan alur cerita, trivia, dan ulasan serta penilaian oleh penggemar.
Contoh: Avatar the last Airbander rating 9.3 via IMDb`,
			},
			{ quoted: m },
		);
	} else if (text === "iyashikei") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Iyashikei*
Merupakan suatu demografi yang kebanyakan berbentuk anime Slice of Life. Iyashikei memiliki tujuan untuk menenangkan hati dan pikiran, biasanya anime iyashikei ditayangkan pada jam malam agar bisa menenangkan diri orang sepulang kerja.
Contoh: Non Non Biyori, Yuru Camp`,
			},
			{ quoted: m },
		);
	} else if (text === "key visual") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Key Visual*
Adalah "gambar poster" promosi resolusi tinggi yang digunakan untuk memasarkan pertunjukan. Seni kunci berkualitas sangat tinggi, karena dimaksudkan untuk dicetak pada apa saja mulai dari kotak DVD hingga poster.
Contoh: Gambar yang disajikan di situs download anime, Gambar yang dipajang di MAL.`,
			},
			{ quoted: m },
		);
	} else if (text === "light novel") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Light Novel*
Novel ringan adalah sejenis novel yang sering disertai dengan ilustrasi anime atau manga, biasanya ditujukan untuk pembaca remaja usia sekolah menengah.
Contoh: Overlord, Sword art Online`,
			},
			{ quoted: m },
		);
	} else if (text === "long run") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Long Run*
Yaitu anime yang berjalan sampai dengan puluhan atau ratusan episode, dan tidak terikat Season.
Contoh: One Piece, Doraemon`,
			},
			{ quoted: m },
		);
	} else if (text === "loli") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Loli*
Merupakan sebutan untuk Anak kecil perempuan dalam anime yang belum mencapai masa remaja. Berhubungan dengan hal ini para penyuka anak kecil perempuan disebut dengan "Lolicon"
Contoh: Kobayashi Kana, Renge Miyauchi`,
			},
			{ quoted: m },
		);
	} else if (text === "live action") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️  Live Action*
Live Action merupakan adaptasi cerita yang diperankan oleh aktor dan bukan Gambar. Live Action atau yang sering disingkat LA terkadang mendapat komentar kurang baik, karena tidak bisa kontras dengan Seri yang diadaptasi. LA tidak hanya mengambil cerita dari anime, tapi juga bisa dari Manga, Novel dan lainnya.
Contoh: Crows Zero, Kakegurui LA`,
			},
			{ quoted: m },
		);
	} else if (text === "mal") {
		conn.sendMessage(
			m.chat,
			{
				text: `MyAnimeList, sering disingkat MAL, adalah situs jejaring sosial dan situs katalogisasi sosial menyangkut anime dan manga. Situs ini menyediakan sistem yang berupa daftar untuk mengatur dan menilai suatu anime dan manga.
Contoh: Fullmetal Alchemist Brotherhood rating 9.17 via MAL`,
			},
			{ quoted: m },
		);
	} else if (text === "mangaka") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Mangaka*
Adalah seorang pembuat manga, dalam bahasa umum disebut "komikus."
Contoh: Eiichiro Oda, Tabata Yuuki`,
			},
			{ quoted: m },
		);
	} else if (text === "manga") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Manga*
Manga adalah komik dari Jepang. Biasanya dibuka dari kiri ke kanan, dibacanya dari kanan atas ke kiri atas lalu kanan bawah ke kiri bawah. Biasanya manga terbit dalam edisi hitam putih tapi jarang ada manga yang terbit dengan warna pada seluruh manganya, biasanya hanya cover yang penuh warna.
Contoh: Osananajimi wo Onnanoko ni Shiteshimastia, Madan no Ou`,
			},
			{ quoted: m },
		);
	} else if (text === "manhua") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Manhua*
Manhua adalah komik dari Cina. Biasanya dibuka dari kanan ke kiri dan dibaca dari kiri atas ke kanan atas lalu kiri bawah ke kanan bawah. Pola bacanya seperti huruf Z. Biasanya cerita dari Manhua lebih berwarna.
Contoh: Feng Shen Ji, Panlong`,
			},
			{ quoted: m },
		);
	} else if (text === "manhwa") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Manhwa*
Manhwa adalah komik dari Korea. Cara baca, cara membaca dan warnanya sama seperti Manhua.
Contoh: Solo Leveling, Tower of God`,
			},
			{ quoted: m },
		);
	} else if (text === "muse") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Muse*
Muse merupakan situs nonton Anime legal di Youtube. Muse hanya akan mengunggah video legal yang memiliki lisensi resmi bukan mengunggah video Anime ilegal.
Contoh: Muse Indonesia, Muse Asia`,
			},
			{ quoted: m },
		);
	} else if (text === "original anime") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Original Anime*
Bisanya disebut OA, yang mengacu pada anime buatan asli dari studio. Tidak ada yang tau dan bisa menebak cerita yang ditampilkan sebelum ditayangkan. Karena studio memang tidak mengadaptasi cerita manapun.
Contoh: Charlotte, Wonder Egg Priority`,
			},
			{ quoted: m },
		);
	} else if (text === "original ending") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Original Ending*
Hal ini berbeda dengan OA, jika OA mengambil cerita penuh secara original, maka Original Anime hanya berbeda di bagian ending. Biasanya digunakan oleh studio yang ingin mengakhiri cerita adaptasi walaupun cerita di source nya masih berlanjut.
Contoh: Darling in The Franxx, Akame ga Kill`,
			},
			{ quoted: m },
		);
	} else if (text === "one-shot") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ One-Shot*
One-shot adalah sebuah buku komik yang diterbitkan menjadi edisi tunggal, berdiri sendiri, dengan cerita mandiri, dan bukan sebagai bagian dari seri yang sedang berlangsung atau miniseri.
Contoh: Burn the Witch, Soul Eater: Not`,
			},
			{ quoted: m },
		);
	} else if (text === "ongoing") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Ongoing*
Yaitu anime yang sedang tayang. Masih berlangsung dan berlanjut sampai selesai.
Contoh: Anime musiman, Anime long Run`,
			},
			{ quoted: m },
		);
	} else if (text === "ova") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ OVA*
Original Video Anime, artinya anime Original yang ditampilkan untuk melengkapi seri anime utama. Pada awalnya OVA benar" original buatan studio, dan rata rata untuk fanservice. Namun sekarang sudah banyak anime yang mengambil cerita utama dengan tipe OVA.
Contoh: Hyouka OVA, Karakai Jouzu no Takagi san OVA`,
			},
			{ quoted: m },
		);
	} else if (text === "ona") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ ONA*
Original Net Anime. Seperti namanya, anime ini ditampilkan secara "Net" atau dalam jaringan. Selain jarang ditemui, jarang pula yang menyediakan anime tipe ONA.
Contoh: Godzilla Singular Point, Yasuke`,
			},
			{ quoted: m },
		);
	} else if (text === "oad") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️  OAD*
Original Anime DVD, artian umumnya sama dengan OVA, namun OAD hanya dapat ditemukan dalam DVD (bawaan Disc) dan harus beli Blu-Ray/DVD jika ingin menonton. Namun, sekarang sudah banyak situs yang meng upload OAD sebagai pelengkap seri animenya.
Contoh: Yuru Camp OAD, Noragami OAD`,
			},
			{ quoted: m },
		);
	} else if (text === "plot armor") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Plot Armor*
Merupakan istilah yang digunakan untuk menggambarkan perlindungan dari author kepada karakter dalam cerita. Semakin banyak perlindungan yang ditampilkan dalam cerita semakin akrab cerita tersebut dengan istilah "Plot Armor tebal".
Contoh: Karakter Utama terkena kecelakaan dan terluka parah, namun karena dia karakter utama dia diberikan cara oleh Author agar tetap hidup.`,
			},
			{ quoted: m },
		);
	} else if (text === "plot twist") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Plot Twist*
Adalah istilah yang mengarah kepada "kejutan" yang diberikan oleh author dalam ceritanya. Plot yang tidak terbayangkan namun masuk akal adalah kunci utama dalam plot twist.
Contoh: Karakter dari awal cerita berperan tokoh baik, namun ternyata semua hanya settingan dan dia adalah orang jahat.`,
			},
			{ quoted: m },
		);
	} else if (text === "plot hole") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Plot Hole*
Adalah Istilah yang dipakai ketika dalam cerita terdapat kesalahan, hal itu bisa disebabkan murni kesalahan author ataupun Asisten yang tidak teliti dalam membantu.
Contoh: tokoh A tidak bisa bicara, namun dalam suatu adegan dia berteriak dan selanjutnya dia tidak bisa bicara lagi.`,
			},
			{ quoted: m },
		);
	} else if (text === "pv") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ PV*
Promotional Video, atau video promosi. Seperti namanya, PV memiliki tujuan untuk mempromosikan Anime nya. Mengandung sedikit bocoran.
Contoh: PV Shuumatsu no Valkyrie, PV Tsukihime Remake`,
			},
			{ quoted: m },
		);
	} else if (text === "pre air") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Pre Air*
Pre Air atau di artikan "Sebelum Mengudara" dalam anime adalah sebuah video penuh yang dirilis sebelum tanggal rilis anime yang asli. Tujuannya bermacam macam, namun kebanyakan untuk mencari tau seberapa besar respon penonton.
Contoh: Pre Air Tokyo Revenger rekap 3 episode pertama.`,
			},
			{ quoted: m },
		);
	} else if (text === "prekuel anime") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Prekuel Anime*
Yaitu sebuah cerita sebelumnya masuk kedalam cerita utama yang ditampilkan. Biasanya didalamnya terdapat Prolog berupa cerita masa lalu sebelum seri utama.
Contoh: Kyoukai no Kanata OVA, Fate/Grand Order Babylonia 00: Initier Itium`,
			},
			{ quoted: m },
		);
	} else if (text === "reverse") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Reverse*
Tidak memiliki arti khusus dalam dunia anime. Hanya memiliki makna "terbalik" seperti arti kata reverse pada umumnya.
Contoh: Reverse Harem, Reverse Trap`,
			},
			{ quoted: m },
		);
	} else if (text === "seiyuu") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Seiyuu*
Adalah seorang pengisi suara anime. Dalam bahasa Inggris disebut "Voice Actor", dalam bahasa Indonesia disebut "Pengisi Suara" dan dalam bahasa umum disebut "Dubber"
Contoh: Rie Takahashi, Inori Minase`,
			},
			{ quoted: m },
		);
	} else if (text === "sekuel anime") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Sekuel Anime*
Sekuel adalah kebalikan dari prekuel, Sekuel menceritakan kelanjutan dari cerita utamanya. Sekuel anime bisa berbentuk Movie, Seri lanjutan, Spin Off, OVA dll.
Contoh: S2 Overlord setelah S1, Movie Saekano setelah S2.`,
			},
			{ quoted: m },
		);
	} else if (text === "shota") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Shota*
Merupakan sebutan untuk Anak kecil laki laki dalam anime yang masih belum mencapai masa remaja. Berhubungan dalam hal ini, para penyuka anak kecil laki-laki disebut dengan "Shotacon"
Contoh: Mizuhara Tomoya, Killua Zoldyck`,
			},
			{ quoted: m },
		);
	} else if (text === "simp") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Simp*
Memiliki makna memuja, berarti orang itu memiliki kebanggaan dan kepercayaannya tersendiri terhadap suatu karakter melebihi karakter lain.
Contoh: Simp Yuuki Asuna, Simp Kurumi Tokisaki`,
			},
			{ quoted: m },
		);
	} else if (text === "spin off") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Spin Off*
Spin Off merupakan cerita sampingan dari seri utama, Spin off rata-rata berisikan tentang kegiatan yang tidak ditampilkan di seri utama. Spin off tidak wajib memiliki kesamaan dengan Seri utama, banyak anime Action yang memiliki spin off yang berisi Slice of Life - Comedy.
Contoh: Ple Ple Pleiades, Re:Zero Break Time`,
			},
			{ quoted: m },
		);
	} else if (text === "special") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️  Special*
Mencakup seluruh tipe anime, biasanya dipakai karena tidak ada kejelasan tipe anime yang tersedia. (Tidak tahu itu OVA, OAD, ONA dsb)
Contoh: Wonder Egg Priority Spesial, Working!!! Spesial`,
			},
			{ quoted: m },
		);
	} else if (text === "slapstic") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Slapstic*
Slapstic biasanya dikaitkan dengan Candaan untuk komedi dengan menggunakan media kekerasan terhadap lawan main.
Contoh: Tokoh A bertindak bodoh dan dipukul oleh Tokoh B dan menghasilkan reaksi wajah yang lucu`,
			},
			{ quoted: m },
		);
	} else if (text === "tokusatsu") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Tokusatsu*
Adalah cerita yang dibuat dari Orang yang memakai kostum. Seperti Ultraman atau Kamen Rider. Meskipun tidak termasuk anime, Tokusatsu fans tidak berbeda jauh dengan Anime fans. Dan banyak juga anime yang memparodikan cerita dari Tokusatsu.
Contoh: Ultraman, Kamen Rider`,
			},
			{ quoted: m },
		);
	} else if (text === "tv anime") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ TV Anime*
Artinya Anime itu ditampilkan di TV Jepang secara massal dan tidak hanya ditampilkan dalam jaringan internet.
Contoh: Detective Conan, Pokemon`,
			},
			{ quoted: m },
		);
	} else if (text === "teaser") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Teaser*
Trailer merupakan cuplikan yang diambil dari dalam seri animenya. Trailer biasanya datang setelah PV dan sebelum Seri utama. Tujuannya masih untuk mempromosikan Anime.
Contoh: Sebagian Action scene Kimetsu no Yaiba, preview karakter Fate Grand Order`,
			},
			{ quoted: m },
		);
	} else if (text === "tema") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Tema*
Pokok pemikiran atau ide dasar. Hal ini jelas bahwa, tema merupakan gagasan utama dalam karya, berdasarkan tujuan yang hendak disampaikan.`,
			},
			{ quoted: m },
		);
	} else if (text === "trailer") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Trailer*
Trailer memiliki arti yang sama dengan Teaser, namun Trailer memiliki durasi yang lebih lama, itu karena Trailer berisi informasi tentang staff, sponsor, tanggal rilis anime dll. Trailer berdurasi±1 - 2,5 menit, sedangkan Teaser hanya 10-30 detik.
Contoh: Promosi Game, Promosi Anime`,
			},
			{ quoted: m },
		);
	} else if (text === "trap") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Trap*
Memiliki arti "Jebakan" Trap dalam anime merupakan Seorang laki laki yang berpenampilan seperti Perempuan. Dalam hal ini bukan hanya cara berpakaian atau wajah yang cantik, namun setiap Laki laki yang dapat membuat penonton salah mengira dia perempuan bisa disebut sebagai Trap.
Contoh: Totsuka Saika, Nagisa Shiota`,
			},
			{ quoted: m },
		);
	} else if (text === "tv anime series") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ TV Anime Seri/Series*
Yaitu "main anime" (Anime utama) yang merupakan cerita yang akan ditampilkan dan ditonjolkan dalam penayangan.
Contoh: Shin-chan, Houseki no Kuni`,
			},
			{ quoted: m },
		);
	} else if (text === "unsur") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Unsur*
Saling terkait dengan genre, semisal jika ada sedikit Comedy dalam anime genre Action, maka tidak bisa disebut sebagai genre Comedy juga, karena Comedy dalam anime itu hanya sebagai Unsur Pelengkap.
Contoh: Terdapat rasa Romance pada anime Action, yang tanpa genre Romance.`,
			},
			{ quoted: m },
		);
	} else if (text === "unsur cerita") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Unsur Cerita*
Saling terkait dengan genre, unsur adalah sebuah hal yang melekat pada cerita. Unsur tidak ditonjolkan namun memiliki ciri khas dan keunikan tersendiri. Unsur terbagi menjadi banyak jenis, oleh para penikmatnya.
Contoh : Bishounen, Bishoujo`,
			},
			{ quoted: m },
		);
	} else if (text === "vsb") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Vsb*
Adalah sebuah singkatan dari Versus Battle. Merupakan sebuah fandom yang mengumpulkan informasi Valid tentang suatu anime, manga, LN dll, agar bisa didebatkan secara sistematis.
Contoh: Informasi Skill suatu karakter, Informasi tentang kelemahan suatu karakter.`,
			},
			{ quoted: m },
		);
	} else if (text === "visual novel") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Visual Novel*
Novel visual atau yang terkadang disebut Sound Novel adalah sebuah jenis permainan interaksi fiksi yang dapat dimainkan di komputer pribadi. Biasanya mirip dengan Galge Game.
Contoh: Fate Stay Night, Steins; Gate`,
			},
			{ quoted: m },
		);
	} else if (text === "waifu") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ Waifu*
Kata Waifu diambil dari bahas Inggris Wife yang berarti Istri. Dalam dunia per-anime-an, waifu adalah Seorang karakter anime perempuan yang disukai oleh Laki laki di dunia nyata sebagai karakter favorit.
Contoh: Zero Two, Kurumi Tokisaki`,
			},
			{ quoted: m },
		);
	} else if (text === "×265") {
		conn.sendMessage(
			m.chat,
			{
				text: `*[≽️ ×265*
Merupakan kode yang merujuk pada video yang dikompres menjadi lebih efisien dari sebelumnya.
Contoh: File Video 720 setara dengan Ukuran video 480, Video 480 setara dengan Ukuran video 360.`,
			},
			{ quoted: m },
		);
	} else if (text === "list") {
		conn.sendMessage(
			m.chat,
			{
				text: `*「 List Bahasa Umum Anime 」*
[≽️ 3DCG
[≽️ 3 Rules Anime
[≽️ Action Figure
[≽️ Anime
[≽️ Anime Movie
[≽️ Arc
[≽️ Author
[≽️ Batch
[≽️ BD
[≽️ Canon
[≽️ CD Drama
[≽️ CM
[≽️ Cliffhanger
[≽️ Cosplay
[≽️ Chuunibyou
[≽️ Debate
[≽️ Demograti
[≽️ Dere
[≽️ Donghua
[≽️ Doujinshi
[≽️ Easter Egg
[≽️ Fanshare
[≽️ Fanpage
[≽️ Fansub
[≽️ Fanservice
[≽️ Fanart
[≽️ Filler
[≽️ Grafik
[≽️ Grafis
[≽️ Genre
[≽️ Husbu
[≽️ Hiatus
[≽️ IMDb
[≽️ Iyashikei
[≽️ Key Visual
[≽️ Light Novel
[≽️ Long Run
[≽️ Loli
[≽️ Live Action
[≽️ MAL
[≽️ Mangaka
[≽️ Manga
[≽️ Manhua
[≽️ Manhwa
[≽️ Muse
[≽️ Original Anime
[≽️ Original Ending
[≽️ One-shot
[≽️ Ongoing
[≽️ OVA
[≽️ ONA
[≽️ OAD
[≽️ Plot Armor
[≽️ Plot Twist
[≽️ Plot Hole
[≽️ Pv
[≽️ Pre Air
[≽️ Prekuel Anime
[≽️ Reverse
[≽️ Seiyuu
[≽️ Sekuel Anime
[≽️ Shota
[≽️ Simp
[≽️ Spin Off
[≽️ Special
[≽️ Slapstic
[≽️ Tokusatsu
[≽️ Tv Anime
[≽️ Teaser
[≽️ Trailer
[≽️ Trap
[≽️ Tv Series
[≽️ Unsur
[≽️ Unsur Cerita
[≽️ Vsb
[≽️ Visual Novel
[≽️ Waifu
[≽️ ×265

Ketik *${usedPrefix}${command} full*\nuntuk versi
lengkapnya>`,
			},
			{ quoted: m },
		);
	} else if (text === "full") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Bahasa Umum Anime*

Kosakata yang tertulis kebanyakan merupakan bahasa Umum yang sering dipakai untuk mempermudah atau menjelaskan secara rinci tentang suatu hal. 

Anda dapat memakai kosakata umum seperti Tema, Alur, Unsur Intrinsik dan berbagai macam lainnya untuk mendeskripsikan suatu anime. Dan sebaliknya Kosakata rumit yang terdapat didalam list ini bersifat Universal dan dapat dipakai sebagai pengetahuan umum.

Berikut Beberapa Hal-hal Yang Sering Dibahas di Dalam Dunia Peranimean:

*[≽️ 3DCG*
Grafika komputer 3D atau disebut 3DCG adalah representasi dari data geometrik 3D terhadap grafika komputer 2D. Lebih mudahnya Orang akan bergerak dan data gerakan Orang akan dijadikan anime. Hasilnya akan menjadi Animasi 3D, kadang 3DCG dianggap kaku karena hanya bisa menurut pada gerak Manusia.
Contoh: Titan AoT: Final, Action scene The God of High School

*[≽️ 3 Rules Anime*
Merupakan sebuah teknik untuk menentukan ketertarikan pada suatu anime. Caranya dengan menonton 3 episode suatu anime, lalu mempertimbangkan bagus tidaknya suatu anime dalam membangun cerita.
Contoh: Memutuskan berhenti setelah menonton 3 episode Hyouka, Memutuskan lanjut setelah menonton 3 episode Overlord Toradora.

*[≽️ Action Figure*
Merupakan patung atau benda cetak 3D yang dibuat mirip dengan suatu hal dalam anime, baik itu karakter, benda dengan Ciri khas, maupun lainnya.
Contoh: Action Figure Naruto, Action Figure kapal Sunny Go

*[≽️ Anime*
Anime adalah nama yang diambil dari kata "animation". Anime merupakan video animasi 2D yang berasal dari Jepang. Anime berbeda dengan kartun, baik dari segi cerita yang lebih menarik, visual yang lebih baik, maupun grafisnya.
Contoh: Naruto, Tokyo Ghoul

*[≽️  Anime Movie*
Yaitu anime yang bertipe sekali jalan, anime movie tidak seperti movie luar negeri lainnya. Durasi tidak wajib melebihi 1 jam. Terdapat banyak anime movie dengan durasi singkat.
Contoh: Kimi no Nawa, Houtarobi no Mori e

*[≽️ Arc*
Arc Adalah sebuah kumpulan cerita dalam suatu topik yang masih berhubungan dalam 1 kesamaan, baik kesamaan tempat, kesamaan inti cerita, kesamaan masalah dll. Arc dipakai  untuk beberapa chapter manga, atau beberapa episode anime.
Contoh: One Piece Arc Onigashima, One Punch Man Arc asosiasi monster

*[≽️ Author*
Merupakan sebutan untuk pemilik atau orang yang memiliki kewenangan dalam menentukan suatu cerita karangannya sendiri.
Contoh: Eiichiro Oda - Author (mangaka) One Piece, Kugane Maruyama (Novelis) Overlord

*[≽️ Batch*
Yaitu "tumpukan", dalam dunia anime batch mengacu pada 1 season anime yang sudah selesai tayang. Sebenarnya batch itu tidak  terkait season, jadi bisa 12 eps, 24 eps, 50 eps dll sesuai dengan berapa file yang ditumpuk.
Contoh: Batch full season 12 eps, Batch anime 50 eps

*[≽️ Blu-Ray Disc Anime*
Biasanya disebut dengan BD, merupakan sebuah media penyimpanan data yang dijual oleh perusahaan pembuat anime dengan keunggulan suara & gambar lebih jernih, tidak ada sensor, serta tidak ada pemotongan video.
Contoh: BD Tenki no Ko, BD Yuru Camp

*[≽️ Canon*
Memiliki arti "Asli", Canon adalah sebuah istilah yang ditujukan kepada cerita yang ditulis langsung oleh Author. Sedangkan Non-Canon adalah cerita yang ditulis oleh rekan kerja Author dan disetujui oleh Author.
Contoh: Canon Manga One Piece, Non-Canon One Piece movie Gold

*[≽️ CD Drama*
CD Drama sangat jarang dikeluarkan, isinya biasanya tentang percakapan Seiyuu (Voice Actor) yang menceritakan hal-hal yang tidak dibahas dalam anime dan Source nya.
Contoh: CD drama Overlord

*[≽️ CM*
Merupakan singkatan dari Comersial Message dari suatu produser maupun studio yang menggunakan media anime untuk penyampaiannya. Pesan yang disampaikan bisa berupa promosi, pesan umum, dll.
Contoh: CM promosi Movie Violet Evergarden, CM pola hidup sehat One Piece

*[≽️ Cliffhanger*
Adalah sebuah istilah yang digunakan untuk menggambarkan Ending suatu anime yang tidak terselesaikan dengan baik. Dalam bahasa umum disebut "cerita menggantung".
Contoh: Ending Tonari no Kaibutsu Kun, Ending No Game No Life

*[≽️ Cosplay*
Adalah singkatan dari "Costum Play" yang artinya memainkan karakter seseorang karakter, baik itu dari manga, anime, game dll. Seseorang yang ber cosplay disebut "Cosplayer"
Contoh: Belle Delphine

*[≽️ Chuunibyou*
Disebut juga "Sindrom kelas 8" Adalah sebuah kelainan mental tingkat ringan yang membuat seseorang menjadi sering berkhayal tentang hal supranatural atau berbagai unsur fantasi. Berbeda dengan anak kecil, bisa dikatakan Chuunibyou jika setidaknya sudah mulai remaja (kelas 8)
Contoh: Takanashi Rika, Satou Ryuko

*[≽️ Debate*
Artinya diskusi mengenai topik anime yang membandingkan suatu anime atau karakter didalamnya dengan karakter anime lain dalam anime tersebut maupun anime lain dengan perbincangan secara sistematis. Biasanya Debate disertai dengan bukti tentang karakter anime yang didebatkan untuk mendukung argumen.
Contoh: Rimuru (Tensura) vs Anos Voldigad (Maou Gakuin)

*[≽️ Demografi*
Demografi adalah kumpulan dari beberapa genre yang memiliki fokus untuk kalangan tertentu. Misal genre Action, Physcological dan Thriller yang tidak cocok untuk anak anak akan digolongkan ke demografi laki laki dewasa atau Seinen.
Contoh: Demografi Shoujo, Demografi Shounen

*[≽️ Dere*
'Dere' berasal dari istilah Bahasa Jepang, 'deredere' yang merupakan penggambaran jika seseorang tengah jatuh cinta.
Contoh: Tsundere, Yandere

*[≽️ Donghua*
Sebuah Animasi China. Namun tidak hanya berwujud 2D, Donghua bisa berbentuk animasi 3D yang memiliki detail cakap. Walaupun begitu keterangannya kurang dari anime karena berbagai macam alasan dan kekurangan.
Contoh: Wu Dong Qian Kun, Quanzhi Fashi

*[≽️ Doujinshi*
Merupakan istilah untuk komik yang dibuat oleh fans, menggunakan karakter dari manga / anime yang sudah terkenal, namun menggunakan cerita dari mereka sendiri. Doujinshi akrab dengan Fanfiction (Cerita buatan fans.)
Contoh: Re: Zero Alternative Ending, Kimetsu no Yaiba: Kanao x Tanjiro

*[≽️ Easter Egg*
Merupakan sebutan untuk sebuah detail kecil, serta sulit dan tidak seharusnya ditemukan yang memiliki makna, se-sepele apapun. Biasanya diselipkan dalam anime terkenal tanpa tujuan jelas.
Contoh: Terlihat Action Figure Karakter anime lain di dalam Anime, terdapat Poster anime di Anime lain.

*[≽️ Explicit Genre*
Jenis konten yang sebenarnya hanya cocok untuk pengguna dalam usia dewasa, 17 tahun ke atas misalnya. Konten yang menggunakan Explicit Content biasanya mengandung audio atau visual yang tidak cocok untuk pengguna di bawah umur.

*[≽️ Fanshare*
Adalah sebuah laman web tidak resmi yang mengambil media dari berbagai sumber, dan diupload kembali di website mereka. Fanshare seringkali mencuri konten dari Fansub, namun kadang mencuri dari situs Legal.
Contoh: AnoBoy, Otakudesu

*[≽️ Fanpage*
Adalah sebuah laman dalam media sosial apapun yang berisi tentang hal" terkait dengan suatu topik atau karya. Fanpage anime biasanya membahas secara lengkap mengenai anime dan seputarnya.
Contoh: Fanpage Overlord, Fanpage Nasu

*[≽️ Fansub*
Adalah sebuah situs yang mendedikasikan untuk menerjemahkan media kedalam bahasa lain. Terjemahan Fansub tidak dibuat secara Legal, jadi sering kali hasil terjemahannya dicuri karena tidak terdapat copyright.
Contoh: Anitoki, Samehadaku

*[≽️ Fanservice*
Adalah sebuah trik untuk menarik para penonton, biasanya fanservice disajikan dalam bentuk karakter anime tampan, cantik, maupun sexy sebagai hiburan.
Contoh: Adegan pantai berbikini, Adegan yang memperlihatkan bentuk tubuh karakternya.

*[≽️ Fan Art*
Adalah sebuah gambar yang dibuat oleh fans, yang dibuat dengan bebas dan bisa mengotak-atik karakter dari anime / manga dengan tetap menampilkan ciri awal. Seiring waktu, Fan Art beralih dari sekedar memakai Anime/ manga, menjadi bebas dalam menggambar.
Contoh: Fan art anime Random, Osakana Neko

*[≽️ Filler*
Berarti "isian" bermakna sebuah bentuk episode yang tidak mengambil bahan dari manapun. Filler tidak seperti OVA yang dipakai pada anime seasonal. Filler lebih sering dipakai oleh anime longrun yang kehabisan bahan untuk pembuatan anime.
Contoh: Filler Bleach, Filler Black Clover

*[≽️ Grafik*
Dalam dunia animasi, memiliki arti umum berbeda dengan kurva. Grafik adalah kata yang dipakai untuk menunjukkan kwalitas animasi beserta detail dan ketelitian dalam tampilannya.
Contoh: Grafik tinggi Jujutsu Kaisen, Grafik rendah Ex-Arm

*[≽️ Grafis*
Berbeda dengan grafik, Grafis memiliki makna kejelasan dan kekuatan dalam menampilkan gambar yang tersedia. Semakin tinggi grafis, semakin jelas gambar pada anime.
Contoh: Grafis Video Kwalitas 360, Grafis Video kwalitas 4K

*[≽️ Genre*
Genre adalah sesuatu yang ingin ditonjolkan dalam cerita. Semisal jika memang anime menonjolkan Comedy, maka genre tersebut memang Comedy.
Contoh: Slice of Life, Drama. Ketik "Arti Genre anime" untuk selengkapnya.

*[≽️ Husbu*
Kata Husbu diambil dari bahasa Inggris Husband yang berarti suami. Dalam dunia per-anime-an Husbu adalah Seorang karakter anime laki laki yang disukai oleh Perempuan di dunia nyata sebagai karakter favorit.
Contoh: Levi Ackerman, Todoroki Shouto

*[≽️ Hiatus*
Memiliki makna "libur", kata Hiatus bisa menciptakan kerisuhan. Hiatus menunjukkan suatu Karya yang berhenti ditengah jalan karena alasan tertentu dari author.
Contoh: Mangaka HxH berhenti update tanpa alasan, Mangaka One Piece Hiatus untuk refreshing

*[≽️ IMDb*
Internet Movie Database (IMDb) adalah sebuah Basis data daring informasi yang berkaitan dengan film, acara televisi, video rumahan, dan permainan video, dan acara internet, termasuk daftar pemeran, biografi kru produksi dan personil, ringkasan alur cerita, trivia, dan ulasan serta penilaian oleh penggemar.
Contoh: Avatar the last Airbander rating 9.3 via IMDb

*[≽️ Iyashikei*
Merupakan suatu demografi yang kebanyakan berbentuk anime Slice of Life. Iyashikei memiliki tujuan untuk menenangkan hati dan pikiran, biasanya anime iyashikei ditayangkan pada jam malam agar bisa menenangkan diri orang sepulang kerja.
Contoh: Non Non Biyori, Yuru Camp

*[≽️ Key Visual*
Adalah "gambar poster" promosi resolusi tinggi yang digunakan untuk memasarkan pertunjukan. Seni kunci berkualitas sangat tinggi, karena dimaksudkan untuk dicetak pada apa saja mulai dari kotak DVD hingga poster.
Contoh: Gambar yang disajikan di situs download anime, Gambar yang dipajang di MAL.

*[≽️ Light Novel*
Novel ringan adalah sejenis novel yang sering disertai dengan ilustrasi anime atau manga, biasanya ditujukan untuk pembaca remaja usia sekolah menengah.
Contoh: Overlord, Sword art Online

*[≽️ Long Run*
Yaitu anime yang berjalan sampai dengan puluhan atau ratusan episode, dan tidak terikat Season.
Contoh: One Piece, Doraemon

*[≽️ Loli*
Merupakan sebutan untuk Anak kecil perempuan dalam anime yang belum mencapai masa remaja. Berhubungan dengan hal ini para penyuka anak kecil perempuan disebut dengan "Lolicon"
Contoh: Kobayashi Kana, Renge Miyauchi

*[≽️  Live Action*
Live Action merupakan adaptasi cerita yang diperankan oleh aktor dan bukan Gambar. Live Action atau yang sering disingkat LA terkadang mendapat komentar kurang baik, karena tidak bisa kontras dengan Seri yang diadaptasi. LA tidak hanya mengambil cerita dari anime, tapi juga bisa dari Manga, Novel dan lainnya.
Contoh: Crows Zero, Kakegurui LA

*[≽️ MAL*
MyAnimeList, sering disingkat MAL, adalah situs jejaring sosial dan situs katalogisasi sosial menyangkut anime dan manga. Situs ini menyediakan sistem yang berupa daftar untuk mengatur dan menilai suatu anime dan manga.
Contoh: Fullmetal Alchemist Brotherhood rating 9.17 via MAL

*[≽️ Mangaka*
Adalah seorang pembuat manga, dalam bahasa umum disebut "komikus."
Contoh: Eiichiro Oda, Tabata Yuuki

*[≽️ Manga*
Manga adalah komik dari Jepang. Biasanya dibuka dari kiri ke kanan, dibacanya dari kanan atas ke kiri atas lalu kanan bawah ke kiri bawah. Biasanya manga terbit dalam edisi hitam putih tapi jarang ada manga yang terbit dengan warna pada seluruh manganya, biasanya hanya cover yang penuh warna.
Contoh: Osananajimi wo Onnanoko ni Shiteshimastia, Madan no Ou

*[≽️ Manhua*
Manhua adalah komik dari Cina. Biasanya dibuka dari kanan ke kiri dan dibaca dari kiri atas ke kanan atas lalu kiri bawah ke kanan bawah. Pola bacanya seperti huruf Z. Biasanya cerita dari Manhua lebih berwarna.
Contoh: Feng Shen Ji, Panlong

*[≽️ Manhwa*
Manhwa adalah komik dari Korea. Cara baca, cara membaca dan warnanya sama seperti Manhua.
Contoh: Solo Leveling, Tower of God

*[≽️ Muse*
Muse merupakan situs nonton Anime legal di Youtube. Muse hanya akan mengunggah video legal yang memiliki lisensi resmi bukan mengunggah video Anime ilegal.
Contoh: Muse Indonesia, Muse Asia

*[≽️ Original Anime*
Bisanya disebut OA, yang mengacu pada anime buatan asli dari studio. Tidak ada yang tau dan bisa menebak cerita yang ditampilkan sebelum ditayangkan. Karena studio memang tidak mengadaptasi cerita manapun.
Contoh: Charlotte, Wonder Egg Priority

*[≽️ Original Ending*
Hal ini berbeda dengan OA, jika OA mengambil cerita penuh secara original, maka Original Anime hanya berbeda di bagian ending. Biasanya digunakan oleh studio yang ingin mengakhiri cerita adaptasi walaupun cerita di source nya masih berlanjut.
Contoh: Darling in The Franxx, Akame ga Kill

*[≽️ One-Shot*
One-shot adalah sebuah buku komik yang diterbitkan menjadi edisi tunggal, berdiri sendiri, dengan cerita mandiri, dan bukan sebagai bagian dari seri yang sedang berlangsung atau miniseri.
Contoh: Burn the Witch, Soul Eater: Not

*[≽️ Ongoing*
Yaitu anime yang sedang tayang. Masih berlangsung dan berlanjut sampai selesai.
Contoh: Anime musiman, Anime long Run

*[≽️ OVA*
Original Video Anime, artinya anime Original yang ditampilkan untuk melengkapi seri anime utama. Pada awalnya OVA benar" original buatan studio, dan rata rata untuk fanservice. Namun sekarang sudah banyak anime yang mengambil cerita utama dengan tipe OVA.
Contoh: Hyouka OVA, Karakai Jouzu no Takagi san OVA

*[≽️ ONA*
Original Net Anime. Seperti namanya, anime ini ditampilkan secara "Net" atau dalam jaringan. Selain jarang ditemui, jarang pula yang menyediakan anime tipe ONA.
Contoh: Godzilla Singular Point, Yasuke

*[≽️  OAD*
Original Anime DVD, artian umumnya sama dengan OVA, namun OAD hanya dapat ditemukan dalam DVD (bawaan Disc) dan harus beli Blu-Ray/DVD jika ingin menonton. Namun, sekarang sudah banyak situs yang meng upload OAD sebagai pelengkap seri animenya.
Contoh: Yuru Camp OAD, Noragami OAD

*[≽️ Plot Armor*
Merupakan istilah yang digunakan untuk menggambarkan perlindungan dari author kepada karakter dalam cerita. Semakin banyak perlindungan yang ditampilkan dalam cerita semakin akrab cerita tersebut dengan istilah "Plot Armor tebal".
Contoh: Karakter Utama terkena kecelakaan dan terluka parah, namun karena dia karakter utama dia diberikan cara oleh Author agar tetap hidup.

*[≽️ Plot Twist*
Adalah istilah yang mengarah kepada "kejutan" yang diberikan oleh author dalam ceritanya. Plot yang tidak terbayangkan namun masuk akal adalah kunci utama dalam plot twist.
Contoh: Karakter dari awal cerita berperan tokoh baik, namun ternyata semua hanya settingan dan dia adalah orang jahat.

*[≽️ Plot Hole*
Adalah Istilah yang dipakai ketika dalam cerita terdapat kesalahan, hal itu bisa disebabkan murni kesalahan author ataupun Asisten yang tidak teliti dalam membantu.
Contoh: tokoh A tidak bisa bicara, namun dalam suatu adegan dia berteriak dan selanjutnya dia tidak bisa bicara lagi.

*[≽️ PV*
Promotional Video, atau video promosi. Seperti namanya, PV memiliki tujuan untuk mempromosikan Anime nya. Mengandung sedikit bocoran.
Contoh: PV Shuumatsu no Valkyrie, PV Tsukihime Remake

*[≽️ Pre Air*
Pre Air atau di artikan "Sebelum Mengudara" dalam anime adalah sebuah video penuh yang dirilis sebelum tanggal rilis anime yang asli. Tujuannya bermacam macam, namun kebanyakan untuk mencari tau seberapa besar respon penonton.
Contoh: Pre Air Tokyo Revenger rekap 3 episode pertama.

*[≽️ Prekuel Anime*
Yaitu sebuah cerita sebelumnya masuk kedalam cerita utama yang ditampilkan. Biasanya didalamnya terdapat Prolog berupa cerita masa lalu sebelum seri utama.
Contoh: Kyoukai no Kanata OVA, Fate/Grand Order Babylonia 00: Initier Itium

*[≽️ Reverse*
Tidak memiliki arti khusus dalam dunia anime. Hanya memiliki makna "terbalik" seperti arti kata reverse pada umumnya.
Contoh: Reverse Harem, Reverse Trap

*[≽️ Seiyuu*
Adalah seorang pengisi suara anime. Dalam bahasa Inggris disebut "Voice Actor", dalam bahasa Indonesia disebut "Pengisi Suara" dan dalam bahasa umum disebut "Dubber"
Contoh: Rie Takahashi, Inori Minase

*[≽️ Sekuel Anime*
Sekuel adalah kebalikan dari prekuel, Sekuel menceritakan kelanjutan dari cerita utamanya. Sekuel anime bisa berbentuk Movie, Seri lanjutan, Spin Off, OVA dll.
Contoh: S2 Overlord setelah S1, Movie Saekano setelah S2.

*[≽️ Shota*
Merupakan sebutan untuk Anak kecil laki laki dalam anime yang masih belum mencapai masa remaja. Berhubungan dalam hal ini, para penyuka anak kecil laki-laki disebut dengan "Shotacon"
Contoh: Mizuhara Tomoya, Killua Zoldyck

*[≽️ Simp*
Memiliki makna memuja, berarti orang itu memiliki kebanggaan dan kepercayaannya tersendiri terhadap suatu karakter melebihi karakter lain.
Contoh: Simp Yuuki Asuna, Simp Kurumi Tokisaki

*[≽️ Spin Off*
Spin Off merupakan cerita sampingan dari seri utama, Spin off rata-rata berisikan tentang kegiatan yang tidak ditampilkan di seri utama. Spin off tidak wajib memiliki kesamaan dengan Seri utama, banyak anime Action yang memiliki spin off yang berisi Slice of Life - Comedy.
Contoh: Ple Ple Pleiades, Re:Zero Break Time

*[≽️  Special*
Mencakup seluruh tipe anime, biasanya dipakai karena tidak ada kejelasan tipe anime yang tersedia. (Tidak tahu itu OVA, OAD, ONA dsb)
Contoh: Wonder Egg Priority Spesial, Working!!! Spesial

*[≽️ Slapstic*
Slapstic biasanya dikaitkan dengan Candaan untuk komedi dengan menggunakan media kekerasan terhadap lawan main.
Contoh: Tokoh A bertindak bodoh dan dipukul oleh Tokoh B dan menghasilkan reaksi wajah yang lucu

*[≽️ Tokusatsu*
Adalah cerita yang dibuat dari Orang yang memakai kostum. Seperti Ultraman atau Kamen Rider. Meskipun tidak termasuk anime, Tokusatsu fans tidak berbeda jauh dengan Anime fans. Dan banyak juga anime yang memparodikan cerita dari Tokusatsu.
Contoh: Ultraman, Kamen Rider

*[≽️ TV Anime*
Artinya Anime itu ditampilkan di TV Jepang secara massal dan tidak hanya ditampilkan dalam jaringan internet.
Contoh: Detective Conan, Pokemon

*[≽️ Teaser*
Trailer merupakan cuplikan yang diambil dari dalam seri animenya. Trailer biasanya datang setelah PV dan sebelum Seri utama. Tujuannya masih untuk mempromosikan Anime.
Contoh: Sebagian Action scene Kimetsu no Yaiba, preview karakter Fate Grand Order

*[≽️ Tema*
Pokok pemikiran atau ide dasar. Hal ini jelas bahwa, tema merupakan gagasan utama dalam karya, berdasarkan tujuan yang hendak disampaikan.

*[≽️ Trailer*
Trailer memiliki arti yang sama dengan Teaser, namun Trailer memiliki durasi yang lebih lama, itu karena Trailer berisi informasi tentang staff, sponsor, tanggal rilis anime dll. Trailer berdurasi±1 - 2,5 menit, sedangkan Teaser hanya 10-30 detik.
Contoh: Promosi Game, Promosi Anime

*[≽️ Trap*
Memiliki arti "Jebakan" Trap dalam anime merupakan Seorang laki laki yang berpenampilan seperti Perempuan. Dalam hal ini bukan hanya cara berpakaian atau wajah yang cantik, namun setiap Laki laki yang dapat membuat penonton salah mengira dia perempuan bisa disebut sebagai Trap.
Contoh: Totsuka Saika, Nagisa Shiota

*[≽️ TV Anime Seri/Series*
Yaitu "main anime" (Anime utama) yang merupakan cerita yang akan ditampilkan dan ditonjolkan dalam penayangan.
Contoh: Shin-chan, Houseki no Kuni

*[≽️ Unsur*
Saling terkait dengan genre, semisal jika ada sedikit Comedy dalam anime genre Action, maka tidak bisa disebut sebagai genre Comedy juga, karena Comedy dalam anime itu hanya sebagai Unsur Pelengkap.
Contoh: Terdapat rasa Romance pada anime Action, yang tanpa genre Romance.

*[≽️ Unsur Cerita*
Saling terkait dengan genre, unsur adalah sebuah hal yang melekat pada cerita. Unsur tidak ditonjolkan namun memiliki ciri khas dan keunikan tersendiri. Unsur terbagi menjadi banyak jenis, oleh para penikmatnya.
Contoh : Bishounen, Bishoujo

*[≽️ Vsb*
Adalah sebuah singkatan dari Versus Battle. Merupakan sebuah fandom yang mengumpulkan informasi Valid tentang suatu anime, manga, LN dll, agar bisa didebatkan secara sistematis.
Contoh: Informasi Skill suatu karakter, Informasi tentang kelemahan suatu karakter.

*[≽️ Visual Novel*
Novel visual atau yang terkadang disebut Sound Novel adalah sebuah jenis permainan interaksi fiksi yang dapat dimainkan di komputer pribadi. Biasanya mirip dengan Galge Game.
Contoh: Fate Stay Night, Steins; Gate

*[≽️ Waifu*
Kata Waifu diambil dari bahas Inggris Wife yang berarti Istri. Dalam dunia per-anime-an, waifu adalah Seorang karakter anime perempuan yang disukai oleh Laki laki di dunia nyata sebagai karakter favorit.
Contoh: Zero Two, Kurumi Tokisaki

*[≽️ x265*
Merupakan kode yang merujuk pada video yang dikompres menjadi lebih efisien dari sebelumnya.
Contoh: File Video 720 setara dengan Ukuran video 480, Video 480 setara dengan Ukuran video 360.`,
			},
			{ quoted: m },
		);
	}
};
handler.help = ["bahasaumum"];
handler.tags = [tanime];
handler.command = /^(bu|bahasaumum|bahasaumumanime)$/i;

export default handler;
