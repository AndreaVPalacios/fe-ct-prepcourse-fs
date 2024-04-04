function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero == 0 || numero == 1 || numero == 4){
    return false;
  }
    for (let x = 2; x < numero / 2; x ++){
      if(numero % x == 0);
      return false;
    }
  return true;
}
console.log(esNumeroPrimo(6))
module.exports = esNumeroPrimo;
