function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  objetoUsuario = { email: "andrei123@emailcom" };
  var tienePropiedad = objetoUsuario.hasOwnProperty("name");
  console.log(tienePropiedad);
}
tieneEmail();
module.exports = tieneEmail;
