const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');
const app = express();
const port = 3000;

let bot;

app.use(express.static('public')); // Stellt index.html bereit

app.get('/start-bot', async (req, res) => {
  if (bot) return res.send('Bot läuft bereits!');

  bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

  bot.once('ready', () => console.log(`Bot angemeldet als ${bot.user.tag}`));

  try {
    await bot.login('MTQxMzQzOTE1Njk4OTk4NDg2OA.GbMhiH.LKvjSlUqNJVqirPFoUmrooS_KH6LtVZ7Ct3eEw');
    res.send('Bot gestartet!');
  } catch (err) {
    console.error(err);
    res.send('Fehler beim Starten des Bots');
  }
});

app.listen(port, () => console.log(`Server läuft auf http://localhost:${port}`));

