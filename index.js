const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("discord-ytdl-core");  

function Quran(){
let stream = ytdl("https://youtu.be/V9UIIsai5E8", {
            filter: "audioonly",
            opusEncoded: true,
            encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200']
        });
      let ch = client.channels.cache.get(process.env.qch)
      ch.join()
        .then(connection => {
            let dispatcher = connection.play(stream, {
                type: "opus"
            })
            .on("finish", () => {
                Quran()
            })
        });
}
client.on("ready", () => {
console.log(`Quran Bot is Started`)
console.log(`[NAME] ${client.user.tag}`)
console.log(`[ID] ${client.user.id}`)
console.log(`[GUILDS] ${client.guilds.cache.size}`)
console.log(`( All Copyrights Go To ZombieX )`)
Quran()
    
});

client.login(process.env.token) 
