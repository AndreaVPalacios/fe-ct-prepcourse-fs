function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  if (Number.isInteger(numero)){
    return true;
  }
  return false;
}

console.log(esNumeroEntero(5));

module.exports = esNumeroEntero;