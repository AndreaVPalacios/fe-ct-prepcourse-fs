function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  for ( var i = 0; i < array.length; i++ ){
    if (array[0] !== array[i]){
      console.log(false);
    }
  }
  console.log(true);
}
todosIguales(100)
todosIguales(1)
module.exports = todosIguales;
