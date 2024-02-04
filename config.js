import { watchFile, unwatchFile } from "fs";
import axios from "axios";
import chalk from "chalk";
import { fileURLToPath } from "url";

const configs = {
	// Owner
	owner: [["6288994107174", "BagusOkta", true]],
	mods: ["6288994107174"],
	prems: ["6288994107174"],
	// Info
	packname: "Nezuu-MD",
	author: "BagusOkta",

	// Info Wait
	wait: "Sedang Di Proses, Mohon Tunggu....",
	eror: "Terjadi Kesalahan Coba Lagi Nanti!",
	error: "Terjadi kesalahan, silahkan coba lagi nanti",
	tmain: "Main",
	tanime: "Anime",
	trandom: "Random",
	tdownload: "Downloader",
	tai: "Ai",
	tgame: "Game",
	tsearch: "Internet",
	tgroup: "Group",
	towner: "Owner",
	tislam: "Islami",
	ttools: "Tools",
	'rpg': "Rpg",
	APIs: {
		rose: "https://api.itsrose.life",
		ibeng: "https://api.ibeng.tech",
		arif: "https://api.arifzyn.biz.id",
        kiicode: "https://kiicodeofficial.my.id",
	},

	APIKeys: {
		"https://api.itsrose.life": "Aliciazyn",
		"https://api.ibeng.tech": "a5wXu8gj58",
		"https://api.arifzyn.biz.id": "AR-eLlVFgzoubOH",
        "https://kiicodeofficial.my.id": "Ceri",
	},
};

// Its should be ok, right?
Object.assign(global, {
	...configs,
});

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
	unwatchFile(file);
	console.log(chalk.redBright("Update 'config.js'"));
	import(`${file}?update=${Date.now()}`);
});
