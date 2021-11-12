import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import __ from '/.space.js';
import './css/styles.css';

function earthToMercury(years) {
  return years / .24; {
  }
}

function earthToVenus(years) {
  return years / .62; { 
  }
}

function earthToMars(years) {
  return years / 1.88; {
  }  
}

function earthToJupiter(years) {
  return years / .0084; {    
  }
}

function lifeLeftMercury() {
  return lifeExpectancy - earthToMercury(age);
}

const lifeExpectancy = parseInt(prompt("How many Earth years do you want to live?"));
const age = parseInt(prompt("Enter your age on Earth:"));
 alert("Your age on Mercury is " + earthToMercury(years) + "! And your life expectancy on Mercury is " + earthToMercury(lifeExpectancy) + " years. "); //+ "Your age on Venus is " + earthToVenus(years) + "! And your life expectancy on Venus is " + earthToVenus(lifeExpectancy) + " years. " + "Your age on Mars is: " + earthToMars(years) + "! And your life expectancy on Mars is " + earthToMars(lifeExpectancy) + " years. " + "Your age on Jupiter is: " + earthToJupiter(years) + "! And your life expectancy on Jupiter is " + earthToJupiter(lifeExpectancy) + " years.");

alert("You have " + lifeLeftMercury(years) + " years left to live on this planet");


  





// one year on mercury is .24 earth years --- so one year on earth is 4.16 mercury years
// one year on venus is .62 earth years --- so one year on earth is 1.61 venus years
// one year on mars is 1.88 earth years --- so one year on earth is .53 mars years
// one year on jupiter is 11.86 earth years --- so one year on earth is .0084 jupiter years