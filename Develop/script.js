// Assignment code here
var lowerLetters;
var upperLetters;
var numbers;
var specials;
var charLength;
var arrays;

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
const special = ["#", "$", "%", "&", "*", "?"];
const choice = [(alphabet1), (ALPHABET2), (number), (special)];


//run loop for selecting charLength password
while (createPassword.length < charLength) {
  
    //select random array
    
      arrays = Math.floor(Math.random()*choice.length);
    
    //check if lowercase and user approval - if true return random character from alphabet1 array
    if (arrays === 0 && lowerLetters === true) {
    createPassword += alphabet1[Math.floor(Math.random()*alphabet1.length)];
    }
    //if false check if upperLetters and user approval - if true return random character from ALPHABET2 array
    else if (arrays === 1 && upperLetters === true) {
      createPassword += ALPHABET2[Math.floor(Math.random()*ALPHABET2.length)];
      }
    //if false check if numbers and user approval - if true return random character from number array
    else if (arrays === 2 && numbers === true) {
      createPassword += number[Math.floor(Math.random()*number.length)]; 
    } 
    else if (arrays === 3 && specials === true) {
      createPassword += special[Math.floor(Math.random()*special.length)];
    }
  } 
  return createPassword
}

function askQuestions(){
  //window prompt to ask which things are needed in the password
  var correctInput = false
  while (!correctInput) {

    charLength = window.prompt ("How long do you want your password? Enter a number between 8 and 128.");
  charLength = parseInt(charLength);

    //validate character answer
    if (charLength === NaN || charLength === "" || charLength === null || charLength > 128 || charLength < 8 || !Number.isInteger(charLength)) {
      window.alert("You need to provide a valid answer. Please try again.");
      }
    //if yes (true), go to next question
    else {
    var correctInput = true
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
    }   
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




