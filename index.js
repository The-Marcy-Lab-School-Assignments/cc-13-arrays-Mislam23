//write your code here
function averageInArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum / array.length
}

console.log(averageInArray([2,2,2,2,2]))
array = [1, 2, 3, 2, 2];

function averageInArray (array) {
	sum  = 0
  for (let i = 0; i < array.length; i++) {
  sum += array[i]
  }
  return sum/array.length
}


console.log(averageInArray(array))
