function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var resultadosTest = [100, 590];
  var acumulador = 0;

  for ( var i = 0; i > resultadosTest.length; i++ ){
    acumulador = acumulador + resultadosTest[i];
  }
  var prom = acumulador / resultadosTest.length;
  console.log(prom);
}
promedioResultadosTest()

module.exports = promedioResultadosTest;
