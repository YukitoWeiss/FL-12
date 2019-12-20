let first = prompt('Please enter first value: a'),
  second = prompt('Please enter second value: b'),
  third = prompt('Please enter third value: c'),
  a = parseFloat(first),
  b = parseFloat(second),
  c = parseFloat(third),
  next = true;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  next = false;
  alert('input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
  next = false;
  alert('A triangle must have 3 sides with a positive definite length ');
}

if (a + b > c && b + c > a && a + c > b && next === true) {
  if (a === b && b === c && next === true) {
    console.log('Equilateral triangle');
  } else if ((a === b || b === c || a === c) && next === true) {
    console.log('Isosceles triangle');
  } else if (a !== b && b !== c && a !== c && next === true) {
    console.log('Scalene triangle');
  }
} else if (next === true) {
  console.log('Triangle doesn’t exist');
}