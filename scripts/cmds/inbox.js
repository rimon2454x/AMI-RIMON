module.exports = {
  config: {
    name: "inbox",
    aliases: ["inboxme", "in"],
    version: "1.0",
    author: "MR.AYAN",//**original author fb I'd : https://m.me/NOOBS.DEVELOPER.AYAN **//
    countDown: 10,
    role: 2,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: ""
    },
    category: "fun",
    guide: {
      en: ""
    }
  },
  langs: {
    en: {
      gg: ""
    },
    id: {
      gg: ""
    }
  },
  onStart: async function({ api, event, args, message }) {
    try {
      const query = encodeURIComponent(args.join(' '));
      message.reply("☑️ |✦ ѕυ¢¢υѕfυℓℓ уσυя ιивσχ тєχт\n¢нє¢к му ιивσχ", event.threadID);
      api.sendMessage("👀 |✦ нєℓℓσ χαи", event.senderID);
    } catch (error) {
      console.error("Error bro: " + error);
    }
  }
};
