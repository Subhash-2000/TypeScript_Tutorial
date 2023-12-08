//Objects
let developer = {
    name : "Krish",
    belt : "Balck",
    age : 23,
    place : 'Indranagar'
}
console.log(developer);//{ name: 'Krish', belt: 'Balck', age: 23, place: 'Indranagar' }
console.log(developer['age']);//23

developer.name = "Ram";
console.log(developer);//{ name: 'Ram', belt: 'Balck', age: 23, place: 'Indranagar' }

//developer.age = "string";//Type 'string' is not assignable to type 'number'.
