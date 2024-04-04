function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  var total = 1;

  if ( arguments.length === 0 ){
    return 0;
  } else if ( arguments.length === 1 ){
    return arguments[0];
  } else {
    for ( var i = 0; i < arguments.length; i++ ){
      total = total * arguments[i];
    }
    console.log(total);
  }
}
multiplicarArgumentos(5)
multiplicarArgumentos(2)
module.exports = multiplicarArgumentos;
