//Objects
var developer = {
    name: "Krish",
    belt: "Balck",
    age: 23,
    place: 'Indranagar'
};
console.log(developer); //{ name: 'Krish', belt: 'Balck', age: 23, place: 'Indranagar' }
console.log(developer['age']); //23
developer.name = "Ram";
console.log(developer);
