
function whoAmI(name, age) {
var yob = yearOfBirth(age);
console.log(`Hi, my name is Chris and I'm 20 years old`);
console.log(`I was born in ${yearOfBirth}`);
}

whoAmI();

function yearOfBirth(age) {
let yearOfBirth = 2018 - age;
console.log(`I was born in ${yearOfBirth}`);
}

