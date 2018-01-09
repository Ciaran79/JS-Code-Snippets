
function sumFibs(num) {
   
    var previous;
    result=2;

    for (let i = 2; i < num; i++) {
      const element = i;
      if(element % 2 != 0){
        result += element + previous;
        
      }
      element = previous;
    }

    return result;
  }
  
  console.log(sumFibs(5));
  
  