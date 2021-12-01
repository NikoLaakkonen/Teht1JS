var input = require("readline-sync");
var nimi = input.question("syota sana:");

nimi.toString;

function TarkistaPalindromi(str) {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = str[i]; //merkki edestä
    let y = str[j - i]; //merkki takaa
    if (x != y) {
      //palauttaa falsen jos sana ei täsmää
      return false;
    }
  }
  //palauttaa truen jos sana on oikein(palindromi)
  return true;
}

let testi = TarkistaPalindromi(nimi);
//tarkistaa onko testin tulos true vai false
if (testi == true) {
  console.log("Syote on Palindromi");
} else {
  console.log("Syote ei ole palindromi");
}
