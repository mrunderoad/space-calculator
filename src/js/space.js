export class SpaceCalculator {
  constructor(years, lifeExpectancy){
    this.years = years;
    this.lifeExpectancy = lifeExpectancy;
  }

  earthToMercury(years) {
    return years / .24; 
  }
  
  earthToVenus(years) {
    return years / .62;  
  }
  
  earthToMars(years) {
    return years / 1.88;   
  }
  
  earthToJupiter(years) {
    return years / .0084; 
  }
  
  lifeLeftEarth() {
    return this.lifeExpectancy - this.years; 
  }
  
  lifeLeftMercury() {
    return this.lifeExpectancy / .24 - this.years / .24; 
  }
  
  lifeLeftVenus() {
    return this.lifeExpectancy / .62 - this.years / .62; 
  }
  
  lifeLeftMars() {
    return this.lifeExpectancy / 1.88 - this.years / 1.88; 
  }
  
  lifeLeftJupiter() {
    return this.lifeExpectancy / .0084 - this.years / .0084; 
  }
  
  yearsOverExpected() {
    return this.years - this.lifeExpectancy; 
  }
} 

const lifeExpectancy = parseInt(prompt("How many Earth years do you want to live?"));
const years = parseInt(prompt("Enter your age on Earth:"));
 if (years > lifeExpectancy) { 
   alert("C'mon now, thats unrealistic, you must be a zombie! You've been dead for " + yearsOverExpected(this.years) + " years!")
 } else {
 alert("Your age on Mercury is " + earthToMercury(years) + " with a life expectancy of " + earthToMercury(this.lifeExpectancy) + " years. " + "Your age on Venus is " + earthToVenus(years) + " with a life expectancy of " + earthToVenus(this.lifeExpectancy) + " years. " + "Your age on Mars is: " + earthToMars(years) + " with a life expectancy of " + earthToMars(this.lifeExpectancy) + " years. " + "Your age on Jupiter is: " + earthToJupiter(years) + " with a life expectancy of " + earthToJupiter(this.lifeExpectancy) + " years.");

alert("You have " + lifeLeftMercury(this.years) + " years left to live on Mercury in Mercury years. You have " + lifeLeftVenus(this.years) + " years left on Venus in Venus years. You have " + lifeLeftMars(this.years) + " years left on Mars in Mars years. You have " + lifeLeftJupiter(this.years) + " years left on Jupiter. With a total of " + lifeLeftEarth(this.years) + " left on Earth!" );
 };