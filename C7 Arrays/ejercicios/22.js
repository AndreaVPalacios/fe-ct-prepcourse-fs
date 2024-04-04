function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  
  var multi = [];

  for ( var i = 0; i < 11; i++ ){
    multi.push(6 * i);
  }
  console.log(multi);
}
tablaDelSeis(2)
module.exports = tablaDelSeis;
