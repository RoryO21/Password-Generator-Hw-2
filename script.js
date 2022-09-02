// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "z", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
var num = ["1", "3", "4", "5", "6", "7", "8", "9", "0"];

var answerArray = []

function writePassword() {
  //  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var promptAnswer = getPrompts();
  if (promptAnswer) {
    var createdPassword = generatePassword();
    alert(createdPassword);
    passwordText.value = createdPassword;

  }

  passwordText.value = password;

}
function getPrompts() {

  var passwordLength = (prompt("How many charcters do you want your password to be?"))
  answerArray = answerArray.concat(passwordLength)

  var upperCase = (alert("Do you want upper case letters?"))
  answerArray = answerArray.concat(upperCase)

  var lowerCase = (alert("Do you want lower case letters?"))
  answerArray = answerArray.concat(lowerCase)

  var specialChar = (alert("Do you want special characters?"))
  answerArray = answerArray.concat(specialChar)

  var num = (alert("Do you want numbers?"))
  answerArray = answerArray.concat(num)


}

function generatePassword() {
  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * answerArray.length);
    password = password + answerArray[randomIndex]
  }
  console.log(password);
  return password;
}