function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if ( num >= 100 && num <= 999) console.log(true);
  else console.log(false);
}
tieneTresDigitos(99)
module.exports = tieneTresDigitos;
