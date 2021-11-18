
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
    expect(spaceCalculator.earthToMercury(1)).toEqual(4.166666666666667);
  });

  test('Should correctly convert earth years into venus years', () => {
    expect(spaceCalculator.earthToVenus(1)).toEqual(1.6129032258064517);
  });

  test('Should correctly convert earth years to mars years', () => {
    expect(spaceCalculator.earthToMars(1)).toEqual(0.5319148936170213);
  });

  test('Should correctly convert earth years into Jupiter years', () => {
    expect(spaceCalculator.earthToJupiter(1)).toEqual(119.04761904761905);
  });

  test('SHould correctly get the users life left on Earth', () => {
    expect(spaceCalculator.lifeLeftEarth(80,30)).toEqual(50);
  });

  test('Should tell user how many mercury years they have left to live', () => {
    expect(spaceCalculator.lifeLeftMercury(80,30)).toEqual(208.33333333333337);
  });

  test('Should tell user how many venus years they have left to live', () => {
    expect(spaceCalculator.lifeLeftVenus(80,30)).toEqual(80.64516129032258);
  });

  test('Should tell user how many mars years they have left to live', () => {
    expect(spaceCalculator.lifeLeftMars(80,30)).toEqual(26.595744680851062)
  })

});