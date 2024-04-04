function esFechaValida(fecha) {
  if (fecha === "Enero"){
    console.log ( true );
  } else if (fecha === "Febrero"){
    console.log ( true );
  } else if (fecha === "Marzo"){
    console.log ( true );
  } else if (fecha === "Abril"){
    console.log ( true );
  } else if (fecha === "Mayo"){
    console.log ( true );
  } else if (fecha === "Junio"){
    console.log ( true );
  } else if (fecha === "Julio"){
    console.log ( true );
  } else if (fecha > "31"){
    console.log ( false );
  }
}

esFechaValida("40")

module.exports = esFechaValida;