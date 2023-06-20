`
Sum all the numbers of a given array ( cq. list ), except the highest and the 
lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, 
even if there are more than one with the same value.
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or 
the given array is an empty list or a list with only 1 element, return 0.
`

function sumArray(arr) {
  // declare sum variable and set it to 0
  let total = 0;

  // if the array is empty or has only one value
  if (arr == null || arr.length < 2) {
    // return 0
    return 0;
  };

  // Find the highest value in the array
  const indexOfHighest = arr.indexOf(Math.max(...arr));
  // Remove the highest value from the array
  arr.splice(indexOfHighest, 1);

  // Find the lowest value in the array
  const indexOfLowest = arr.indexOf(Math.min(...arr));
  // Remove the lowest value from the array
  arr.splice(indexOfLowest, 1);

  // Loop over the remaining values in the array
  for (let i = 0; i < arr.length; i++) {
    // Add each value to the total
    total += arr[i];
  };
  
  return total;
};

console.log(sumArray([0, 1, 6, 10, 10]));
