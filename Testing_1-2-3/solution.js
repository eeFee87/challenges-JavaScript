const miArray = ['a', 'b', 'c'];

function number(array) {
  return array.map((item, index) => index + 1 + ': ' + item);
}

console.log(number(miArray));
