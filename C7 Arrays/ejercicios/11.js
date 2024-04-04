function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  var array = [1, 2, 3, 4, 5];
  var duplicar = array.map((num) => {
    return num * 2;
  })
  console.log(duplicar);
}
duplicarElementos()
module.exports = duplicarElementos;
