`
Create a function that takes an integer as an argument and returns "Even" for 
even numbers or "Odd" for odd numbers.
`

function even_or_odd(number) {
  const result = number % 2;

  if (result === 0) {
    return "Even";
  } else {
    return "Odd";
  };
};

console.log(even_or_odd(10));
