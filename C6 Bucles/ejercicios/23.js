function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var num = 0;

  do {
    console.log("El valor de i es: " + num);
    num += 5;
  } while (num < 40);
}
console.log(doWhile(1))
module.exports = doWhile;