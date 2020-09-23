// creating validation variables
function validation() {
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var details = document.getElementById("text-area").value;
  var error_message = document.getElementById("error_message");
  var text;
  error_message.style.padding = "10px";

  // user validation starts here
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

  if (details == "" || details == null) {
    text = "Please Enter details of Contact";
    error_message.innerHTML = text;
    return false;
  }
  alert("Message submitted succesfully!");
  return true;
}
// validation ends here
