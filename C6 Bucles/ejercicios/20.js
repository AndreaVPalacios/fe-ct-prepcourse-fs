function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   
   for ( var i=0; i<n ; i++ ){
      n=n + 1;
      console.log(i) 
      if( n>100 ){
         break;
      }
   }
}
console.log(sumarHastaNConBreak(5))
module.exports = sumarHastaNConBreak;
