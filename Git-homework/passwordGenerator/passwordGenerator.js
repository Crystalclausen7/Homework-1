// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

 var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function getRandomElement(arr) {
    var index = Math.floor(Math.random() * arr.length);
    var el = arr[index];
    return el;
  }
function generatePassword() {
    var newArray = []
    var array3 = alphabet.concat(nums)
    for (var i =0; i <8; i++){
   
       newArray.push(getRandomElement(array3))
   } return newArray.join('')
}