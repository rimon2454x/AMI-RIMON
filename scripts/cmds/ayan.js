module.exports = {
    config: {
        name: "ayan",
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
    if (event.body && event.body.toLowerCase() == "ayan") return message.reply("𝗔𝘆𝗮𝗻 𝗕𝗼𝘀𝘀 𝗸 𝗮𝗸𝘁𝗮 𝗴𝗶𝗿𝗹𝗳𝗿𝗶𝗲𝗻𝗱 𝗱𝗲𝘂 𝗮𝗺𝗿 𝗔𝘆𝗮𝗻 𝗯𝗼𝘀𝘀 𝗽𝘂𝗿𝗲 𝘀𝗶𝗻𝗴𝗹𝗲-!!🥺😷");
}
};
