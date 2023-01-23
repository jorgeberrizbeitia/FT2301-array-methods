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

// a veces sabemos que solo hay un elemento con esa condicion.
// queremos el primer elemento que cumpla condicion.

// .find() => similar a filter pero devuelve el primer elemento que cumpla la condicion

let firstAdult = people.find( (onePerson) => {
  return onePerson.age >= 21 // retorna el PRIMERT elemento que cumpla la condicion
} )

console.log(firstAdult)




// .reduce()

let someNums = [ 1, 2, 10, 20, 25 ];

// 1. accumulator es donde se van almacenando los resultados de esa suma/multiplicacion/etc
// array.reduce( (acumulador, elemento) => {

//   return // operacio a realizar entre el acc y el elemento

// }, valorInicialAcumulador )


// quiero sumar todos los numeros del array
let result = someNums.reduce( (acumulador, elemento) => {
  console.log(acumulador, elemento)
  return acumulador * elemento
}, 1 )

console.log(result)



let personArr = [
  { name: "Jorge", candy: 21 },
  { name: "Caro", candy: 10 },
  { name: "Adria", candy: 24 },
  { name: "Ruth", candy: "10" }
]


// sumar la cantidad de caramelitos de todos los usuarios

let total = personArr.reduce( (acc, onePerson) => {
  // console.log(acc, onePerson)
  // return acc + onePerson.candy
  if (onePerson.candy !== undefined) {
    return acc + Number(onePerson.candy)
  } else {
    return acc
  }
  // reduce siempre debe retornar algo, si no aplica la operacion, retornar solo el acumulador

}, 0 )

console.log(total)

// para forzar un string a ser numero
// parseInt() o parseFloat()
// Number()
// agregar + delante de un string


// usar reduce para concatenar strings

let allNames = personArr.reduce((acc, elem, index) => {
  return acc + index + "." + elem.name + ", "
}, "" ) // acc empieza string vacio

console.log(allNames)


// exercise 2: Given a menu of foods and their calories, 
// return the AVERAGE NUMBER of calories as a NUMBER and rounded to TWO DECIMALS for the entire list from the function
// the function must return null if the array is empty
// Note: Some elements don't have any calories, skip them in your reduce callback
// HINT: First calculate the total with .reduce . Then calculate the average
const menu = [
  { name: 'Carrots', calories: 150.45 },
  { name: 'Steak'},
  { name: 'Broccoli', calories: 120.2342 },
  { name: 'Chicken', calories: 250.6523 },
  { name: 'Pizza', calories: 520.124 }
];

// again... just an arrow function below.
const calAvgCalories = (arr) => {

  if (arr.length === 0) {
    return 0;
  }

  let total = arr.reduce((acc, food) => {
    if (food.calories !== undefined) {
      return acc + food.calories
    } else {
      return acc
    }
  }, 0)

  let avg = total / arr.length
  let twoDigits = avg.toFixed(2) 
  // toFixed convierte un numero a string con x cantidad de decimales 
  console.log(twoDigits)
  return Number(twoDigits)

}

//Invoking and running the function
let output1 = calAvgCalories(menu)
console.log(output1) //Answer should be 208.29 

let output2 = calAvgCalories([])
console.log(output2) //Answer should be 0

//-------------------------------------------------------

// BONUS: Manually modify the 'menu' array so all calory properties are strings instead of numbers...
// ... then Refactor your above code to calculate average if the calories were in strings



// .reverse()
// 1. muta el array original
// 2. nos da la referencia del mismo original

let orderedNumbers = [1, 2, 3, 4, 5]

// si no quiero afectar el array origina
// 1. structuredClone()
// 2. .map()
// 3. JSON.parse() & JSON.stringify
// 4. operador spread (...)

let cloneArr = structuredClone(orderedNumbers)

let inverseNumbers = cloneArr.reverse()
console.log(inverseNumbers)

console.log(orderedNumbers)


// ejemplo invertir string
let str = "hola";

// cambiar el string a array de caracteres
// ["h", "o", "l", "a"]
let strArr = str.split("")
console.log(strArr)

// aplicar .reverse()
strArr.reverse()
console.log(strArr)

// cambiar array de caracteres a string
let reversedStr = strArr.join("")
console.log(reversedStr)


// .sort()

let characterArr = ["a", "e", "c", "b", "d"]

let cloneArrSort = structuredClone(characterArr)

cloneArrSort.sort()

console.log(cloneArrSort)


let someNumbers = [1, 40, 6, 3, 80, 100]

let cloneArrNumSort = structuredClone(someNumbers)

// cloneArrNumSort.sort()
// console.log(cloneArrNumSort)

cloneArrNumSort.sort( (elem2, elem1) => {
  console.log(elem2, elem1)
  // ordenamos ascendente o descendente
  // acepta 3 valores posibles.
  // 1. num neg => ordenalo detras
  // 2. num pos => ordenalo delante
  // 3. 0 => no los cambies de posicion
  if (elem2 > elem1) {
    return -1
  } else if (elem2 < elem1) {
    return 1
  } else {
    return 0
  }
} )

console.log(cloneArrNumSort)



let personArr2 = [
  { name: "Jorge", candy: 21 },
  { name: "Caro", candy: 10 },
  { name: "Adria", candy: 24 },
  { name: "Ruth", candy: "10" }
]

personArr2.sort( (elem2, elem1) => {
  if (elem2.name > elem1.name) {
    return 1
  } else if (elem2.name < elem1.name) {
    return -1
  } else {
    return 0
  }
} )

console.log(personArr2)