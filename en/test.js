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
	

  if(message.author.id === "[USERID]") 
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
	 
	 
	 // spam command
  if(command === "spam") {
 
    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{}); 
	 if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
      return message.reply("Fuck off please.");
    
    if(message.member.roles.some(r=>["Admin"].includes(r.name)) )
    message.channel.send(sayMessage);
if(message.member.roles.some(r=>["Admin"].includes(r.name)) )
    message.channel.send(sayMessage); 
if(message.member.roles.some(r=>["Admin"].includes(r.name)) )
    message.channel.send(sayMessage);
if(message.member.roles.some(r=>["Admin"].includes(r.name)) )
    message.channel.send(sayMessage);
if(message.member.roles.some(r=>["Admin"].includes(r.name)) )
    message.channel.send(sayMessage);
 }

// say command
 if(command === "say") {
 
    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{}); 
if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
      return message.reply("Fuck off please.");
  
    if(message.member.roles.some(r=>["Admin"].includes(r.name)) )
    message.channel.send(sayMessage);
 }
 
 // help command
 if(command === "help") {
	 message.delete().catch(O_o=>{});
	 if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
      return message.reply("Fuck off please.");
	 message.channel.send("You've got mail!");
	 message.author.send({embed: {
    color: 3447003,
    author: {
      name: "Homobot - Help!",
      icon_url: client.user.avatarURL,
    },
    title: "Commands:",
    fields: [{
        name: "*Help",
        value: "PM's you this message!"
      },
      {
        name: "*Say",
        value: "Makes the bot send a custom message."
      },
      {
        name: "*Spam",
        value: "Sends a custom message 5 times!"
      }
	 ]}
 
 })};
 if(command === "warp") {
       return message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Warp made this abomination <3",
      icon_url: client.user.avatarURL,
    }}
 })};

 });

client.login 
(config.token);
