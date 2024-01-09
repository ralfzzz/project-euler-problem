function getSquareOfSumNNumber(n){
    let i = 1;
    var sumNumber = 0;
    while(i<=n){
      sumNumber += i;
      i++;
    }
    var squareOfSumNumber = sumNumber**2;
    return squareOfSumNumber;
  }
  
  function getSumOfSquareNNumber(n){
    let i = 1;
    var sumOfSquareNumber = 0;
    while(i<=n){
      sumOfSquareNumber += (i**2);
      i++;
    }
    return sumOfSquareNumber;
  }
  
  
  function sumSquareDifference(n) {
    var squareOfSumNNumber = getSquareOfSumNNumber(n);
    var sumOfSquareNNumber = getSumOfSquareNNumber(n);
    var differenceNumber = squareOfSumNNumber-sumOfSquareNNumber;
    return differenceNumber;
  }
  
  console.log(sumSquareDifference(100));
  