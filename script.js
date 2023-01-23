console.log("probando")

// .forEach()
// .todos los metodos que veremos hoy, aceptan una funcion como argumento


let randomNumbers = [4, 8, 15, 16, 23, 42];


// hacer una ejecucion por cada numero del array

let algo = randomNumbers.forEach( (element, index) => {
  console.log("ejecutando por cada elemento", element, index)

  if (element === 42) {
    console.log("la respuesta a la vida y a todo")
  }

} )

console.log(algo) // undefined
// no retorna nada, solo hace una ejecucion sobre cada elemento del array

