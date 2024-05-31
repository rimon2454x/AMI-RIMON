module.exports = {
    config: {
        name: "bot",
        version: "1.0",
        author: "MR.AYAN", //** original author fb I'd : https://m.me/NOOBS.DEVELOPER.AYAN **//
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "bot") return message.reply("ᴇɪ ʜᴀʟᴀʀ ᴘᴜᴛ (😒) ᴀʀᴇᴋ ʙᴀʀ ʙᴏᴛ ʙᴏʟʟᴇ ᴅʜᴏɪʀᴀ ᴜsᴛᴀ ᴅɪᴍᴜ ᴍɪʀᴀ ʙᴏʟᴇ ᴅᴀᴋᴏ ᴀᴍᴀᴋᴇ-!!😷");
}
};
