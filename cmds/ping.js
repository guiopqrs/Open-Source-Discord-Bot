const Discord = require("discord.js") //We Must Define This Almost Everytime We Code Commands

module.exports.run = async(client, message, args) => {
let latency = Date.now() - message.createdTimestamp
let apilatency = Math.ceil(client.ws.ping)

let embed = new Discord.MessageEmbed() //You Can Rename Embed On What You Want
.setTitle(":ping_pong: Pong!")
.setDescription (`Bot Latency: ${latency}\nAPI Latency: ${apilatency}`)
.setColor("RANDOM")

message.channel.send(embed) //Just Put The Name Here No "

module.exports.help = {
  name: "ping", //Name Of Commands
  aliases: [] //Aliases You Can Put Whatever You Want example ["pingpong", "pong", "p"]
} //Will Add More Cmds Soon!
