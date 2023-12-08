const character = "Ramesh";

console.log(character);

const inputs = document.querySelectorAll('input');//it contains 3 items inside inputs here

console.log(inputs);

//we can't use for each on node list
inputs.forEach(input => {
    console.log(input);
});