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

var animalArray = ["i like cat",
                   "dog is good pet",
                   "sushi fish yum",
                   "banana",
                   "horse dot com slash horsesarecool",
                   "starfish",
                   "rsjn oin oiq nroiuqg iu",
                   "DRINK MORE OVALTINE",
                   "frog blast the vent core",
                   "somebody set up us the bomb",
                   "http://bomb.com"
                  ];

var animal = chooseRandom(animalArray);

Bot.tweet(animal);
