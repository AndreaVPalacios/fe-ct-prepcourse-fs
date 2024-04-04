function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  objetoUsuario = {posts: [likes = Number]};

  var suma = 0;

  for (var i = 0; i < objetoUsuario.posts.length; i++){
    suma = suma + objetoUsuario.post[i].likes;
  }
  return suma;
}
sumarLikesDeUsuario();

module.exports = sumarLikesDeUsuario;
