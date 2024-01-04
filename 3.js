function largestPrimeFactor(number) {
    var factors = [];
    var primeFactorsCount = [];
    var primeFactors = [];
    for (let i=2;i<=number;i++){
      if (number%i == 0){
          factors.push(i);
      }
    } 
  
    factors.map((factor) => {
      for (let i=2;i<factor;i++){
      if (factor%i == 0){
          primeFactorsCount.push(factor);
        }
      }
  
      if (primeFactorsCount.length < 1){
        primeFactors.push(factor);
      }
      primeFactorsCount = [];
    });
  
    return primeFactors[primeFactors.length-1];
  }
  
  largestPrimeFactor(13195);
  