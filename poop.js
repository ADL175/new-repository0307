"use strict";

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

var userMovie = prompt('Guess my favorite television show!');
console.log('movie' + ":" + userMovie);
if (userMovie.toLowerCase () === 'stranger things'){
  alert('Wow! You\'re totally right, I love Stranger Things!');
} else {
  alert('C\'mon, no way, Stranger Things on Netflix is the best show!');
}

var userCar = prompt('Guess the make of truck I drive!');
console.log('car' + ":" + userCar);
if (userCar.toLowerCase () === 'nissan'){
  alert('Wow, you\'re right! I drive a Nissan Titan');
} else {
  alert('No way! I don\'t drive a ' + userCar + '!');
}

var userGun = prompt('I am a firearms enthusiast, guess what my favorite gun brand is!');
console.log('gun' + ":" + userGun);
if (userGun.toLowerCase () === 'glock'){
  alert('Wow, you\'re right! I love Glocks! They are the Toyota Camry of the gun world, ugly and reliable.');
} else {
  alert('No way! I don\'t like the ' + userGun + '!');
}

var userComputer = prompt('Guess what computer brand I like!');
console.log('computer' + ":" + userComputer);
if (userComputer.toLowerCase () === 'apple'){
  alert('Wow, you\'re right! I love the Apple Macbooks!');
} else {
  alert('No way! I don\'t like ' + userComputer + '!');
}

var name= prompt("Okay, now tell me about you. What's your name?");

function greeting () {
  alert("Good to meet you " + name + "!");
  console.log('name:' + name);
}
greeting();

function eat () {
  var food= prompt("Second, what do you like to eat?");
  alert("Interesting! I enjoy eating " + food + " too! Last time I ate that, I was in " + food + "ville!");
  console.log('food:' + food);

}
eat();

function restaurant () {
  var place= prompt("What restaurant do you like to eat at?");
  alert("Yuck, I hate eating at " + place + "!");
  console.log('place:' + place);
}

restaurant();

function car () {
  var drive= prompt("What kind of car do you drive?");
  alert("I drive a Nissan, but I like the " + drive + " too!");
  console.log('drive:' + drive);

}
car();
