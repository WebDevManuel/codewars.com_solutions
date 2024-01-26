`
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
`
/*
Use the split() method to return a new array,
the reverse() method to reverse the new created array
the join() method to join all elements of the array into a string.
*/

function solution(str) {
  return str.split('').reverse().join('');
}

console.log(solution("reverse strings"));