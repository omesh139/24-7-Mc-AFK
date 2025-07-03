const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

const bot = mineflayer.createBot({
  host: 'your.minecraftserver.com',
  port: 25565,
  username: 'AFK_Bot_123',
  version: false
});

bot.once('spawn', () => {
  console.log('Bot has joined the server!');
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 6000);
});

bot.on('error', err => console.log('Error:', err));
bot.on('end', () => console.log('Bot disconnected'));

app.get('/', (req, res) => res.send('Bot is running!'));
app.listen(3000, () => console.log('Web server running'));
