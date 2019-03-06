module.exports = {
    name: "setavatar",
    description: "Sets the avatar for BattleBot",
    aliases: ["seticon", "setpfp"],
    usage: "(Image attached)",
    modonly: true,
    async run(client, message, args) {

    // Sets image to the attachment
    let image = message.attachments.first().url;

    if (!image) {
        message.reply("Please attach an image to change my avater to!");
    }

    // Sets client's pfp
    client.user.setAvatar(image);

    // Sends success message
    message.channel.send("Successfully altered my avatar!");

}};