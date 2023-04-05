/**
 * Edita el archivo .js para crear el código necesario para que partiendo del array de puntuaciones propuesto se imprima por la consola el mejor y peor equipo con su total de puntos respectivo.

El resultado que tiene que aparecer en la consola al ejecutarlo debe ser exactamente igual a este: 

-> El mejor equipo es Toros Negros con un total de 28 puntos
-> El peor equipo es Ciervos Celestes con un total de 10 puntos
 */

'use strict';

// puntuaciones primera ronda

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

// Creo un array nuevo a partir del original, con el nombre de los equipos
// y el total de su puntuacion

const totalPoints = firstRound.map((equipo) => {
  // Retornamos un objeto (un equipo) con su nombre y el total de puntos
  return {
    team: equipo.team,
    totalScore: equipo.scores.reduce((acc, score) => {
      // Devolver el total de puntos
      return acc + score;
    }, 0),
  };
});

// Sacar el mejor y peor equipo
// Ordeno el array
totalPoints.sort((a, b) => a.totalScore - b.totalScore);

// El último elemento del array es el primer clasificado
console.log(
  `El mejor equipo es ${
    totalPoints[totalPoints.length - 1].team
  } con un total de ${totalPoints[totalPoints.length - 1].totalScore} puntos`
);

// Ahora que tenemos el array ordenado sabemos que el primer elemento es el último clasificado
console.log(
  `El peor equipo es ${totalPoints[0].team} con un total de ${totalPoints[0].totalScore} puntos`
);

console.log(totalPoints);
