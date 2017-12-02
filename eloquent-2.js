Looping a triangle

var pound = '#';
for(var i=1;i<=7;i++){
    console.log(pound);
    pound += "#";
};


FizzBuzz

for(var i = 1; i<=100; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }
  else if(i % 3 === 0){
    console.log("Fizz");
  }
  else if(i % 5 === 0){
    console.log("Buzz");
  }
  else
  console.log(i);
}


Chess board

var board = "";
var size = 8;
for(var i=0; i<size; i++){
  for(var j=0; j<size; j++)  {
    if(j % 2 ===0){
      board += " ";
    }
    else {
      board +="#";
    }
  }
  board += "\n";
}
console.log(board);
