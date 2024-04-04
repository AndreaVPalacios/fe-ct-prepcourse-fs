function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var array = [100, 150, 200, 201, 199];
  let pos = array.indexOf(200);
  console.log(pos);
}
encontrarIndiceMayor()
module.exports = encontrarIndiceMayor;
