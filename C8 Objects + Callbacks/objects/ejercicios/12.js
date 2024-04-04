function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:

  
  objetoMisterioso = {};
  objetoMisterioso.numeroMisterioso = 2;
  var resultado = objetoMisterioso.numeroMisterioso * 5;
  console.log(resultado);
}
multiplicarNumeroDesconocidoPorCinco();
module.exports = multiplicarNumeroDesconocidoPorCinco;
