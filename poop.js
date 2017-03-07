"use strict";

confirm ("Before I Introduce myself, can you tell me a little about you?");

var name= prompt("First, tell me about you. What's your name?");

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
  var place= prompt("Where do you like to eat?");
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

var userAnswer = prompt('Yes or No?');
if (userAnswer.toLowerCase () === 'yes' || userAnswer.toLowerCase() === 'y'){
  alert('The user said yes');
} else if (userAnswer.toLowerCase() === 'no' || userAnswer.toLowerCase() === 'n') {
  alert('The user said fuck you');
} else {
  alert('You\'re a moron');
}
