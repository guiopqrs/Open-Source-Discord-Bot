const Discord = require("discord.js")
const config = require("./config.json")

module.exports.run = async (client, message, args) => {
	let answers = config.options;
	
	let rand = answers[Math.floor(Math.random() * answers.length)]
	
	let question = args.slice(1).join(" ")
	if(!question) return message.channel.send("Please Input Some Text You Want To Ask")
	
	let embed = new Discord.MessageEmbed()
	.setTitle("🎱 8Ball")
	.setDescription(`**Question**: ${question}\n**Answer**:${rand}`)
	.setColor("RANDOM")
	
	message.channel.send(embed)
}

module.exports.help = {
	name: "8ball",
	aliases: ["ask", "magic8ball"] //we put aliases here it means you can use them too!
}
