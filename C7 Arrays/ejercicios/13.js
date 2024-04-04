function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var array = [2, 3, 4, 5, 6];
  array.forEach((num) => {
    if (num % 2 === 0){
      console.log(num);
    }
  })
}
filtrarNumerosPares()
module.exports = filtrarNumerosPares;
