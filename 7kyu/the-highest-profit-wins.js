`
Write a function that returns both the minimum and maximum number of the given 
list/array.
`
function minMax(arr) {
  const minMaxArr = [];

  const minimum = Math.min(...arr);
  const maximum = Math.max(...arr);

  minMaxArr.push(minimum, maximum);
  return minMaxArr;
}

minMax([1, 2, 3, 4, 5]);

//Short WAY
//return [Math.min(...arr,), Math.max(...arr)];