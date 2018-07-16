function jediName(firstName, lastName){
let frnt =  firstName.slice(0, 2);
let back =  lastName.slice(0, 3);
return `${back}${frnt}`;

}
