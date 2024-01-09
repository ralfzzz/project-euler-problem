function getCollections(n,incrementNumber){
    var collections = [];
    let i = 1;
  
    while(i<=n){
        let result = incrementNumber%i;
        if (result==0){
          collections.push(i);
        } else {
          collections = [];
          break;
        }
        i++;
      }
    return collections;
  }
  
  function smallestMult(n) {
    var status = false;
    var incrementNumber = 1;
  
    while(status==false){
      var collections = getCollections(n,incrementNumber);
  
      if(collections.length == n){
        status = true;
        break;
      }
  
      incrementNumber++;
    }
    // console.log(incrementNumber);
    return(incrementNumber);
  }
  
  smallestMult(5);