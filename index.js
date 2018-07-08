const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json")
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`)
  bot.user.setGame("Cavity Simulator")

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}info`){
    let bicon = bot.user.displayAvatarURL;
let botembed = new Discord.RichEmbed()
.setDescription("Bot Information")
.setColor("#f47742")
.setThumbnail(bicon)
.addField("Bot Name", bot.user.username);

return message.channel.send(botembed);
  }
});

bot.login(tokenfile.token);
