function rockPapperScissor(userNum){
const randomNo = Math.floor(Math.random() * 3) + 1;
console.log(randomNo);

switch (userNum){
  case 1: 
  if (userNum === 1 && randomNo === 1){
    return "Tied"
  }
  else if (userNum === 1 && randomNo === 2){
    return "User Wins";
  }
  else {
    return "User loses";
  }
  break;

  case 2: 
  if (userNum === 2 && randomNo === 1){
    return "Users loses";
  }
  else if (userNum === 2 && randomNo === 2){
    return "Tied";
  }
  else {
    return "User wins";
  }
  break;

  case 3: 
  if (userNum === 3 && randomNo === 1){
    return "User Wins";
  }
  else if (userNum === 3 && randomNo === 2){
    return "User loses";
  }
  else {
    return "Tied";
  }
  break;

  default:
  if (userNum > 3 || userNum < 1){
    return "Have to choose a number 1-3";
  }
}
}
console.log(rockPapperScissor(1));
