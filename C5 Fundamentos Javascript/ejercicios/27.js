function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
  var nombre = "Soy "
  var apellido = "Henry"
  return nombre + apellido;
}
console.log(combinarNombres("Soy", "Henry"))

module.exports = combinarNombres;
