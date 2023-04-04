/**
 * Edita el archivo .js para crear el código necesario para que partiendo del array de puntuaciones propuesto se imprima por la consola el mejor y peor equipo con su total de puntos respectivo.

El resultado que tiene que aparecer en la consola al ejecutarlo debe ser exactamente igual a este: 

-> El mejor equipo es Toros Negros con un total de 28 puntos
-> El peor equipo es Ciervos Celestes con un total de 10 puntos
 */

const firstRound = [
  { team: 'Toros Negros', scores: [1, 3, 4, 2, 10, 8] },
  { team: 'Águilas Plateadas', scores: [5, 8, 3, 2, 5, 3] },
  { team: 'Leones Carmesí', scores: [5, 4, 3, 1, 2, 3, 4] },
  { team: 'Rosas Azules', scores: [2, 1, 3, 1, 4, 3, 4] },
  { team: 'Mantis Verdes', scores: [1, 4, 5, 1, 3] },
  { team: 'Ciervos Celestes', scores: [3, 5, 1, 1] },
  { team: 'Pavos Reales Coral', scores: [2, 3, 2, 1, 4, 3] },
  { team: 'Orcas Moradas', scores: [2, 3, 3, 4] },
];
let puntuaciones = [];

for (const team of firstRound) {
  const sumScore = team.scores.reduce((acc, number) => {
    return acc + number;
  }, 0);
  puntuaciones.push(Number(sumScore));
}

let mejorPuntuacion = Math.max(...puntuaciones);
let peorPuntuacion = Math.min(...puntuaciones);

for (const equipo of firstRound) {
  const puntosTotales = equipo.scores.reduce((acc, score) => {
    return acc + score;
  }, 0);

  if (mejorPuntuacion === puntosTotales) {
    console.log(
      'El mejor equipo es ' +
        equipo.team +
        ' con un total de ' +
        puntosTotales +
        ' puntos'
    );
  }

  if (peorPuntuacion === puntosTotales) {
    console.log(
      'El peor equipo es ' +
        equipo.team +
        ' con un total de ' +
        puntosTotales +
        ' puntos'
    );
  }
}
