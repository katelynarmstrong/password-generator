// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = ''
  var promptCriteria = window.prompt('How many characters would you like, between 8-128?');
  var promptCriteria = window.prompt('Would you like to include special characters?');
  var promptCriteria = window.prompt('Would you like to include lower case letters?');
  var promptCriteria = window.prompt('Would you like to include upper case letters?');


  //charAt()
  //while loops
  //for loops

  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
