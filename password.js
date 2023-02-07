let characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordOne = document.getElementById("passwordOne")
let passwordTwo = document.getElementById("passwordTwo")
isStarted = false

function generatePassword() {
  isStarted = true
  document.getElementById("passwordOne").style.display = "block";
  passwordOne.textContent = ''
  passwordTwo.textContent = ''

  for (let i = 0; i < 15; i++) {
    let randomPasswordOne = Math.floor(Math.random() * characters.length)
    let randomPasswordTwo = Math.floor(Math.random() * characters.length)
    passwordOne.textContent += characters[randomPasswordOne]
    passwordTwo.textContent += characters[randomPasswordTwo]
  }

}

function copyPasswordOne() {
  if (isStarted === true) {
    let copyText = document.getElementById("passwordOne");
    navigator.clipboard.writeText(copyText.innerText).then(function () {
      copyText.innerHTML = "<i class='fa-solid fa-check'></i> Copied!"
    });
  }
}

function copyPasswordTwo() {
  if (isStarted === true) {
    let copyText = document.getElementById("passwordTwo");
    navigator.clipboard.writeText(copyText.innerText).then(function () {
      copyText.innerHTML = "<i class='fa-solid fa-check'></i> Copied!"
    });
  }
}