let userName: string;
let age: number;
let isLoggedIn: boolean;

userName = "Start";
console.log(userName);//Start
userName = "Rome";
//character = 10;//Type 'number' is not assignable to type 'string'.
console.log(userName);//Rome
age = 23;
console.log(age);//23
//age = 'sub';//Type 'string' is not assignable to type 'number'
console.log(age);
isLoggedIn = true;
console.log(isLoggedIn);//true
isLoggedIn = false;
console.log(isLoggedIn);//false

//Arrays
let ninjas : string[];
//ninjas = [10, 20 ,30];//Type 'number' is not assignable to type 'string'.
ninjas = ["First", "Second", "Third"];

let array : number[] = [];
array.push(10);
array.push(20);
array.push(30);
array.unshift(5);
array.push(35);

//Union Arrays
let mixArray : (string|number|boolean)[] = [];
mixArray.push("String");
mixArray.push(25);
mixArray.push(true);

let uid : string|number;
uid = "123";
uid = 123;

//Objects
let employee : object;
employee = {name : "Yogesh", age : 23};
//employee = "Somesh";//Type 'string' is not assignable to type 'object'.
employee = [];

let employee2 : {
    name:string,
    age:number,
    beltColor:String
}
employee2 = {name : "Ramu", age : 10, beltColor : "Orange"};


