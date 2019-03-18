/* made without love by warp <3 */


// Load resources [BEGIN]
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
// Load resources [END]

// Discord activity & console log [BEGIN]
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
// Discord activity & console log [END]

// Check for messages [BEGIN]
client.on("message", async message => {
// Check for messages [END]
	
// Gay! function [BEGIN]
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

// Check for messages from real users [BEGIN]
 client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
// Check for messages from real users [END]
	 
	 
	 // *Say command [BEGIN]
 if(command === "say") {
 const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
      return message.reply("Fuck off please.");
    if(message.member.roles.some(r=>["Admin"].includes(r.name)) )
    message.channel.send(sayMessage);
 }
	 // *Say command [END]
 
	 // *Help command [BEGIN]
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
      { name: "Homo! function",
	      value: "Replace [USERID] in INDEX.JS with the USERID of your target!"
	     }
	 ]}
 
 })};
	 // *Help command [END]
	 
	 // *Warp command [BEGIN]
 if(command === "warp") {
       return message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Warp made this abomination <3",
      icon_url: client.user.avatarURL,
    }}}
        // *Warp command [END]
)};
 });

client.login 
(config.token);
