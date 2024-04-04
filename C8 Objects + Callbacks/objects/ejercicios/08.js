function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  
  var kitty = {};
  kitty = { nombre: "Mishu", edad: "5 meses" };
  kitty.meow = ["Meow!"];
  console.log(kitty);
}
crearGato();

module.exports = crearGato;
