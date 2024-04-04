function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  if ( numero === 1 ) console.log("Lunes");
  else if ( numero === 2 ) console.log("Martes");
  else if ( numero === 3 ) console.log("Miercoles");
  else if ( numero === 4 ) console.log("Jueves");
  else if ( numero === 5 ) console.log("Viernes");
  else if ( numero === 6 ) console.log("Sabado");
  else if ( numero === 7 ) console.log("Domingo");
  else console.log("No es un dia de la semana");
}
obtenerDiaSemana(9)
module.exports = obtenerDiaSemana;