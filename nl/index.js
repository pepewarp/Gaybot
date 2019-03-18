/* gemaakt zonder liefde door werp <3 */


// Laad resources [BEGIN]
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
// Laad resources [END]

// Discord status & console bericht [BEGIN]
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
// Discord status & console bericht [EINDE]

// Check voor berichten [BEGIN]
client.on("message", async message => {
// Check voor berichten [EINDE]
	
// Homo! functie [BEGIN]
if(message.author.id === "[USERID]") 
	  // Vervang [USER ID] met het userID van je doelwit.
	  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Homobot - NL",
      icon_url: client.user.avatarURL,
    },
    title: "Leuk feitje!",
    description: "De persoon hierboven is moker homo!",
  }
 })});
// Homo! functie [EINDE]

// Check voor berichten van gebruikers [BEGIN]
 client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
// Check voor berichten van gebruikers [EINDE]

	 // *Zeg commando [BEGIN]
 if(command === "zeg") {
 const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
      return message.reply("Neuk op, aub.");
    if(message.member.roles.some(r=>["Admin"].includes(r.name)) )
    message.channel.send(sayMessage);
 }
	 // *Zeg commando [EINDE]
 
	 // *Help commando [BEGIN]
	 if(command === "help") {
	 message.delete().catch(O_o=>{});
	 if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
      return message.reply("Neuk op aub.");
	 message.channel.send("Ik heb je een bericht gestuurd!");
	 
		 message.author.send({embed: {
    color: 3447003,
    author: {
      name: "Homobot - Help!",
      icon_url: client.user.avatarURL,
    },
    title: "Functies:",
    fields: [{
        name: "*Help",
        value: "Stuurt je dit bericht!"
      },
      {
        name: "*Zeg",
        value: "Stuurt een bericht namens de bot."
      },
	     { name: "Homo! functie",
	      value: "Verander [USERID] in de broncode van de bot met het USERID van je doelwit!"
	     }
	    ]}
 
 })};
	 // *Help commando [EINDE]
	 
	 // *Werp commando [BEGIN]
 if(command === "werp", "warp", "teleporteer") {
       return message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Deze abominatie is gemaakt door werp <3",
      icon_url: client.user.avatarURL,
    }}}
        // *Werp commando [EINDE]
)};
 });

client.login 
(config.token);
