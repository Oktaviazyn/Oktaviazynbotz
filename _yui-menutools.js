import moment from "moment-timezone";
import { Styles } from "../lib/Styles.js";
const handler = async (m, { conn, usedPrefix: _P, isOwner, isPremium }) => {
	const teks = `✧──···[ ᴅ ᴀ s ʙ ᴏ ᴀ ʀ ᴅ ]···──✧
            ˚꒷︶꒷꒥꒷˚꒷︶꒷꒥꒷
◦ *Verison 1*
◦ *creator: [BagusOkta]*           
Hi! ,My name is Nezuu. Saya Dapat Digunakan Dalam Beberapa Hal Yang Anda Perlukan, Seperti *Bertanya, Game , Musik Dan Lain Lain* Saya Senang Dapat Membantu Kamu, Nezuu Gemoyy Yang Suka Berimajinasi, Terangi Harimu Dengan Senyuman Karamelku.

‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎

╭──〣 ≼ ᴛᴏᴏʟꜱ ≽
│ ⎔ .ʙɢᴄᴏʟᴏʀ
│ ⎔ .ᴊᴀᴅɪᴄᴀʀᴛᴏᴏɴ *ʀᴇᴘʟʏ ꜰᴏᴛᴏ*
│ ⎔ .ᴄᴏɴᴠᴇʀᴛ
│ ⎔ .ᴅᴀꜱʜʙᴏᴀʀᴅ
│ ⎔ .ᴅᴇʟᴇᴛᴇ *𝐫𝐞𝐩𝐥𝐲 𝐩𝐞𝐬𝐚𝐧*
│ ⎔ .ᴅᴏɴᴀꜱɪ
│ ⎔ .ᴇᴅɪᴛ *𝐫𝐞𝐩𝐥𝐲 𝐩𝐞𝐬𝐚𝐧*
│ ⎔ .ᴇɴʜᴀɴᴄᴇ *ʀᴇᴘʟʏ ꜰᴏᴛᴏ*
│ ⎔ .ꜰᴏɴᴛ *<ᴛᴇxᴛ>*
│ ⎔ .ꜱᴛʏʟᴇᴛᴇxᴛ *<ᴛᴇxᴛ>*
│ ⎔ .ꜰɪᴛɴᴀʜ *<ᴛᴇxᴛ> @𝒕𝒂𝒈 <ᴛᴇxᴛ>*
│ ⎔ .ʀᴇꜱᴠᴄᴏᴜᴘʟᴇ *qᴜᴇʀʏ*
│ ⎔ .ᴊᴀᴅᴡᴀʟʙᴏʟᴀ
│ ⎔ .ʟɪꜱᴛʙʟᴏᴄᴋ
│ ⎔ .ᴛᴡᴇᴇᴛᴄ *ᴛᴇxᴛ*
│ ⎔ .ᴛᴡᴇᴇᴛ <ᴄᴏᴍᴍᴇɴᴛ>
│ ⎔ .ɴᴜʟɪꜱ *ᴛᴇxᴛ*
│ ⎔ .ɴᴜʟɪꜱᴋᴀɴᴀɴᴋɪʀɪ *ᴛᴇxᴛ*
│ ⎔ .ᴘɪxɪᴠ
│ ⎔ .ʀᴇᴍᴏᴠᴇʙɢ *ʀᴇᴘʟʏ ꜰᴏᴛᴏ*
│ ⎔ .ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ *ʀᴇᴘʟʏ ꜰᴏᴛᴏ*
│ ⎔ .ꜱᴍᴇᴍᴇ *ʀᴇᴘʟʏ ꜰᴏᴛᴏ*
│ ⎔ .ꜱᴍᴇᴛᴀ *ʀᴇᴘʟʏ ꜱᴛɪᴄᴋᴇʀ*
│ ⎔ .ꜱᴍᴀᴋᴇʀ *ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ*
│ ⎔ .ꜱᴛɪᴄᴋᴇʀᴡᴍ *ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ*
│ ⎔ .ᴛᴏɪᴍɢ *ʀᴇᴘʟʏ ꜱᴛɪᴄᴋᴇʀ*
│ ⎔ .ᴛᴏᴍᴘ3 *ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ*
│ ⎔ .ᴛᴏᴍᴘ4 *ʀᴇᴘʟʏ ꜱᴛɪᴄᴋᴇʀ*
│ ⎔ .ꜱᴇᴄᴍᴀɪʟ
│ ⎔ .ʙʟᴜʀ *ʀᴇᴘʟʏ ꜰᴏᴛᴏ*
│ ⎔ .ᴄᴀʀʙᴏɴ
│ ⎔ .ᴄʀᴏᴘ *ʀᴇᴘʟʏ ꜰᴏᴛᴏ*
│ ⎔ .ᴅᴇʟ 𝐫𝐞𝐩𝐥𝐲 𝐩𝐞𝐬𝐚𝐧
│ ⎔ .ᴅᴇʟᴇᴛᴇ 𝐫𝐞𝐩𝐥𝐲 𝐩𝐞𝐬𝐚𝐧
│ ⎔ .ᴅᴏᴍᴀɪɴ
│ ⎔ .ᴅʀᴏᴘᴍᴀɪʟ
│ ⎔ .ʜᴀᴅᴇ *ʀᴇᴘʟʏ ꜰᴏᴛᴏ*
│ ⎔ .ɪᴍɢ2ᴀɴɪᴍ *ʀᴇᴘʟʏ ꜰᴏᴛᴏ*
│ ⎔ .ᴍᴏᴅᴀᴘᴋ
│ ⎔ .qᴄ *ᴛᴇxᴛ*
│ ⎔ .ꜱꜰᴜʟʟ
│ ⎔ .ꜱᴛɪᴄᴋᴇʀ
│ ⎔ .ꜱɢɪꜰ
│ ⎔ .ᴀɪᴛᴏᴏɴᴍᴇ *𝒖𝒓𝒍*
│ ⎔ .ᴛᴏᴜʀ *ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ*
│ ⎔ .ᴠᴏɪᴄᴇᴠᴏx *ᴛᴇxᴛ*
│ ⎔ .ᴡɪᴛᴀɪ *ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ*
│ ⎔ .ᴊᴀᴅɪᴢᴏᴍʙɪᴇ *ʀᴇᴘʟʏ ꜰᴏᴛᴏ*
│ ⎔ .ᴛᴏᴘᴛᴠ *ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ*
│ ⎔ .ᴛᴏᴠɴ 𝐑𝐞𝐩𝐥𝐲 𝐯𝐢𝐝𝐞𝐨/𝐚𝐮𝐝𝐢𝐨
│ ⎔ .ᴛʀᴀɴꜱʟᴀᴛᴇ *ᴛᴇxᴛ*
│ ⎔ .ᴛᴛꜱ *ᴛᴇxᴛ*
│ ⎔ .ᴍᴇꜱꜱɪ
│ ⎔ .ᴏᴄʀ *ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ*
╰──〣 ✧ *Nezuu* ✧`;
	await conn.sendMessage(
		m.chat,
		{
			text: Styles(teks),
			mentions: [m.sender],
			contextInfo: {
				forwardingScore: 9999999,
				isForwarded: false,
				mentionedJid: [m.sender],
				externalAdReply: {
					showAdAttribution: false,
					renderLargerThumbnail: true,
					title: ucapan(),
					containsAutoReply: true,
					mediaType: 1,
					thumbnailUrl: `https://telegra.ph/file/cb9ffc6d2b3cb0fdd5da1.jpg`,
					mediaUrl: ``,
					sourceUrl: "https://kiicodeofficial.my.id",
				},
			},
		},
		{ quoted: m },
	);
};

handler.help = ["menutools"];
handler.tags = [tmain];
handler.command = ["menutools"];
handler.limit = true;
handler.register = true;

export default handler;

function ucapan() {
	const time = moment.tz("Asia/Jakarta").format("HH");
	let res = "Sudah Dini Hari Kok Belum Tidur Kak?";
	if (time >= 4) {
		res = "sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ";
	}
	if (time >= 10) {
		res = "sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ";
	}
	if (time >= 15) {
		res = "sᴇʟᴀᴍᴀᴛ sᴏʀᴇ";
	}
	if (time >= 18) {
		res = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ";
	}
	return res;
}