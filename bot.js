// eslint-disable-next-line no-undef
const { Telegraf } = require("telegraf");
const TOKEN = '6358198644:AAEjhfoTjdWHFka7otUzqSg-kQkPjExwMbI'

const web_link = 'https://wonderful-lokum-be9168.netlify.app';

const bot = new Telegraf(TOKEN);

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
