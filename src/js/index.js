import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import __ from '/.space.js';
import './css/styles.css';

function earthToMercury(age) {
  return age / .24; {
  }
}

function earthToVenus(age) {
  return age / .62; { 
  }
}

function earthToMars(age) {
  return age / 1.88; {
  }  
}

function earthToJupiter(age) {
  return age / .0084; {    
  }
}


const lifeExpectancy = parseInt(prompt("How many Earth years do you want to live?"))
const age = parseInt(prompt("Enter your age on Earth:"));
alert("Your age on Mercury is " + earthToMercury(age) + "! And your life expectancy is " + earthToMercury(lifeExpectancy) + " years.");
alert("Your age on Venus is " + earthToVenus(age) + "! And your life expectancy is " + earthToVenus(lifeExpectancy) + " years.");
alert("Your age on Mars is: " + earthToMars(age) + "! And your life expectancy is " + earthToMars(lifeExpectancy) + " years.");
alert("Your age on Jupiter is: " + earthToJupiter(age) + "! And your life expectancy is " + earthToJupiter(lifeExpectancy) + " years.");


  





// one year on mercury is .24 earth years --- so one year on earth is 4.16 mercury years
// one year on venus is .62 earth years --- so one year on earth is 1.61 venus years
// one year on mars is 1.88 earth years --- so one year on earth is .53 mars years
// one year on jupiter is 11.86 earth years --- so one year on earth is .0084 jupiter years