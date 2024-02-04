import fs from 'fs';
let time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
let salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '• *Example :* .scall Komtol', m)
let call = {
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: `\n${text}`.repeat(5000)
}}
conn.relayMessage(m.chat, call, {})
}
handler.help = ['scall *<text>*']
handler.tags = [towner]
handler.command = /^scall$/
handler.owner = true

export default handler