function decode(sentence){
  let decoded = sentence.split(" ");

  let finishWord = "";
  for (i=0; i < decoded.length; i++) {
    if (decoded[i].charAt(0) === 'a') {
      finishWord += decoded[i].charAt(1);
    }
    else if (decoded[i].charAt(0) === 'b') {
      finishWord += decoded[i].charAt(2)
    }
    else if (decoded[i].charAt(0) === 'c') {
      finishWord += decoded[i].charAt(3)
    }
    else if (decoded[i].charAt(0) === 'd') {
      finishWord += decoded[i].charAt(4)
    }
    else {finishWord += " "}
  }
  return finishWord;
}

console.log(decode("craft block argon meter bells brown croon droop"));
