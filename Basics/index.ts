let character = "Sumitra";
//character = 10;//Type 'number' is not assignable to type 'string'.
character = "Sanketh";
console.log(character);

let circ = function(diameter:number){
    return diameter * Math.PI;
}
//console.log(circ('hello'));//NaN (without type declaration)
//console.log(circ('hello'));//Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(circ(5));//15.707963267948966