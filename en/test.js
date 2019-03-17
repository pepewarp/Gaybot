/* warps retarded bot! */

// retard.js
const Discord = require("discord.js");

// client 
const client = new Discord.Client();

// config
const config = require("./config.json");
// config.token : token
// config.prefix : prefix (duh)

client.on("ready", () => {
  // If it works, you get this:
  console.log(`Bot is online! ${client.users.size} users, ${client.guilds.size} servers.`);
  

client.user.setActivity(`My penis is ${client.guilds.size} inches long!`);
});

client.on("guildCreate", guild => {
  //This feminist (event) gets TRIGGERED if the bot joins a server.
  console.log(`New server: ${guild.name} (id: ${guild.id}). That's ${guild.memberCount} members!`);
  client.user.setActivity(`My penis is ${client.guilds.size} inches long!`);
});

client.on("guildDelete", guild => {
  //This feminist (event) gets TRIGGERED if the bot leaves a server.
  console.log(`Bot left: ${guild.name} (id: ${guild.id}) ÒwÓ`);
  client.user.setActivity(`My penis is ${client.guilds.size} inches long!`);
});


client.on("message", async message => {
  // Checks for messages
  
  // Bot messages are left on read, just like jessica does to me when i ask if i can see the kids.
  if(message.author.id === "") 
	 message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "warps gaybot",
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
    // says something and deletes command lol
    const sayMessage = args.join(" ");
    // Deletes the command
	if(message.member.roles.some(r=>["Admin"].includes(r.name)) )
    message.delete().catch(O_o=>{}); 
    // Says the thing: 
    message.channel.send(sayMessage);
 }});
client.login 
(config.token);


