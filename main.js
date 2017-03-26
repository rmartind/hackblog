var text = "car";
var number = 2323;
var arr = [1,2,3,4,5, number];
var textArr = ['ronald','claudia', text];

var arr = [1,2,3,4,5];
arr[0];
arr[1];
arr[2];
arr[3];

function myFunction(arr) {
  var i = 0;
  var sum = 0;
  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

var totalSum = myFunction(arr);
