const Discord = require("discord.js")
const client = new Discord.Client({
  disableEveryone: true
})
const config = require("./config.json")

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

const fs = require("fs")

fs.readdir("cmds", (err, files) => {
  if(err) console.log(err)
  
  let filejs = files.filter(f => f.split(".").pop() === "js")
  if(filejs.length <= 0) {
    return console.log("Error No Commands Found")
  }
  filejs.forEach((f, i) => {
    let pull = require(`./cmds/${f}`)
    client.commands.set(pull.help.name, pull)
    pull.help.aliases.forEach(alias => {
      client.aliases.set(alias, pull.help.alias)
    })
  })
})

client.on("ready", () => {
  console.log("Active")
})

client.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return
  
  let prefix = config.prefix
  let messageArray = message.content.split(" ")
  let command = messageArray[0]
  let args = message.content.substring(message.content.indexOf(' ') + 1)
  
  if(!message.content.startsWith(prefix)) return
  
  let cmdfile = client.commands.get(command.slice(prefix.length)) || client.commands.get(client.aliases.get(command.slice(prefix.length)))
  
  try {
    if(cmdfile) cmdfile.run(client, message, args)
  } catch(err) {
    return console.log(`Something Went Wrong: ${err}`)
  }
})

client.login(config.token)