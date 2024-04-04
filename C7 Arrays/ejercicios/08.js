function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   
   var array = [1, 2, 3, 4];
   array.forEach((num) => {
      if (num <= 4){
         console.log(num)
      }
   })
   return num - 1
}
encontrarElemento(5)
module.exports = encontrarElemento;
