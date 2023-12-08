let greet : Function;

//greet = "hello";//Type 'string' is not assignable to type 'Function'.

greet = () => {
    console.log("hello, again");
}
console.log(greet());

greet = (a : number, b : number, c : number|string = 50) => {
    console.log("Sum of 2 numbers : "+(a+b));
    console.log(c);
}

greet(10, 20, 100);