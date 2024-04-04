function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  if ( idioma === "aleman") console.log("Guten Tag!");
  else if ( idioma === "mandarin") console.log("Ni Hao");
  else if ( idioma === "ingles") console.log("Hello!");
  else console.log("Hola!");
}
saludo("ingles")
module.exports = saludo;
