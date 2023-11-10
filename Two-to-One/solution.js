function longest(s1, s2) {
  const combineArray = [...s1, ...s2].sort();
  const uniqueSet = new Set(combineArray);
  const result = Array.from(uniqueSet).join('');
  return result;
}

const a = 'loopingisfunbutdangerous';
const b = 'lessdangerousthancoding';

console.log(longest(a, b));
