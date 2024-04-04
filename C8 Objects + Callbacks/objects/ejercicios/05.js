const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:

  objeto = { a: "fresas", b: "tomates", c: "platanos"};
  var todo = Object.keys(objeto);
  console.log(todo); 
};
listarPropiedades();
module.exports = listarPropiedades;
