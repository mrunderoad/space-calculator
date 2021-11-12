export function earthToMercury(years) {
  let mercuryAge = age / .24;
}

export function earthToVenus(years) {
  let venusAge = age / .62;
}

export function earthToMars(years) {
  let marsAge = age / 1.88;
}

export function earthToJupiter(years) {
  let jupiterAge = age / .0084;
}

export function lifeLeftMercury(years) {
  return earthToMercury(lifeExpectancy) - earthToMercury(years); 
}