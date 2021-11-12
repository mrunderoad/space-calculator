
import Mercury from './../src/js/space.js';

test('Should correctly determine the length of one earth year compared to mercury year', () => {
  const mercury = new mercury(4.16);
  expect(earthYear).toEqual(1);
  expect(mercuryYear).toEqual(4.16)
});