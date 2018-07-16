function daysInMonth (month, leapYear){
  switch (month){
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      return `${month} has 31 days`;
      break;
    case "April":
    case "June":
    case "September":
    case "November":
       return `${month} has 30 days`;
      break;
    case "February":
      if (leapYear === true){
         return `${month} has 29 days`;
      }
      else {
         return `${month} has 28 days`;
      }
  }
}

console.log(daysInMonth("February", true));
