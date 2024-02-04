import { canLevelUp, xpRange } from "../lib/levelling.js";

export async function before(m) {
	let user = global.db.data.users[m.sender];
	if (!user.autolevelup) return !0;
	let before = user.level * 1;
	while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
	if (before !== user.level) {
		let str = `┌───═[ *LEVEL UP* ]═──▸
│╭────────────···▸
┴│▸ *Name :* ${user.register ? user.name : this.getName(m.sender)}
⬡│▸ *Tag :* @${m.sender.split("@")[0]}
⬡│▸ *Before :* ${before}
⬡│▸ *After :* ${user.level}
⬡│▸ *Role :* ${user.role}
┬│▸ *Clock :* ${new Date().toLocaleString("id-ID")}
│╰─────────────···▸
└───────────────···▸

*Note:* _Tingkatkan lagi kenolepanmu_
_Dan terus bermain dengan bot Prinz_
_Agar semakin tinggi levelmu :v_
`.trim();

		try {
			let pp;
			try {
				pp = await conn.profilePictureUrl(m.sender, "image");
			} catch {
				pp = "https://i.ibb.co/m53WF9N/avatar-contact.png";
			}
			await this.sendMessage(
				m.chat,
				{ image: pp, caption: str, mentions: [m.sender] },
				{ quoted: null },
			);
		} catch (e) {
			console.log(e);
			await this.reply(m.chat, str, null, {
				contextInfo: { mentionedJid: [m.sender] },
			});
		}
	}
}
