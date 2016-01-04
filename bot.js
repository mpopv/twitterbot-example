var Twit = require(‘twit’);
var TwitterBot = require(‘node-twitterbot’).TwitterBot;

var Bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20];
var number = chooseRandom(numberArray);

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

Bot.tweet(number);
