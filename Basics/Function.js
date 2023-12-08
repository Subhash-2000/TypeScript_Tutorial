var greet;
//greet = "hello";//Type 'string' is not assignable to type 'Function'.
greet = function () {
    console.log("hello, again");
};
console.log(greet());
greet = function (a, b, c) {
    if (c === void 0) { c = 50; }
    console.log("Sum of 2 numbers : " + (a + b));
    console.log(c);
};
greet(10, 20, 100);
