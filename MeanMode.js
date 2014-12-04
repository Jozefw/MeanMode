function MeanMode(arr) { 
console.log(arr);
 var sum = 0;
 var result = 0;
  for (var i = 0; i< arr.length; i++) {
    sum = sum + arr[i];
    console.log("inside " + sum);
  }
  var avg = sum/arr.length;
  console.log(avg);
  var middle = parseInt((arr.length/2).toFixed(0));
  console.log(typeof middle);
  if (middle === avg){
    result = 1;
  }
  console.log(result);
  return result;
 }
 arr = [1,2,3]; 
MeanMode(arr);