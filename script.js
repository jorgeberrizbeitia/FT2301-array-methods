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

  // el forEach nunca espera un return 
  // no hace falta return en forEach

} )

console.log(algo) // undefined
// no retorna nada, solo hace una ejecucion sobre cada elemento del array



// .map()

let algoMap = randomNumbers.map( (element, index) => {

  console.log(".map por cada elemento", element, index)

  // siempre requiere un return
  // crear un nuevo array con los valores retornados

  // if (element > 10) {
    return `El valor es: ${element * 100}`
  // }

} )

console.log(algoMap)

// el nuevo array SIEMPRE va a tener la misma cantidad de elementos que el arr original


// creamos una funcion que reciba un array de numeros y cree un nuevo array donde los valores sean string

function numbersAsString(arrNum) {

  // crea nuevo array de strings
  let newArr = arrNum.map( (element, index) => {
    // retornar lo que será cada elemento del nuevo arr
    return element.toString()
  } )

  // console.log(newArr)
  return newArr

}

console.log( numbersAsString(randomNumbers) )
console.log( numbersAsString([1, 2, 3]) )