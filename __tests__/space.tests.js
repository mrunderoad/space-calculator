
import { earthToMercury, earthToVenus, earthToMars, earthToJupiter, lifeLeftMercury  } from './../src/js/space.js';

test('Should correctly determine the length of one mercury year', () => {
  let oneMercuryYear = 4.15;
});

test('Should correctly determine the length of one venus year', () => {
  let oneVenusYear = 1.61;
});

test('Should correctly determine the length of one Mars year', () => {
  let oneMarsYear = 1.88;
});

test('Should correctly determine the length of one Jupiter year', () => {
  let oneJupiterYear = .0084;
});

test('Should convert earth age to mercury age', () => {
  let mercuryAge = 4.16;
  let earthAge = {};
  earthAge / mercuryAge;
});

test('Should convert earth age to Venus age', () => {
  let venusAge = 1.61;
  let earthAge = {};
  earthAge / venusAge;
});

test('Should convert earth age to Mars age', () => {
  let marsAge = 1.88;
  let earthAge = {};
  earthAge / marsAge;
});

test('Should convert earth age to Jupiter age', () => {
  let jupiterAge = .0084;
  let earthAge = {};
  earthAge / jupiterAge;
});

test('Should tell user their life left on planet and on earth', () => {
  let year = {};
  let lifeExpectancy = {};
  year - lifeExpectancy;
});

test('Should tell user how may years over their expected life they are', () => {
  let year = {};
  let lifeExpectancy = {};
  lifeExpectancy - year;
});