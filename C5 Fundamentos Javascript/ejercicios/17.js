function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  if(num % 2 === 0){
    return "par";
  } else {
    return "impar";
  }
}
console.log(esPar(7))

module.exports = esPar;
