// Assignment code here
var lowerLetters;
var upperLetters;
var numbers;
var specials;
var charLength;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("writePassword started");
  askQuestions();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
var createPassword = ""

//create array options for each character
const alphabet1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const ALPHABET2 = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
const special = []
//isolate user character choices - check falsy's to include in random array choice




//run loop for selecting charLength password
for (let index = 0; index < charLength.length; index++) {
 
 
 //randomly select an array and random character

 createPassword += ""
}










console.log("test")
  return createPassword;

}
function askQuestions(){
  //window prompt to ask which things are needed in the password
  console.log ("questions started");
  charLength = window.prompt ("How long do you want your password? Enter a number between 8 and 128.");
  charLength = parseInt(charLength);

    //validate character answer
    if (charLength === NaN || charLength === "" || charLength === null || charLength > 128 || charLength < 8 || !Number.isInteger(charLength)) {
      console.log(typeof charLength);
      window.alert("You need to provide a valid answer. Please try again.");
      //return charLength;
      }
    //if yes (true), go to next question
    else {
    window.alert ("Answer the following questions for what you would like included in your password. You MUST include at least one of the following 4 options.");

    var isGood = false;
    while (!isGood){
      charConfirm();
      //CHECK FOR AT LEAST ONE SELECTION OF CHARACTER TYPE
      if (lowerLetters == false && upperLetters == false && numbers == false && specials == false){
        window.alert ("Invalid input. You MUST choose at least one character type from the 4 options. Please try again");
      }else {
        isGood = true
      }
    }
    console.log ("all is good")

    }
  }
  function charConfirm(){

      //ask and confirm LOWERCASE LETTERS
      lowerLetters = window.confirm ("Do you want lowercase letters?");

      if (lowerLetters) {
        window.alert ("You have chosen to include LOWERCASE letters in your Password");

      } else {
        window.alert ("You have chosen NOT to include lowercase letters in your Password");
      }

      //ask and confirm UPPERCASE LETTERS
      upperLetters  = window.confirm ("Do you want UPPERCASE letters");

      if (upperLetters) {
        window.alert ("You have chosen to include UPPERCASE letters in your Password");

        } else {
        window.alert ("You have chosen NOT to include uppercase letters in your Password");
      }

      //ask and confirm NUMBERS
      numbers = window.confirm ("Do you want NUMBERS included?");

      if (numbers) {
        window.alert ("You have chosen to include NUMBERS in your Password");

      } else {
        window.alert ("You have chosen NOT to include numbers in your Password");
      }

      //ask and confirm SPECIAL CHARACTERS
      specials = window.confirm ("Do you want special characters included? (e.g. #, $, %, &, etc.)");

        if (specials) {
          window.alert ("You have chosen to include SPECIAL CHARACTERS in your Password");

        } else {
          window.alert ("You have chosen NOT to include special characters in your Password");
        }
    
  }




