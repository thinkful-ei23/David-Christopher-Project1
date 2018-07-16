function whoAmI(name, age) {
var yob = yearOfBirth(age);
if (!name) {
  throw new Error("Argument not valid");
}
console.log(`Hi, my ${name} is Chris and I'm 20 years old`);
console.log(`I was born in ${yob}`);

}

function yearOfBirth(age) {
if (!age || age < 0){
  throw new Error("Agrgument not valid");
}
return 2018 - age;
}

try{
  whoAmI("Chris", -5);
}
catch(e){
  console.error(e.message);
}
