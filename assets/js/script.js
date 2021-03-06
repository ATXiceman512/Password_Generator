// Numbers, Lowercase Letters, Uppercase Letters, SpecialChar Arrays
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'G', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// !@#$%^&*()_+[]{}~./- Could possibly be more
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '[', ']', '{', '}', '~', '.', '/', '-'];

// GET RANDOM ELEMENT FROM ARRAY THAT IS PASSED IN, RESULT IS RETURNED.
function random(random) {
  var randomIndexForArray = Math.floor(Math.random() * random.length);
  var el = random[randomIndexForArray];
  return el;
}

// FUNCTION TO GET INPUT FROM THE USER
function passwordOptions() {

  var passwordLength = 0;

  var hasSpecialChar = false;
  var hasNumbers = false;
  var hasLowercaseChar = false;
  var hasUppercaseChar = false;

  passwordLength = prompt('How many character would you like in your password?');
  console.log('Chosen Length is: ', passwordLength);

  if (isNaN(passwordLength) === true) {
    var message = 'Password length must be a number, i.e. 12, 24, 48, etc...';
    alert(message);
    console.log(message);
    return message;
  }

  if (passwordLength > 128 || passwordLength < 8) {
    var message = 'Password length must be between 8 and 128 characters'
    alert(message);
    console.log(message);
    return message;
  }

  hasSpecialChar = confirm('Click Ok to confirm if you want special characters in your password');
  hasNumbers = confirm('Click OK to confirm if you want numbers in your passowrd');
  hasLowercaseChar = confirm('Click OK to confirm if you want to have lowercase characters in your password');
  hasUppercaseChar = confirm('Click OK to confirm if you want uppercase characters in your password');

  if (
    hasSpecialChar === false &&
    hasNumbers === false &&
    hasLowercaseChar === false &&
    hasUppercaseChar === false
  ) {
    var message = 'You must select at least one type to be included in the password';
    alert(message);
    console.log(message);
    return message;
  }

  // https://www.w3schools.com/js/js_objects.asp
  var options = {
    length: passwordLength,
    specialChar: hasSpecialChar,
    numbers: hasNumbers,
    lowerCaseChar: hasLowercaseChar,
    upperCaseChar: hasUppercaseChar
  };

  // RETURNS THE LIST OF OPTIONS WHEN THE FUNCTION 'passwordOptions' is called
  console.log(options);
  return options;
}

function generatePassword() {
  // GET OPTIONS FOR PASSWORD
  var options = passwordOptions();

  // NEW PASSWORD
  var newPassword = [];
  var possbile = [];
  var guaranteed = [];

  // CHECKS TO SEE IF SPECIAL CHAR IS TRUE
  if (options.specialChar === true) {
    possbile = possbile.concat(specialChar);
    guaranteed.push(random(specialChar));
  }

  // CHECKS TO SEE IF NUMBERS IS TRUE
  if (options.numbers === true) {
    possbile = possbile.concat(numbers);
    guaranteed.push(random(numbers));
  }

  // CHECKS TO SEE IF LOWERCASE CHAR IS TRUE
  if (options.lowerCaseChar === true) {
    possbile = possbile.concat(lowerCaseChar);
    guaranteed.push(random(lowerCaseChar));
  }

  // CHECKS TO SEE IF UPPERCASE CHAR IS TRUE
  if (options.upperCaseChar === true) {
    possbile = possbile.concat(upperCaseChar);
    guaranteed.push(random(upperCaseChar));
  }

  for (var index = 0; index < options.length; index++) {
    var character = random(possbile);
    newPassword.push(character);
  }

  for (var index = 0; index < guaranteed.length; index++) {
    newPassword[index] = guaranteed[index];
  }

  return newPassword.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
