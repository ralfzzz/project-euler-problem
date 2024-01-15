function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  let i = 5;
  while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
      i += 6;
  }

  return true;
}

function primeSummation(n) {
var primeCheck = 1;
var sum = 0;
while(primeCheck<n){
  if(isPrime(primeCheck)){
    sum += primeCheck;
  }
  primeCheck++
}
return sum;
}

primeSummation(10);
