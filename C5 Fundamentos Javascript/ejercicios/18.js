function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  if(num % 3 === 0){
    return "impar";
  } else {
    return "par"
  }
}

console.log(esImpar(15))
module.exports = esImpar;