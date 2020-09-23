function validation() {
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm-password").value;
  var error_message = document.getElementById("error_message");
  var text;
  error_message.style.padding = "10px";

  if (email.indexOf("@") == -1 || email.length < 6 || email == "" || email == null) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(number) || number.length != 10 || number == "" || number == null) {
    text = "Please Enter valid Phone number";
    error_message.innerHTML = text;
    return false;
  }
  if (password <= 8 || password == "" || password == null) {
    text = "Password must be 8 characters or more";
    error_message.innerHTML = text;
    return false;
  }
  if (confirm_password != password || confirm_password == "" || confirm_password == null) {
    text = "Please Enter correct Password";
    error_message.innerHTML = text;
    return false;
  }
  window.open("home.html", "_self");
}
