function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  objeto = { propiedad };
  var tienePropiedad = objeto.hasOwnProperty("propiedad");
  console.log(tienePropiedad);
}
tienePropiedad();
module.exports = tienePropiedad;
