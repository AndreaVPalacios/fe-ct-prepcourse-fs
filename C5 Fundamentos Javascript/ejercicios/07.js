function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  
  var num = 0;
  var boolean = true || false;

  if ( valor == "" ){
    console.log("string");
  } if ( valor == num ){
    console.log("Number");
  } if ( valor == boolean ){
    console.log("boolean");
  } 
}
console.log(esTipoDato(true))
module.exports = esTipoDato;