var character = "Ramesh";//typescript uses a inference to automatically set type to the variable initialized.
console.log(character);
var inputs = document.querySelectorAll('input'); //it contains 3 items inside inputs here
console.log(inputs);
//we can't use for each on node list
inputs.forEach(function (input) {
    console.log(input);
});
