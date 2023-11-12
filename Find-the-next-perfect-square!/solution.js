function findNextSquare(sq) {
  const squareNumber = Math.sqrt(sq);

  if (Number.isInteger(squareNumber)) {
    let nextSquarePerfect = sq + 1;

    while (!Number.isInteger(Math.sqrt(nextSquarePerfect))) {
      nextSquarePerfect++;
    }

    return nextSquarePerfect;
  } else {
    return -1;
  }
}

console.log(findNextSquare(121));
