var ageNum = 10;
console.log(ageNum); //10
ageNum = "Age";
console.log(ageNum); //Age
ageNum = true;
console.log(ageNum); //true
ageNum = "A";
console.log(ageNum); //A
//arrays
var mixed = []; //so in future you can push anything to this array
mixed.push(10);
mixed.push("Array");
mixed.push(true);
console.log(mixed); //[ 10, 'Array', true ]
//objects
var ninja; //name property any type and age property can be any type
ninja = { name: "Rishi", age: 25 };
console.log(ninja);
ninja = { name: 10, age: "age" };
console.log(ninja);
ninja = { name: "Ram charan", age: false };
console.log(ninja);
