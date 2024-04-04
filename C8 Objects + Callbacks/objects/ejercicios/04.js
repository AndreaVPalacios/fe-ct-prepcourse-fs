function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:

   objeto = { pais: "EEUU", capital: "Washington DC", idioma: "Ingles"};
   propiedad = objeto.hasOwnProperty("comida");
   console.log(propiedad); 
}
verificarPropiedad();
module.exports = verificarPropiedad;
