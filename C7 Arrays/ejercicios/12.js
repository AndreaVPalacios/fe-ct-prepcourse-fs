function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  
  var array = ["sol", "luna", "marte", "jupiter"];
  array[3] = array[3].toUpperCase();
  array[0] = array[0].toUpperCase();
  array[1] = array[1].toUpperCase();
  array[2] = array[2].toUpperCase();
  console.log(array)

}
convertirStringAMayusculas()
module.exports = convertirStringAMayusculas;
