const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: process.env.MC_HOST || 'localhost',
  port: Number(process.env.MC_PORT) || 25565,
  username: process.env.MC_USERNAME || 'Bot',
  auth: process.env.MC_AUTH || 'offline',
  version: process.env.MC_VERSION || false
})

bot.once('spawn', () => {
  console.log(`Бот ${bot.username} зашёл на сервер`)
  bot.chat('Привет!')
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  if (message === 'ping') bot.chat('pong')
})

bot.on('kicked', (reason) => console.log('Кикнут:', reason))
bot.on('error', (err) => console.log('Ошибка:', err.message))
bot.on('end', () => console.log('Отключён от сервера'))
