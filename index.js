const core = require('@actions/core');
const github = require('@actions/github');
const { WebhookClient, MessageEmbed } = require("discord.js");
const BuildMessage = require('./lib/BuildMessage');

// Setup Data
const data = {
    // Webhook Data
    webhook_ID: core.getInput("id"),
    webhook_TOKEN: core.getInput("token"),

    // Webhook Options
    avatar: core.getInput("avatar") ?? false,
    username: core.getInput("username") ?? false,
    content: core.getInput("content") ?? false,

    // Embed Options
    title: core.getInput("title") ?? "",
    url: core.getInput("url") ?? "",
    author: {
        name: core.getInput("author") ?? null,
        iconURL: core.getInput("author_icon") ?? null,
        url: core.getInput("author_url") ?? null
    },
    footer: {
        text: core.getInput("footer") ?? null,
        iconURL: core.getInput("footer_icon") ?? null
    },
    image: {
        url: core.getInput("image") ?? null
    },
    timestamp: (core.getInput("timestamp")) ? true : false,
    color: core.getInput("color") ?? "RANDOM"
};

try {
    core.debug("Loading Client...");
    
    const Client = new WebhookClient(data.webhook_ID, data.webhook_TOKEN);
    delete data.webhook_TOKEN;
    delete data.webhook_ID;

    const ResultMessage = BuildMessage(data);
    if(data.content)
        Client.send(data.content, ResultMessage);
    else
        Client.send(ResultMessage);

} catch (error) {
    core.error("[Discord.js]: ", error)
}