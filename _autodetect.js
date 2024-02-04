import { WAMessageStubType } from "@whiskeysockets/baileys";
import fs from "fs";

export async function before(m) {
	if (!m.messageStubType || !m.isGroup) return;
	global.fkontak = {
		key: { participant: "0@s.whatsapp.net" },
		message: {
			contactMessage: {
				displayName: this.getName(this.user.jid),
				vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;AzamiBot,;;;\nFN:AzamiBot,\nitem1.TEL;waid=${
					this.user.jid.split("@")[0]
				}:${this.user.jid.split("@")[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
				jpegThumbnail: fs.readFileSync("./src/thumbnail.png"),
				thumbnail: fs.readFileSync("./src/thumbnail.png"),
				sendEphemeral: true,
			},
		},
	};
	let edtr = `@${m.sender.split`@`[0]}`;
	if (m.messageStubType == 32 || m.messageStubType == 27) {
		let user = m.messageStubParameters[0];
		let id = m.chat;
		let chat = db.data.chats[m.chat];
		let desc;
		try {
			desc = await conn.groupFetchAllParticipating();
		} catch {}
		if (m.messageStubType == 27) {
			await this.reply(
				m.chat,
				(chat.sWelcome || this.welcome || this.welcome || "Welcome, @user!")
					.replace("@subject", await this.getName(m.chat))
					.replace("@desc", desc[id].desc || "unknown")
					.replace("@user", "@" + user.split("@")[0]),
				fkontak,
				{ mentions: [user] },
			);
		}
	} else {
		console.log({
			messageStubType: m.messageStubType,
			messageStubParameters: m.messageStubParameters,
			type: WAMessageStubType[m.messageStubType],
		});
	}
}

export const disabled = false;
