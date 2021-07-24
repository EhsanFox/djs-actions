const core = require('@actions/core');
const github = require('@actions/github');
const { WebhookClient } = require("discord.js");
const BuildMessage = require('./lib/BuildMessage');

// Setup Data
const data = {

    // Webhook Data
    webhook_ID: core.getInput("id"),
    webhook_TOKEN: core.getInput("token"),

    // Webhook Options
    avatar: core.getInput("avatar") || false,
    username: core.getInput("username") || false,
    content: core.getInput("content") || false,

    // Embed Options
    title: core.getInput("title") || (github.context.eventName == "push") ? `Commit on ${github.context.repo.owner}/${github.context.repo.repo}` : `Release ${github.context.payload.release.tag_name}`,
    url: core.getInput("url")  || (github.context.eventName == "push") ? github.context.payload.head_commit.url : github.context.payload.release.url,
    description: core.getInput("description") || (github.context.eventName == "push") ? `` : ``,

    author: (core.getInput("author")) ? {
        name: core.getInput("author"),
        iconURL: core.getInput("author_icon") || null,
        url: core.getInput("author_url") || null
    } : null,

    footer: (core.getInput("footer")) ? {
        text: core.getInput("footer"),
        iconURL: core.getInput("footer_icon") || null
    } : null,

    image: (core.getInput("image")) ? {
        url: core.getInput("image")
    } : null,

    thumbnail: (core.getInput("thumbnail")) ? {
        url: core.getInput("thumbnail")
    } : null,

    timestamp: (core.getInput("timestamp")) ? true : false,
    color: core.getInput("color") || "RANDOM"

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
    core.setFailed("[Discord.js]: ", error)
}