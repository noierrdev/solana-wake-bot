const { Bot } = require("grammy");

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot("7353806892:AAEyA8OZ7Dm2cAFKq1Rn04RAmXBlL3BoCF4"); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
clients={};
bot.command("start", (ctx) => {
    var intervalId=setInterval(()=>{
        const currentTime=new Date();
        const now=currentTime.getTime();
        bot.api.sendMessage(ctx.chatId,now.toString())
    },5000);
    clients.push(intervalId);
});

bot.command("stop", (ctx) => {
    clearInterval()
});

// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();