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
    return earthToMercury(this.lifeExpectancy) - earthToMercury(this.years); 
  }
  
  lifeLeftVenus() {
    return earthToVenus(this.lifeExpectancy) - earthToVenus(this.years); 
  }
  
  lifeLeftMars() {
    return earthToMars(this.lifeExpectancy) - earthToMars(this.years); 
  }
  
  lifeLeftJupiter() {
    return earthToJupiter(this.lifeExpectancy) - earthToJupiter(this.years); 
  }
  
  yearsOverExpected() {
    return this.years - this.lifeExpectancy; 
  }
} 

// const lifeExpectancy = parseInt(prompt("How many Earth years do you want to live?"));
// const years = parseInt(prompt("Enter your age on Earth:"));
//  if (years > lifeExpectancy) { 
//    alert("C'mon now, thats unrealistic, you must be a zombie! You've been dead for " + yearsOverExpected(years) + " years!")
//  } else {
//  alert("Your age on Mercury is " + earthToMercury(years) + " with a life expectancy of " + earthToMercury(lifeExpectancy) + " years. " + "Your age on Venus is " + earthToVenus(years) + " with a life expectancy of " + earthToVenus(lifeExpectancy) + " years. " + "Your age on Mars is: " + earthToMars(years) + " with a life expectancy of " + earthToMars(lifeExpectancy) + " years. " + "Your age on Jupiter is: " + earthToJupiter(years) + " with a life expectancy of " + earthToJupiter(lifeExpectancy) + " years.");

// alert("You have " + lifeLeftMercury(years) + " years left to live on Mercury in Mercury years. You have " + lifeLeftVenus(years) + " years left on Venus in Venus years. You have " + lifeLeftMars(years) + " years left on Mars in Mars years. You have " + lifeLeftJupiter(years) + " years left on Jupiter. With a total of " + lifeLeftEarth(years) + " left on Earth!" );
//  };