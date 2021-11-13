export function earthToMercury(years) {
  return years / .24; {
  }
}

export function earthToVenus(years) {
  return years / .62; { 
  }
}

export function earthToMars(years) {
  return years / 1.88; {
  }  
}

export function earthToJupiter(years) {
  return years / .0084; {    
  }
}

function lifeLeftEarth() {
  return lifeExpectancy - years; {
  }
}

export function lifeLeftMercury() {
  return earthToMercury(lifeExpectancy) - earthToMercury(years); {
  }
}

function lifeLeftVenus() {
  return earthToVenus(lifeExpectancy) - earthToVenus(years); {
  }
}

function lifeLeftMars() {
  return earthToMars(lifeExpectancy) - earthToMars(years); {
  }
}

function lifeLeftJupiter() {
  return earthToJupiter(lifeExpectancy) - earthToJupiter(years); {
  }
}

const lifeExpectancy = parseInt(prompt("How many Earth years do you want to live?"));
const years = parseInt(prompt("Enter your age on Earth:"));
 if (years > lifeExpectancy){
   alert("C'mon now, thats unrealistic, you must be a zombie!")
 } else {
 alert("Your age on Mercury is " + earthToMercury(years) + " with a life expectancy of " + earthToMercury(lifeExpectancy) + " years. " + "Your age on Venus is " + earthToVenus(years) + " with a life expectancy of " + earthToVenus(lifeExpectancy) + " years. " + "Your age on Mars is: " + earthToMars(years) + " with a life expectancy of " + earthToMars(lifeExpectancy) + " years. " + "Your age on Jupiter is: " + earthToJupiter(years) + " with a life expectancy of " + earthToJupiter(lifeExpectancy) + " years.");

alert("You have " + lifeLeftMercury(years) + " years left to live on Mercury in Mercury years. You have " + lifeLeftVenus(years) + " years left on Venus in Venus years. You have " + lifeLeftMars(years) + " years left on Mars in Mars years. You have " + lifeLeftJupiter(years) + " years left on Jupiter. With a total of " + lifeLeftEarth(years) + " left on Earth!" );
 }