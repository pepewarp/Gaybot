/* warps retarded bot! */

const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {

  console.log(`Bot is online! ${client.users.size} users, ${client.guilds.size} servers.`);
  

client.user.setActivity(`My penis is ${client.guilds.size} inches long!`);
});

client.on("guildCreate", guild => {

  console.log(`New server: ${guild.name} (id: ${guild.id}). That's ${guild.memberCount} members!`);
  client.user.setActivity(`My penis is ${client.guilds.size} inches long!`);
});

client.on("guildDelete", guild => {

  console.log(`Bot left: ${guild.name} (id: ${guild.id}) ÒwÓ`);
  client.user.setActivity(`My penis is ${client.guilds.size} inches long!`);
});


client.on("message", async message => {

  if(message.author.id === "[USER ID]") 
	  // Replace [USER ID] with the userID you want to target.
	  
	 message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Homobot - EN",
      icon_url: client.user.avatarURL,
    },
    title: "Fun fact!",
    description: "The person above is hella gay!",
  }
 })});

 client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	 
 if(command === "say") {
 
    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{}); 
    
    if(message.member.roles.some(r=>["Admin"].includes(r.name)) )
    message.channel.send(sayMessage);
 }});

client.login 
(config.token);


