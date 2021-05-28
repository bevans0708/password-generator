
// arrays to hold all possible characters for random password
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["'","!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",","."];


// question prompts to allow user to decide what elements they want in password
var passwordQuestions = function() {
   var passwordLength = parseInt(prompt("Enter password length between 8 and 128."));
   console.dir(passwordLength);

   var passwordLower = confirm("Press OK if you would like Lowercase");  
   console.log(passwordLower);

   var passwordUpper = confirm("Press OK if you would like Uppercase");
   console.log(passwordUpper);

   var passwordNumber = confirm("Press OK if you would like Numbers"); 
   console.log(passwordNumber);

   var passwordSymbol = confirm("Press OK if you would like Symbols");  
   console.log(passwordSymbol);

   // If statement to prevent user from selecting no on all element types
   if (passwordLower === false && passwordUpper === false && passwordNumber === false && passwordSymbol === false) {
      window.alert("Please select at least one character type to generate password");
      return;
   }

   if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password must be between 8 and 128 charaters to generate password");
      return;
   }
   // taking user inputs and placing them into an object
   var passwordChoice = {
      passwordLength: passwordLength,
      passwordLower: passwordLower,
      passwordUpper: passwordUpper,
      passwordNumber: passwordNumber,
      passwordSymbol: passwordSymbol
   }
   return passwordChoice;
};

// Function to randomize elements for password
function randomSelect(array) {
   var randomI = Math.floor(Math.random() * array.length);
   var randomE = array[randomI];
   return randomE;
};

// function to form password
function generatePassword() {
   var choices = passwordQuestions();
   var results = [];
   var pChar = [];
   var gChar = [];
   if (choices.passwordLower) {
      pChar = pChar.concat(lower);
      gChar.push(randomSelect(lower));
   }
   if (choices.passwordUpper) {
      pChar = pChar.concat(upper);
      gChar.push(randomSelect(upper));
   }
   if (choices.passwordNumber) {
      pChar = pChar.concat(number);
      gChar.push(randomSelect(number));
   }
   if (choices.passwordSymbol) {
      pChar = pChar.concat(symbol);
      gChar.push(randomSelect(symbol));
   }
   // console.log(choices.passwordLength);
   // console.log(pChar);
   for (i = 0; i < choices.passwordLength; i++) {
      var myChar = randomSelect(pChar);
      results.push(myChar);
      console.log(pChar);
   }
   for (i = 0; i < gChar.length; i++) {
      results[i] = gChar[i];
   }
   // return and join user choices
   return results.join("");
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
