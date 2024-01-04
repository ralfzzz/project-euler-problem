function fibonacciFormula(n) {
    if (n <= 1) return n;
    return fibonacciFormula(n - 1) + fibonacciFormula(n - 2);
}

function fiboEvenSum(n) {
  var fibonacciNumber = 1;
  var i = 1;
  var sum = 0;

  while (fibonacciNumber < n){
    fibonacciNumber = fibonacciFormula(i);
    if (fibonacciNumber%2 === 0 && fibonacciNumber<=n){
      sum += fibonacciNumber;
    }
    i++;
  }
  return sum;
}

console.log(fiboEvenSum(8));