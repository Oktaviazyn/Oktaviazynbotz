// Import necessary modules
import ytdl from "ytdl-core";
import yts from "yt-search";
import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import os from "os";

// Promisify the pipeline function
const streamPipeline = promisify(pipeline);

// Define the handler function
var handler = async (m, { conn, command, text, usedPrefix }) => {
	try {
		// Check if the command has a valid query
		if (!text) throw `Use example ${usedPrefix}${command} naruto blue bird`;

		// Search for videos based on the query
		let search = await yts(text);
		if (!search || !search.videos.length)
			throw "Video Not Found, Try Another Title";

		// Select a random video from the search results
		let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
		let { title, thumbnail, timestamp, views, ago, url } = vid;
		let wm = "Nezuu";

		// Construct the video caption
		let captvid = `╭──── 〔 Y O U T U B E 〕 ─⬣
    ⬡ Title: ${title}
    ⬡ Duration: ${timestamp}
    ⬡ Views: ${views}
    ⬡ Upload: ${ago}
    ⬡ Link: ${url}
    *by nezuu gemoyy*
    ╰────────⬣`;

		// Send the video information along with the thumbnail
		conn.sendMessage(
			m.chat,
			{ image: { url: thumbnail }, caption: captvid, footer: wm },
			{ quoted: m },
		);

		// Set up the audio stream
		const audioStream = ytdl(url, {
			filter: "audioonly",
			quality: "highestaudio",
		});

		// Get the path to the system's temporary directory
		const tmpDir = os.tmpdir();

		// Create writable stream in the temporary directory
		const filePath = `${tmpDir}/${title}.mp3`;
		const writableStream = fs.createWriteStream(filePath);

		// Start the download
		await streamPipeline(audioStream, writableStream);

		// Prepare the document to send
		let doc = {
			audio: {
				url: filePath,
			},
			mimetype: "audio/mp4",
			fileName: `${title}`,
			contextInfo: {
				externalAdReply: {
					showAdAttribution: true,
					mediaType: 2,
					mediaUrl: url,
					title: title,
					body: wm,
					sourceUrl: url,
					thumbnail: await (await conn.getFile(thumbnail)).data,
				},
			},
		};

		// Send the audio file
		await conn.sendMessage(m.chat, doc, { quoted: m });

		// Delete the audio file after sending
		fs.unlink(filePath, (err) => {
			if (err) {
				console.error(`Failed to delete audio file: ${err}`);
			} else {
				console.log(`Deleted audio file: ${filePath}`);
			}
		});
	} catch (error) {
		console.error(`Error in handler: ${error}`);
		if (error.code === "ENOSPC") {
			throw "Not enough space on the device. Please try again later.";
		} else {
			throw "An error occurred while processing the request.";
		}
	}
};

// Define additional properties for the handler
handler.help = ["play"].map((v) => v + " *qᴜᴇʀʏ*");
handler.tags = [tdownload];
handler.command = /^play$/i;

handler.exp = 5;
handler.limit = true;
handler.register = true;

// Export the handler function
export default handler;
