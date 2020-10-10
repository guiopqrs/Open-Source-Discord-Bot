const Discord = require("discord.js")
const randomPuppy = require("random-puppy") //npm i random-puppy or npm i --save random-puppy

module.exports.run = async (client, message, args) => {
	let reddit = ["me_irl", "dankmeme"]
	let random = reddit[Math.floor(Math.random() * reddit.length)]
	let img = await randomPuppy(random)
	
	let embed = new Discord.MessageEmbed()
	.setTitle(`From /r/${random}`)
	.setURL(`https://reddit.com/r/${random}`)
	.setImage(img)
	.setColor("RANDOM")
	
	message.channel.send(embed)
}

module.exports.help = {
	name: "meme",
	aliases: []
}
