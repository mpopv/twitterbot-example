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

// var animalArray = ["i like cat",
//                    "dog is good pet",
//                    "sushi fish yum",
//                    "banana",
//                    "horse dot com slash horsesarecool",
//                    "starfish",
//                    "rsjn oin oiq nroiuqg iu",
//                    "DRINK MORE OVALTINE",
//                    "frog blast the vent core",
//                    "somebody set up us the bomb",
//                    "http://bomb.com",
//                    "use the force luke",
//                    "sentence",
//                    "s",
//                    "e",
//                    "n",
//                    "t",
//                    "koala bear",
//                    "orca",
//                    "dishwasher",
//                    "placeholder",
//                    "hi",
//                    "lol",
//                    "lmao"
//                   ];

var animalArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20];

var animal = chooseRandom(animalArray);

Bot.tweet(animal);
