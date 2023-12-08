//arrays
var names = ["Krishna", "Shiv", "Ram"];
//names.push(21);//Argument of type 'number' is not assignable to parameter of type 'string'.
names.push('Arrays');
//console.log(names);//[ 'Krishna', 'Shiv', 'Ram', 'Arrays' ]
var numbers = [20, 30, 50];
numbers.unshift(10);
numbers.push(60);
numbers[3] = 40; //it replaced the index of that number
console.log(numbers); //[ 10, 20, 30, 40, 60 ]
console.log(numbers.indexOf(40)); //3
var mix = ['Ken', 4, 'william', 8, 9];
mix.push('Start');
console.log(mix);
mix[1] = "robert";
console.log(mix); //[ 'Ken', 'robert', 'william', 8, 9, 'Start' ]
mix[2] = 10;
console.log(mix);
