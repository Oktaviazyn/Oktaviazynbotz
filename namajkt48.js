/*
 * Nama Pengembang: Aliciazyn
 * Kontak Whatsapp: wa.me/6288268142831
 * Akun Github: github.com/AiciaxyviorMd
 * Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
 */

import { promises } from "fs";
import { join } from "path";

let handler = async function (m, { conn, __dirname }) {
	let _package =
		JSON.parse(
			await promises
				.readFile(join(__dirname, "../package.json"))
				.catch((_) => ({})),
		) || {};

	m.reply(
		`
Berikut ini nama-nama anggota JKT48/telah lulus secara lengkap: 

*Contoh : .pin Freya Jayawardana JKT48*
1 Adzana Shaliha
2 Amanda Sukma
3 Angelina Christy
4 Aurellia Azizi
5 Callista Alifia
6 Cornelia Vanisa
7 Febriola Sinambela
7 Feni Fitriyanti
8 Fiony Alveria
9 Flora Shafiq
9 Freya Jayawardana
10 Gabriela Abigail
11 Gita Sekar Andarini
12 Helisma Putri Indah
13 Indira Cahya
14 Jessica Chandra
15 Jesslyn Elly
16 Kathrina Irene
17 Lulu Salsabila
18 Marsha Lenathea
19 Mutiara Azzahra
20 Raisha Syifa
21 Reva Fidela
22 Shani Indira Natio
23 Shania Gracia
24 Yessica Tamara
25 Alya Amanda
26 Anindya Ramadhani
27 Cathleen Nixie
28 Celine Thefani
29 Chelsea Davina
30 Chynthia Yaputera
31 Dena Natalia
32 Desy Natalia
33 Gendis Mayrannisa
34 Grace Octaviani
35 Greesella Adhalia
36 Jeane Victoria
37 Michelle Alexandra
38 Gabriela Margareth Warouw
38 Melody Nurramdhani Laksani
40 Shani Indira Natio
41 Stella Cornelia
42 Jessica Vania
43 Rona Anggreani
43 Cindy Yuvia
44 Haruka Nakagawa
45 Nabilah Ratna Ayu Azalia
46 Riskha Fairunissa
47 Shania Gracia
48 Ayana Shahab
49 Melody Nurramdhani Laksani 
50 Devi Kinal Putri
51 Sinka Juliani
52 Frieska Anastasia Laksani
53 Melody Nurramdhani Laksani 
54 Cindy Yuvia 
55 Nadila Cindi Wantari
56 Rena Nozawa
57 Eve Antoinette Ichwan
58 Shania Gracia 
59 Melody Nurramdhani Laksani 
60 Cindy Yuvia 
61 Nadila Cindi Wantari 
62 Rena Nozawa 
63 Fransisca Saraswati Puspa Dewi

Terima kasih, semoga bermanfaat.
`.trim(),
	);
};

handler.help = ["daftarnamajkt48"];
handler.tags = [tmain];
handler.command = ["daftarnamajkt48"];

export default handler;
