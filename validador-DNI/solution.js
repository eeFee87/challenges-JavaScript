/**
 * 


 */

const letras = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E'
];

function validateDNI(dni) {
  let numeros = Number(dni.slice(0, 8));
  let guion = dni.slice(8, 9);
  let letraPosicion = dni.slice(9, 10);
  let letraPosicionNumber = Number(letraPosicion);
  let calculoLetra = numeros % 23;
  let extraerLetra = letras[calculoLetra];
  if (dni.length !== 10) {
    throw 'El dni no tiene los 10 caracteres (8 números guión y letra)';
  } else {
    if (isNaN(numeros)) {
      throw `Introduce 8 números`;
    } else if (guion !== '-') {
      throw `Introduce el guion entre el texto y los números`;
    } else if (!isNaN(letraPosicionNumber)) {
      throw 'Introduce una letra a continuacion del guión';
    } else if (letraPosicion.toUpperCase() !== extraerLetra) {
      throw `La letra no es correcta, la letra correcta es ${extraerLetra}`;
    } else {
      console.log(`Dni correcto`);
    }
  }
}
try {
  validateDNI('00000000-T');
} catch (error) {
  console.error(error);
}
