let first = prompt('Please enter first value: a'),
  second = prompt('Please enter second value: b'),
  third = prompt('Please enter third value: c'),
  a = parseFloat(first),
  b = parseFloat(second),
  c = parseFloat(third),
  d = Math.pow(b, 2) - 4 * a * c,
  next = true,
  x1,
  x2;

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || b === 0 || c === 0) {
  next = false;
  console.log('Invalid input data');
}

if (d > 0 && next === true) {
  x1 = (-b + Math.sqrt(d)) / 2 * a;
  x2 = (-b - Math.sqrt(d)) / 2 * a;
  console.log(`x1 = ${x1}, x2 = ${x2}`);
} else if (d === 0 && next === true) {
  x1 = (-b + Math.sqrt(d)) / 2 * a;
  console.log(`x = ${x1}`);
} else if (next === true) {
  console.log('No solution');
}
