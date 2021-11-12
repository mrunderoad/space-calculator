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

function lifeLeftEarth() {
  return lifeExpectancy - years;
}


function lifeLeftMercury() {
  return earthToMercury(lifeExpectancy) - earthToMercury(years);
}

function lifeLeftVenus() {
  return earthToVenus(lifeExpectancy) - earthToVenus(years);
}

function lifeLeftMars() {
  return earthToMars(lifeExpectancy) - earthToMars(years);
}

function lifeLeftJupiter() {
  return earthToJupiter(lifeExpectancy) - earthToJupiter(years);
}

const lifeExpectancy = parseInt(prompt("How many Earth years do you want to live?"));
const years = parseInt(prompt("Enter your age on Earth:"));
 alert("Your age on Mercury is " + earthToMercury(years) + " with a life expectancy of " + earthToMercury(lifeExpectancy) + " years. " + "Your age on Venus is " + earthToVenus(years) + " with a life expectancy of " + earthToVenus(lifeExpectancy) + " years. " + "Your age on Mars is: " + earthToMars(years) + " with a life expectancy of " + earthToMars(lifeExpectancy) + " years. " + "Your age on Jupiter is: " + earthToJupiter(years) + " with a life expectancy of " + earthToJupiter(lifeExpectancy) + " years.");

alert("You have " + lifeLeftMercury(years) + " years left to live on Mercury in Mercury years. You have " + lifeLeftVenus(years) + " years left on Venus in Venus years. You have " + lifeLeftMars(years) + " years left on Mars in Mars years. You have " + lifeLeftJupiter(years) + " years left on Jupiter. With a total of " + lifeLeftEarth(years) + " on Earth!" );