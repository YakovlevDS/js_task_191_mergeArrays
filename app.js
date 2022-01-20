
// solution 1
function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a,b)=>a-b)
}

// solution 2
const _ = require('lodash');

function mergeArrays(arr1, arr2) {
  return _.sortBy(_.union(arr1, arr2));
}


// solution 3

let mergeArrays = (a, b) => [...new Set([...a, ...b])].sort((a,b)=> a-b)
// solution 4
function mergeArrays(arr1, arr2) {
  return Array.from(new Set([...arr1,...arr2])).sort((a,b)=>a-b);
}

// solution 5
const mergeArrays = (arr1, arr2) => arr1.concat(arr2.filter((item) => arr1.indexOf(item) <0)).sort(function(a, b){return a-b});
 // solution 6
 arr1 = [1, 2, 3, 4, 5];
 arr2 = [6, 7, 8, 9, 10];
 console.log(mergeArrays(arr1, arr2));
 document.writeln(mergeArrays(arr1, arr2))

 arr5 = [1, 3, 5, 7, 9, 11, 12];
arr6 = [1, 2, 3, 4, 5, 10, 12];
console.log(mergeArrays(arr5, arr6));
document.writeln(mergeArrays(arr5, arr6))
  