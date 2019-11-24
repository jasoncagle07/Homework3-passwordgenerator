// generate password
function generate () {

  // set password length/complexity
  let complexity = document.getElementById("slider").value;


  // possible password values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+[]{}?/~";

  let password = "";

  // for loop to choose pw characters
  for (var i = 0; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  // adding password to textbox area
  document.getElementById("display").value = password;

}

   //set default legth display of 8 to 28
   document.getElementById("length").innerHTML = "Length: 8-28";

   //function to set length based on slider position
   document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value>8){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
        }
        else{
            document.getElementById("length").innerHTML = "Length: 8";
        }
   }
   //function to copy pw to clipboard
   function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard");

   }
