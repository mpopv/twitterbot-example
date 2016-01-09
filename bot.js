var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;

var Bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

var phraseArray = [ "hey twitter",
                    "im tweeting",
                    "tweet tweet",
                    "tweetstorm time... 1/22",
                    "plz RT v important",
                    "delete ur account",
                    "it me",
                    "same",
                    "#dogpants go on 4 legs!!",
                    "#thedress is blue and black" ];

var phrase = chooseRandom(phraseArray);

Bot.tweet(phrase);
