const { MessageEmbed } = require("discord.js");
module.exports = (opts) => {
    if(typeof opts !== "object")
        throw new Error("Object is Only Allowed for MessageBuilder")
    
    // BuildMessage
    delete opts.content;
    
    const embed = new MessageEmbed()
        .setColor(opts.color);
    const result = {
        embeds: []
    };

    // Webhook Options
    if(opts.avatar)
        result.avatarURL = opts.avatar;
    
    if(opts.username)
        result.username = opts.username;
    
    // Embed Options
    if(opts.timestamp)
        embed.setTimestamp();
    
    
}