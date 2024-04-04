const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  objeto = { 1: "one", 2: "two", 3: "three", 4: "four" };
  for ( var prop in objeto ){
    console.log("Este es el valor: " + objeto[prop]);
  }
};
contarPropiedades();
module.exports = contarPropiedades;
