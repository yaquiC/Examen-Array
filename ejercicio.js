const array = [10, "5","7", 9,23,"17"] 
const result = array.map(x => Number(x)).reduce((a, b) => {
    return a * b
})
console.log(result)

// EJERCICIO 2 
const arreglo = ["pizza","pastel","pan","hamburgesa","churro"]
const comidas = arreglo.filter(comidas => comidas.length===6);
console.log(comidas)

//EJERCICIO 3 
const tabla = [1,2,3,4,5,6,7,8,9,10]
tabla.forEach(tabla => {
    const resultado = tabla * 7;
    console.log(` 7 X  ${tabla}  = ${resultado}`);
});

//EJERCICIO 4
const frutas = ["manzana", "limon" , "sandia", "pera", "toronja", "naranja"]
const frutis = frutas.filter(value =>value==="sandia")

console.log(frutis)

//EJERCICIO 5 
const usuarios =[
    {
        name: "Rafael perez",
        email: "rafael@gmail.com"
     },

    {
        name: "Rosario Perez",
        email: "rosario@gmail.com"
     },
    {
        name: "Rodrigo avila",
        email: "rodrigo@gmail.com"
     },
    {
        name: "Alberto Campos",
        email: "alberto@gmail.com"
     },
 ]

 const resultado = usuarios.find(value => value.email === "rosario@gmail.com")

 console.log(resultado)

 //EJERCIIO 6
 const arreglo1 = [1,6,3,4,2,56,10]
 const orden = arreglo1.sort((a,b) => {
    return a-b
 });

console.log(orden);

//EJERCICIO 7
const arreglo2 = [1,2,3,4,5,6,]
const results = arreglo2.every(num => num > 5);
console.log(results);

//EJERCICIO 8
const arre1 = ["Ali", "Jose"]
const arre2 = [1, 2]
const arre3 = [true, false]

const resultado6 = arre1.concat(arre2,arre3);
console.log(resultado6);

//EJERCICIO 9
const nums = [2,4,5,7,6,8]
const resultado7 = nums.shift();
console.log(nums);

//EJERCICIO 10
const numero = [12,6,7,8,11,10,9,5,3,43]
const resultado8 = numero.findIndex(value => value===5);
console.log(resultado8);

//EJERCICIO 11
const arrys = [1,2,3,4,5,6,7,8,9,10]
const resultado9 = arrys.map(num => num*3);
console.log(resultado9);
