function multiplesOf3Or5(number) {
    var sum = 0;
    var devideBy3;
    var devideBy5;
    for(let i=1; i<number; i++){
      devideBy3 = i%3;
      devideBy5 = i%5;
      if(devideBy3 == 0 || devideBy5 == 0){
        sum += i;
      }
    }
    return sum;
  }
  
  console.log(multiplesOf3Or5(10));