
import { SpaceCalculator } from './../src/js/space.js';

describe('SpaceCalculator', () => {
  let spaceCalculator;
  beforeEach(()=> {
  spaceCalculator = new SpaceCalculator(30,80)
  })

  test("should create a new instance of spaceCalculator", () => {
    expect(spaceCalculator.years).toEqual(30);
    expect(spaceCalculator.lifeExpectancy).toEqual(80);
  });

    test('Should correctly convert earth years into mercury years', () => {
      expect(spaceCalculator.earthToMercury(1)).toEqual(4.166666666666667)
  });

    test('Should correctly convert earth years into venus years', () => {
      expect(spaceCalculator.earthToVenus(1)).toEqual(1.6129032258064517)
  });

  // test('Should correctly determine the length of one Mars year', () => {
  //   let oneMarsYear = 1.88;
  // });

  // test('Should correctly determine the length of one Jupiter year', () => {
  //   let oneJupiterYear = .0084;
  // });

  // test('Should convert earth age to mercury age', () => {
  //   let mercuryAge = 4.16;
  //   let earthAge = {};
  //   earthAge / mercuryAge;
  // });

  // test('Should convert earth age to Venus age', () => {
  //   let venusAge = 1.61;
  //   let earthAge = {};
  //   earthAge / venusAge;
  // });

  // test('Should convert earth age to Mars age', () => {
  //   let marsAge = 1.88;
  //   let earthAge = {};
  //   earthAge / marsAge;
  // });

  // test('Should convert earth age to Jupiter age', () => {
  //   let jupiterAge = .0084;
  //   let earthAge = {};
  //   earthAge / jupiterAge;
  // });

  // test('Should tell user their life left on planet and on earth', () => {
  //   let year = {};
  //   let lifeExpectancy = {};
  //   year - lifeExpectancy;
  // });

  // test('Should tell user how may years over their expected life they are', () => {
  //   let year = {};
  //   let lifeExpectancy = {};
  //   lifeExpectancy - year;
  // });

});