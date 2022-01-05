// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to generate password. Variables defined
function generatePassword() {
  var password = ''
  var allCharacters = ''
  var specialCharacters = "!@#$%^&*"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numericValues = "0123456789"

  // password length established with parameter alerts
  var passwordLength = window.prompt('How many characters would you like, between 8-128?');
  while (passwordLength < 8 || passwordLength > 128) {
    alert('Your password must be a number between 8 and 128')
    passwordLength = window.prompt('How many characters would you like, between 8-128?');
  }

// criteria selection confirmations
  var wantsSpecial = confirm('Click ok to confirm the use of special characters.');

  var wantsLower = confirm('Click ok to confirm the use of lower case letters.');

  var wantsUpper = confirm('Click ok to confirm the use of upper case letters.');

  var wantsNumbers = confirm('Click ok to confirm the use of numbers.');

  // error loop
  while (!wantsSpecial && !wantsLower && !wantsUpper && !wantsNumbers) {
    alert('You must choose at least one character type for your password')
    wantsSpecial = confirm('Click ok to confirm the use of special characters.');
    console.log(specialCharacters)

    wantsLower = confirm('Click ok to confirm the use of lower case letters.');
    console.log(lowerCase)

    wantsUpper = confirm('Click ok to confirm the use of upper case letters.');
    console.log(upperCase)

    wantsNumbers = confirm('Click ok to confirm the use of numbers.');
    console.log(numericValues)
  }
// build the string as criteria options are confirmed
if(wantsSpecial) {
  allCharacters += specialCharacters
}

if (wantsLower) {
  allCharacters += lowerCase
}

if (wantsUpper) {
  allCharacters += upperCase
}

if (wantsNumbers) {
  allCharacters += numericValues
}

console.log(allCharacters);

// equation to build password based on user input
for (var i = 0; i < passwordLength; i++) {
  password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length))
}

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
