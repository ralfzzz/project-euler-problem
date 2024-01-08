function generateMarginNumber(input) {
    if (input < 1) {
        return "Input must be more than 0!";
    } else {
        let base = 1;
        for (let i = 1; i < (input+1); i++) {
            base *= 10;
        }
        return base;
    }
}

function largestPalindromeProduct(n) {
  let marginMax = generateMarginNumber(n);
  let marginMin = generateMarginNumber(n)-generateMarginNumber(n-1);
  let times = marginMax-1;
  while(times>marginMin){
      for(let i=(marginMax-1) ; i>(marginMin+1); i--){
        var numberForCheck = times * i;
        var numStr = numberForCheck.toString(); 
        var result = numStr.split('').reverse().join('');
        if (numStr === result){
          var largestPalindrome = numberForCheck;
          break;
        }
      }
      if(largestPalindrome){
        break;
      }
      times--;
  }
  return largestPalindrome;
}

console.log(largestPalindromeProduct(6));


