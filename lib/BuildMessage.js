const { MessageEmbed } = require("discord.js");
module.exports = (opts) => {
    if(typeof opts !== "object")
        throw new Error("Object is Only Allowed for MessageBuilder")
    
    // Setup Data
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

    if(opts.author)
        embed.setAuthor(opts.author.name, opts.author.iconURL, opts.author.url)
    
    if(opts.footer)
        embed.setFooter(opts.footer.text, opts.footer.iconURL)

    if(opts.image)
        embed.setImage(opts.image.url)
    
    if(opts.thumbnail)
        embed.setThumbnail(opts.thumbnail.url)

    if(opts.title)
        embed.setTitle(opts.title)

    if(opts.url)
        embed.setURL(opts.url)
    
    if(opts.description)
        embed.setDescription(opts.description)
        
    delete opts.color;
    delete opts.timestamp;
    delete opts.content;

    result.embeds.push(embed);
    return result;
}