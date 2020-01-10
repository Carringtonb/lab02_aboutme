'use strict';

function nameOfCustomer(){
  var customerName = prompt('What is your name?');
  alert('Hello ' + customerName + ' nice to meet you! Welcome to my site.');
}
nameOfCustomer();

var correct = 0;

function question1(){
  var childhood = prompt('Did I grow up in Seattle?');
  if(childhood.toLowerCase() === 'no'){
    alert('You are correct');
    correct++;
  }else{
    alert('You are incorrect');
  }}

question1();
//console.log(childhood);
function question2(){
  var job = prompt('Have I worked in tech before?');
  if(job.toUpperCase() === 'NO'){
    alert('You are correct');
    correct++;
  }else{
    alert('You are incorrect');
  }}

question2();
//console.log(job);

function question3(){
  var age = prompt('Am I 26 years of age?');
  if(age.toLowerCase() === 'yes'){
    alert('You are correct');
    correct++;
  }else{
    alert('You are incorrect');
  }}

question3();
//console.log(age);

function question4(){
  var school = prompt('Did I attend College?');
  if(school.toLowerCase() === 'yes'){
    alert('You are correct');
    correct++;
  }else{
    alert('You are incorrect');
  }}

question4();

//console.log(school);

function question5(){
  var employer = prompt('Is my ideal employer Lockheed?');
  if(employer.toUpperCase() === 'YES'){
    alert('You are correct');
    correct++;
  }else{
    alert('You are incorrect');
  }}

question5();
//console.log(employer);

function question6(){
  var guess = prompt('Guess a number between 1 and 10');
  var numGuess = Number(guess);
  var answer = 8;

  for (var i = 0; i < 4; i++) {
    if (answer === numGuess){
      alert('That is correct!');
      correct++;
      break;
    }else if (numGuess < answer){
      numGuess = parseInt(prompt('Too Low, guess again'));
    }else
      numGuess = parseInt(prompt('That is too high, guess again!'));
  }
  alert('The correct answer was 8!');
}

question6();
//var bigGuess = prompt('Can you guess one of my favorite sports?');

function question7(){
  var favSport = ['football', 'lacrosse', 'mma', 'soccer', 'boxing'];

  for(var x = 0; x < 6; x++ ){
    var bigGuess = prompt('Can you guess one of my favorite sports?');
    if (favSport.includes(bigGuess.toLowerCase)){
      alert('You are correct!');
      correct++;
      break;
    }else {
      alert('Sorry, please try again');
    }
  }}

question7();
// Morgan helped me immensely on this.

alert('You got ' + correct + '/7');
