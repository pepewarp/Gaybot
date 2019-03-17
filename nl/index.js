/* werp spaghetti code! */

// Laad tweedracht.js
const Discord = require("discord.js");

// Laad Client
const client = new Discord.Client();

// Laad config
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot is oplijn! Er zijn nu ${client.users.size} makkers, in ${client.guilds.size} obers.`);
  

client.user.setActivity(`Mijn penis is ${client.guilds.size}cm!`);
});

client.on("guildCreate", guild => {

  console.log(`Nieuwe ober: ${guild.name} (id: ${guild.id}). Dat zijn ${guild.memberCount} makkers!`);
  client.user.setActivity(`Mijn penis is ${client.guilds.size}cm!`);
});

client.on("guildDelete", guild => {
 
  console.log(`Bot is verwijdert uit: ${guild.name} (id: ${guild.id}) ÒwÓ`);
  client.user.setActivity(`Mijn penis is ${client.guilds.size}cm!`);
});


client.on("message", async message => {
  
  // Bot berichten? :gelezen:
  if(message.author.id === "") 
	 message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Homobot - NL",
      icon_url: client.user.avatarURL,
    },
    title: "Leuk feitje!",
    description: "De persoon hierboven is enorm homo!",
  }
 })});
 
 client.on("message", async message => {
 
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
 if(command === "zeg") {
 
    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{}); 
    
    if(message.member.roles.some(r=>["Admin"].includes(r.name)) )
    message.channel.send(sayMessage);
 }});
 
client.login 
(config.token);


