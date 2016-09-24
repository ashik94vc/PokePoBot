var TelegramBot = require('node-telegram-bot-api')
var sleep = require('sleep')
var token = process.env.API_KEY;
var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, function (msg, match) {
  var messages = ["Hi","Hello","Miss Me?","Are you there?","JoeBro JoeBro","I see you","#KickKaushik?","#KickAnirudh","Pika Pika","Pickaaachu","snorlax mode on"]
  var fromId = msg.chat.id;
  for(var i=0;i<12;i++) {
    var idx = Math.floor(Math.random()*11)
    var resp = match[1]+" "+messages[idx];
    bot.sendMessage(fromId,resp);
  }
});

bot.onText(/\/start/, function(msg, match) {
  bot.sendMessage(msg.chat.id,"Hi, Welcome...")
  bot.sendMessage(msg.chat.id,"Use `/echo username` to spam that person")
})
bot.onText(/\/chat (.+)/,function(msg, match) {
  var message = match[1]
  if(message == "Hi")
    bot.sendMessage(msg.chat.id,msg.from.id+" Hi")
})
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId,"Your Mom >_<")
});
