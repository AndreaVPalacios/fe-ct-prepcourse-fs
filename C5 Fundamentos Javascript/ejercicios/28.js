function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:
  var nombre = "Martin"
  return "Hola " + nombre;
}
console.log(obtenerSaludo("Martin"))
module.exports = obtenerSaludo;