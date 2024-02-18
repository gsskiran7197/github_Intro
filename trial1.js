let array =[1,2,3,4,5,6];

let outputArray=array.map(function(a,b){
  console.log(b);           // a is pointing the array values and b their index.
  return a*2;
});

console.log(outputArray);
