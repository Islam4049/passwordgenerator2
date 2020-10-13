const pass = {
    upperCaseChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCaseChar: "abcdefghijklmnopqrstuvwxyz",
    numbersChar: "0123456789",
    specialChar: "!@#$%^&*()_+-={}|[]\:<>?/",
  }
  
  var generateBtn = document.querySelector("#generate");
  var passwordText = document.querySelector("#password");
  
  var passLengthInput, Uppers, Lowers, Numbers, Special;
  var password = "";
  var newPassString = "";
  
  
  function writePassword() {
  
    var password = generatePassword();
  
    passwordText.value = password;
  }
  
  function generatePassword() {
  
    resetPasswordBox();
  
    collectInput();
  
    for (i = 0; i < passLengthInput; i++) {
  
      password += newPassString.charAt(Math.floor(Math.random() * newPassString.length));
    }
  
    return password;
  
  }
  
  function collectInput() {
  
    passLengthInput = prompt(" Password length must be between 8-128 ");
  
    while ((passLengthInput < 8) || (passLengthInput > 128) || (isNaN(passLengthInput))) {
  
      passLengthInput = prompt("Try again, passsword must be a number between 8-128 characters");
    }
  
    passLengthInput = parseInt(passLengthInput);
    console.log(`User selected a password length of: ${passLengthInput}`);
  
    Uppers = confirm("Do you need  Uppercase characters?");
  
    if (Uppers) {
  
      newPassString += pass.upperCaseChar;
      console.log("Uppercase selected.");
    }
    else {
      console.log("Uppercase not selected.");
    }
  
  
    Lowers = confirm("Do you need Lowercase characters");
  
    if (Lowers) {
  
      newPassString += pass.lowerCaseChar;
      console.log("Lowercase selected.");
    } 
    else {
      console.log("Lowercase not selected.");
    }
  
  
    Numbers = confirm("Do you need  Numbers");
  
    if (Numbers) {
  
      newPassString += pass.numbersChar;
      console.log("Numbers selected");
    } 
    else {
      console.log("Numbers not selected");
    }
  
  
    Special = confirm("Do you need Special characters");
  
    if (Special) {
  
      newPassString += pass.specialChar;
      console.log("Spcecial characters selected");
    } 
    else {
      console.log("Special characters not  selected");
    }
  
    evaluateInput();
  
  }
  
  function evaluateInput() {
  
    if ((!Uppers) && (!Lowers) && (!Numbers) && (!Special)) {
  
      alert("You need  at least one type of input");
  
      collectInput();
    }
  }
  
  function resetPasswordBox() {
  
    password = "";
    newPassString = "";
  }
  
  generateBtn.addEventListener("click", writePassword);
  