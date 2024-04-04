function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var arrayOfNums = [2, 2]
  var suma = 0;
  
  arrayOfNums.forEach((num) => {
    suma += num;
    console.log(suma);
  })
  
}
agregarNumeros()
module.exports = agregarNumeros;
