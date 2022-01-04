// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = ''
  var specialCharacters = ["!@#$%^&*"]
  var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
  var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  var numericValues = ["0123456789"]

  var passwordLength = window.prompt('How many characters would you like, between 8-128?');
    if (passwordLength < 8) {
      window.alert("Please select a password length between 8-128")
    }
    if (passwordLength > 128) {
      window.alert("Please select a password length between 8-128")
    }
    console.log(passwordLength)


  confirm('Would you like to include special characters?');
  console.log(specialCharacters)
  
  confirm('Would you like to include lower case letters?');
  console.log(lowerCase)
  
  confirm('Would you like to include upper case letters?');
  console.log(upperCase)

  confirm('Would you like to include numbers?');
  console.log(numericValues)


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
