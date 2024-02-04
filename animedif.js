let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return m.reply("Ketik: .animedif <prompt>");
	m.reply(wait);
	try {
		let data = `https://kntl.vercel.app/api/anyv3?prompt=${text}&negative_prompt=verybadimagenegative_v1.3, ng_deepnegative_v1_75t, (ugly face:0.8),cross-eyed,sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, bad anatomy, DeepNegative, facing away, tilted head, {Multiple people}, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worstquality, low quality, normal quality, jpegartifacts, signature, watermark, username, blurry, bad feet, cropped, poorly drawn hands, poorly drawn face, mutation, deformed, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, extra fingers, fewer digits, extra limbs, extra arms,extra legs, malformed limbs, fused fingers, too many fingers, long neck, cross-eyed,mutated hands, polar lowres, bad body, bad proportions, gross proportions, text, error, missing fingers, missing arms, missing legs, extra digit, extra arms, extra leg, extra foot, ((repeating hair)), ((crossed eyes)), (((pubic hair))), (((piercing))), (((piercings))), (((tatoo))), (((huge tits))), (((big tits)))`;
		conn.sendFile(m.chat, data, "apa", `Prompt : ${text}`, m);
	} catch (e) {
		m.reply(error);
	}
};
handler.help = ["animedif *<𝒑𝒓𝒐𝒎𝒑𝒕>*"];
handler.tags = [tai];
handler.command = ["animedif"];
handler.premium = true;
handler.limit = true;

export default handler;
