function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  
  var array = [5, 10, 12, 25];
  let pos = array.indexOf(5, 10, 12, 25);

  var multiplicar = array.map((num) => {
    return num * pos;
  })
  console.log(multiplicar);
}
multiplicarElementosPorIndice()
module.exports = multiplicarElementosPorIndice;
