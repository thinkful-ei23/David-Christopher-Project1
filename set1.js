function whoAmI(name, age) {
var yob = yearOfBirth(age);
console.log(`Hi, my ${name} is Chris and I'm 20 years old`);
console.log(`I was born in ${yob}`);
}

function yearOfBirth(age) {
if (age < 0){
  throw new Error("Age can not be negative");
}
return 2018 - age;
}

try{
  whoAmI("Chris", -5);
}
catch(e){
  console.error(e.message);
}
