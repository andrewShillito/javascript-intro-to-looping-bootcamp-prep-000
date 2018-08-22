function forLoop(arr){
  for (let i = 0; i<25; i++){
    if (i===1){
      arr.push(`I am 1 strange loop.`);
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}

function whileLoop(n){
  while (n>0){
    console.log(n);
    n--;
  }
  return "done";
}


function doWhileLoop(arr){
  var x = 0;
  do {
    arr.pop();
    incrementVariable(x);
  } while (arr.length>0 && incrementVariable(x)){
    arr.pop();
  }
}

function incrementVariable(x){
  x = x+1;
  return x;
}