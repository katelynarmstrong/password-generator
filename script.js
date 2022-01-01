// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = ''

  var promptLength = window.prompt('How many characters would you like, between 8-128?');
    if (promptLength < 8) {
      window.prompt("Please select a number of characters between 8-128")
    }
    if (promptLength > 128) {
      window.prompt("Please select a number of characters between 8-128")
    }

  var promptCharacters = window.prompt('Would you like to include special characters?');
  
  var promptLower = window.prompt('Would you like to include lower case letters?');
  
  var promptUpper = window.prompt('Would you like to include upper case letters?');

  var prompNumber = window.prompt('Would you like to include numbers?');


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
