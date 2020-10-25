const Discord = require("discord.js");

module.exports.run = async execute(client, msg, args) {
      let member = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || msg.member;
      let user = member.user;
      let joineddaysago = Math.floor((Date.now() - member.joinedAt) / 86400000);
      let createddaysago = Math.floor((Date.now() - user.createdAt) / 86400000);
      const info = new Discord.MessageEmbed()
      .setTitle(`${user.tag}'s Info`)
      .addField(`User ID:`, user.id)
      .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`)
      .addField(`Account Creation:`, `${createddaysago} Days ago`)
      .addField(`Joined Server:`, `${joineddaysago} Days ago`)
      .addField(`Presence:`, user.presence.status)
      .addField("Roles:", member.roles.cache.map(roles => `${roles}`).join(', '), true)
      .setThumbnail(user.displayAvatarURL({ size: 1024, dynamic: true, format: "png" }))
      .setColor("ff0000");
      msg.channel.send(info);
}

module.exports.help = {
    name: "whois",
    description: "Show's information about a user.\nAliases:\n - {prefix}userinfo [@user/ID]",
    usage: "whois [@user/ID]",
    aliases: ["userinfo"]
}