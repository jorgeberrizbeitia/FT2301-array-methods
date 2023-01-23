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


//  actividad 3

// Lets try and use functions now

// exercise  3: Return only the names of the restaurants 
// Note: Be careful here. 'info' is an object with a key called 'list' which is the array
 
const info = {
  list: [
    {name: 'Mirazur', owner : 'Gustavo'},
    {name: 'Noma', owner : 'Taka'},
    {name: 'Gaggan', owner : 'Alvaro'},
    {name: 'Geranium', owner : 'Gustavo'},
    {name: 'Arpège', owner : 'Luis'},    
 ]  
}


function onlyNames(arr) {

  console.log(arr)
  let newArr = arr.map( (restaurant) => {
    return restaurant.name
  } )

  return newArr

}

// const onlyNames = arr => arr.map( restaurant => restaurant.name )
// ejemplo super mega reducido en sintaxis

// test
const restaurants = onlyNames( info.list )
console.log(restaurants)
// Answer should be [ 'Mirazur', 'Noma', 'Gaggan', 'Geranium', 'Arpège']

// .filter()

const cars = [
  { brand: "Mercedes-Benz", year: 2012, weight: 0.8 },
  { brand: "Porsche", year: 2020, weight: 1.3 },
  { brand: "Bugatti", year: 2003, weight: 0.5 },
  { brand: "Volvo", year: 2010, weight: 1.9 },
  { brand: "Smart", year: 2010, weight: 0.1 },
];

// usar el filter para crear un nuevo arr 2010 en adelante

let newCars = cars.filter( ( singleCar ) => {

  // al igual que map, filter necesita un return para crear el array
  // a diferencia de map. Filter no debe retornar un valor.
  // FILTER SIEMPRE ESPERA QUE SE RETORNE UN BOOLEANO
  // si retornamos true. Incluye el elemento.
  // si retornamos false. No Incluye el elemento.

  // if (singleCar.year >= 2010) {
  //   return true // incluye el coche
  // } else {
  //   return false // no incluyas el coche
  // }

  // importante. Filter no modifica los elementos retornados.
  return singleCar.year >= 2010

} )

console.log(newCars)



// Exercise 2: From the given array of people, get the people who are allowed to consume alcoholic beverages (i.e age >= 21).
const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 21 },
  { name: "Nettie", age: 20 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];

// note that "adults" is still just a function (just a function of arrow type)
const adults = (arr) => {

  let only21Plus = arr.filter( (onePerson) => {
    return onePerson.age >= 21
  } )

  let onlyNames = only21Plus.map( (onePerson) => {
    return onePerson.name
  } )

  // return only21Plus
  return onlyNames

  // ejemplo todo en una linea encadenando metodos
  return arr.filter( (onePerson) => {
    return onePerson.age >= 21
  }).map((onePerson) => {
    return onePerson.name
  })

}

let canDrink = adults(people)
console.log(canDrink) 
//Answer should be 
/*
[
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 21 },
]
*/

//----------------------------------------------------------------------

// Bonus: Modify the above function 'adults' so that the array only includes the names of the 3 people who can drink.
// like this: ["Candice", "Tammy", "Allen"]
// you might need to do another method we learned previously.