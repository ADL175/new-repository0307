"use strict";
var name= prompt("Hello, what's your name?");

function greeting () {
  alert("Good to meet you " + name + "!");
  console.log('name:' + name);
}
greeting();

confirm ("Let's play a guessing game!");

var userFood = prompt('Am I a vegetarian?');
console.log('food' + ":" + userFood);
if (userFood.toLowerCase () === 'yes' || userFood.toLowerCase() === 'y'){
  alert('ROFLOL! Have you seen me?! No way. Omnivore.');
} else if (userFood.toLowerCase() === 'no' || userFood.toLowerCase() === 'n') {
  alert('You are correct, I eat everything!');
} else {
  alert('You\'re silly, type yes or no');
}

var userOne = prompt('Do I like Indian food?');
console.log('indian' + ":" + userOne);
if (userOne.toLowerCase () === 'yes' || userOne.toLowerCase() === 'y'){
  alert('YES! I love Indian food!');
} else if (userOne.toLowerCase() === 'no' || userOne.toLowerCase() === 'n') {
  alert('Wrong! I love Indian food!');
} else {
  alert('You\'re silly, type yes or no');
}

var userMovie = prompt('Is my favorite TV show Stranger Things?');
console.log('movie' + ":" + userMovie);
if (userMovie.toLowerCase () === 'yes' || userMovie.toLowerCase() === 'y'){
  alert('Yes, I love Stranger Things');
} else if (userMovie.toLowerCase() === 'no' || userMovie.toLowerCase === 'n'){
  alert('What? I love the television show!');
} else {
  alert('You\'re silly, type yes or no');
}

var readMind = prompt('Can I read minds?');
console.log('mind' + ":" + readMind);
if (readMind.toLowerCase () === 'yes' || readMind.toLowerCase() === 'y'){
  alert('ROFLOL! No, I cannot');
} else if (readMind.toLowerCase() === 'no' || readMind.toLowerCase() === 'n') {
  alert('You are correct, I can\'t read minds');
} else {
  alert('You\'re silly, type yes or no');
}

var longWalks = prompt('Do I like long walks on the beach?');
console.log('walks' + ":" + longWalks);
if (longWalks.toLowerCase () === 'yes' || longWalks.toLowerCase() === 'y'){
  alert('ROFLOL! No, I like to drive though!');
} else if (longWalks.toLowerCase() === 'no' || longWalks.toLowerCase() === 'n') {
  alert('You are correct, I like to drive instead!');
} else {
  alert('You\'re silly, type yes or no');
};
