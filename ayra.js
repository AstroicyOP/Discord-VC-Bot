const Discord = require('discord.js')
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MEMBERS"],
})
const TOKEN = process.env.token

client.on("guildMemberAdd", async member => {
  const guild = member.guild;
  const channel =  client.channels.cache.get("VC ID");

channel.setName(`🆕・${member.user.username}`)
});

client.on('ready', () => {
console.log('Guild Count: ' + client.guilds.cache.size)
  console.log('Ping: ' + (client.ws.ping))
  console.log('Online! Add A New Member To Update the channel!')

  client.user.setActivity({ type: "WATCHING", name: `Ayra` })
  
  require('http').createServer((req, res) => res.end('Bot is alive! Check out @TopClips on github')).listen(3000)
  
})
client.login(TOKEN);

// ----------------------------
// Astroicy and his Devs
