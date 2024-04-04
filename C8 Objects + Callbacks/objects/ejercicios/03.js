const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:

  //objeto[propiedad] = valor
  //return objeto;

  objeto = {};
  objeto.propiedad = {edad: 21, nombre: "Andrea"};  
  return propiedad;
};


module.exports = agregarNuevaPropiedad;
