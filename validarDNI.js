/**
 * Crea una funcón que reciba un DNI y lo valide.

El Documento Nacional de Identidad de España (DNI) es el documento de identidad que se expide en España, cada DNI tiene un identificador único compuesto por un número de 8 cifras y una letra, por ejemplo: 99999999-R

¿Sabías que la letra del DNI es un sistema de validación, ya que se obtiene a partir del número mediante un sencillo algoritmo?

Para obtener la letra correspondiente a un número de DNI hay que obtener el resto (en la documentación de JavaScript puedes buscar el operador aritmético para calcular el resto)** **de la división del número entre 23. Ese resto será un número entre 0 y 22. Si usamos ese número como índice en el siguiente Array la letra será la correspondiente a ese índice:
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
  'E',
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
