function whoAmI(name, age) {
var yob = yearOfBirth(age);
if (!name || typeof name !== "string") {
  throw new Error("Argument not valid");
}
console.log(`Hi, my name is ${name} and I'm 20 years old`);
console.log(`I was born in ${yob}`);

}

function yearOfBirth(age) {
if (!age || age < 0 || typeof age !== "number"){
  throw new Error("Agrgument not valid");
}
return 2018 - age;
}

try{
  whoAmI("Chris" , "Chris");
}
catch(e){
  console.error(e.message);
}
