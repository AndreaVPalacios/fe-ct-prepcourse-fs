function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:
  if(num < 90){
    return true;
  }
  return false;
}
console.log(menosQueNoventa(91))
module.exports = menosQueNoventa;