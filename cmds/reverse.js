const Discord = require("discord.js");

module.exports.run = async (client, message, args) {
  	if (!args[0]) return msg.channel.send("Error, no message");
  	let res = args.slice(1).join(" ");
  	let rev = res.split('').reverse().join('');
  	msg.channel.send(rev);
}

module.exports.help = {
    name: "reverse",
    aliases: ["rv"]
}
