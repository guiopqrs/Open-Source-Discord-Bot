const Discord = require("discord.js");

module.exports.run = async execute(client, msg, args) {
  	if (!args[0]) return msg.channel.send("Error, no message");
  	let res = args.join(" ");
  	let rev = res.split('').reverse().join('');
  	msg.channel.send(rev);
}

module.exports.help = {
    name: "reverse",
    description: "reverse your message",
    usage: "reverse [message]",
}