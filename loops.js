function forLoop(arr){
  for (let i = 1; i<26; i++){
    if (i===1){
      arr.push(`I am 1 strange loop.`);
    } else {
      arr.push(`I am ${i} strange loops`);
    }
  }
  return arr;
}

function whileLoop(n){
  while (n>=0){
    console.log(n);
    n--;
  }
  return "done";
}


var i =0;

function doWhileLoop(arr){
  do {
    arr.pop();
  } while (arr.length>0 && incrementVariable()){}
}

function incrementVariable(){
  i = i+1;
}