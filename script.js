function getPassword(){
    
  var chars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()=+<>[]{}";
  var passwordLength = 10;
  var password ="";

  for (var i=0; i<passwordLength; i++){
      var randomNumber = Math.floor(Math.random()* chars.length);
      password += chars. substring(randomNumber,randomNumber+1);
  }
  document.getElementById("password").value = password
}