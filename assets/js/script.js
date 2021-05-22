var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["'","!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",","."];

var passwordQuestions = function() {
   var passwordLength = parseInt(prompt("How long should this password be?"));
   console.dir(passwordLength);

   var passwordLower = confirm("Press OK if you would like Lowercase");  
   console.log(passwordLower);

   var passwordUpper = confirm("Press OK if you would like Uppercase");
   console.log(passwordUpper);

   var passwordNumber = confirm("Press OK if you would like Numbers"); 
   console.log(passwordNumber);

   var passwordSymbol = confirm("Press OK if you would like Symbols");  
   console.log(passwordSymbol);

   if (passwordLower === false && passwordUpper === false && passwordNumber === false && passwordSymbols === false) {
      alert("Please select at least one character type to generate password")
      return
   }
   var passwordChoice = {
      passwordLength: passwordLength,
      passwordLower: passwordLower,
      passwordUpper: passwordUpper,
      passwordNumber: passwordNumber,
      passwordSymbol: passwordSymbol
   }
   return passwordChoice

};

function randomSelect(array) {
   var randomI = Math.floor(Math.random() * array.length);
   var randomE = array[randomI]
   return randomE
};

// I had passArr.length originally
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
   for (var i = 0; i < choices.length; i++) {
      var myChar = randomSelect(pChar);
      results.push(myChar);
      console.log(pChar);
   }
   for (var i = 0; i < gChar.length; i++) {
      results[i] = gChar[i];
   }
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
