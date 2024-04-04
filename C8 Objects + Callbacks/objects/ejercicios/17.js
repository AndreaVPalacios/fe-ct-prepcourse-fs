function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:

  objetoUsuario = { password: "1234" };
  objetoUsuario.nuevaPassword = ["4321"];
  objetoUsuario.password = nuevaPassword;
  console.log(objetoUsuario.nuevaPassword);
}
actualizarPassword();
module.exports = actualizarPassword;
