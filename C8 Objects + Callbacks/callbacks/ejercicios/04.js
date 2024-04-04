function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:

   arrayOfNumbers = [1, 2, 3, 4, 5];

   for (var i = 0; i <= arrayOfNumbers.length; i++){
      var numero = arrayOfNumbers[i];
      var suma =+ numero;
      cb(suma);
   }
}
sumarArray();
module.exports = sumarArray;
