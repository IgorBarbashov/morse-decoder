const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  return expr
    .split("**********")
    .reduce((wordsAcc, word) => {
      const letters = word
        .replace(/[01]{1,10}/g, "$&-")
        .split("-")
        .slice(0, -1);
      const decodedWord = letters.reduce((lettersAcc, letter) => {
        const decodedLetter = letter
          .replace(/^0*/, "")
          .replace(/[01]{1,2}/g, "$&-")
          .split("-")
          .slice(0, -1)
          .map(el => (el === "10" ? "." : "-"))
          .join("");
        return `${lettersAcc}${MORSE_TABLE[decodedLetter]}`;
      }, "");
      return `${wordsAcc} ${decodedWord}`;
    }, "")
    .slice(1);
}

module.exports = {
  decode
};
