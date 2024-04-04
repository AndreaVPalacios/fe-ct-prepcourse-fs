function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  var array = [8, 10, 9, 11, 16];
  array.forEach ((num) => {
    if (num > 10){
      console.log(num);
    }
  })
}
contarElementosMayoresA10()
module.exports = contarElementosMayoresA10;
