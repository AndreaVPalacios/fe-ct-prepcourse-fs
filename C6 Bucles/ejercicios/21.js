function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  while (numero && (numero & (numero - 1)) === 0){
    numero++;
    return true;
  }
  return false;
}
console.log(esPotenciaDeDos(7))
module.exports = esPotenciaDeDos;
