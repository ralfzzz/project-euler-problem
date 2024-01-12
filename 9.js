function specialPythagoreanTriplet(limit) {
  // let sumOfabc = n;
  let triplets = [];

  for (let a = 1; a <= limit; a++) {
    for (let b = a + 1; b <= limit; b++) {
      const c = Math.sqrt(a * a + b * b);

      if (c <= limit && Number.isInteger(c)) {
        if(a+b+c == limit) {
          triplets.push(a, b, c);
          break;
        }
      }
    }
  }

  return triplets[0]*triplets[1]*triplets[2];

//  return true;
}

specialPythagoreanTriplet(1000);
