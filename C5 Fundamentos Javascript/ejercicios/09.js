function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  if (valor === null){
    console.log ( true );
  } else if (valor === undefined){
    console.log ( true );
  } else {
    console.log ( false );
  }
}
esNuloOIndefinido()
module.exports = esNuloOIndefinido;