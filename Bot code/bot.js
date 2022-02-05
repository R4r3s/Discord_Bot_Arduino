const Discord = require("discord.js");
const config = require("./config.json");
const { boolean } = require("./node_modules/zod/lib/types");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
var arduino;

const fs = require('fs');


client.on("messageCreate", function (message) {


    const prefix = "a!";

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    

    if (command === "ledon") {
        arduino = 1;

        fs.writeFileSync("file.txt", JSON.stringify(arduino));

        message.reply(`LED set On`);
 
    }

    if (command === "ledoff") {
        arduino = 0;

        fs.writeFileSync("file.txt", JSON.stringify(arduino));

        message.reply(`LED set Off`);

    }

    if (command === "ledblink") {
        arduino = 2;

        fs.writeFileSync("file.txt", JSON.stringify(arduino));

        message.reply(`LED set On with **BLINK**`);

    }

    if (command === "help") {
        message.channel.send(`**Commands:**`)
        message.channel.send(`a!ledOn === Set LED - On`);
        message.channel.send(`a!ledOff === Set LED - Off`);
        message.channel.send(`a!ledBlink === Set LED - Blink`);

    }







});

client.login(config.BOT_TOKEN);