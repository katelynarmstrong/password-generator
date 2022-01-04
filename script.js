// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = ''


  //password length
  var promptLength = window.prompt('How many characters would you like, between 8-128?');
    if (promptLength < 8) {
      window.alert("Please select a password length between 8-128")
    }
    if (promptLength > 128) {
      window.alert("Please select a password length between 8-128")
    }
    console.log(promptLength)

  let specialCharacters = "!@#$%^&*"
  confirm('Would you like to include special characters?');
  console.log(specialCharacters)
  
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  confirm('Would you like to include lower case letters?');
  console.log(lowerCase)
  
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  confirm('Would you like to include upper case letters?');
  console.log(upperCase)

  let numericValues = "0123456789";
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
