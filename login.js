/*var objPeople = [
    {
      useremail: "melon1@gmail.com",
      password: "123",
    },
    {
      useremail: "morris1@gmail.com",
      password: "654321",
    },
    {
      useremail: "kimuli1@gmail.com",
      password: "forever",
    },
  ];
  
  function getInfo() {
    var useremail = document.getElementById("useremail").value;
    var password = document.getElementById("password").value;
  
    for (i = 0; i < objPeople.length; i++) {
      if (
        useremail == objPeople[i].useremail &&
        password == objPeople[i].password
      ) {
        console.log(useremail + "is logged in!!!");
        alert("Welcome " + "" + "" + useremail);
        
        window.open("home.html");
        return;
      }
    }
    console.log("incorrect useremail or password");
    alert("invalid useremail or password");
  }*/

  // creating validation variables
function validation() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var error_message = document.getElementById("error_message");
  var text;
  error_message.style.padding = "10px";

  // user validation starts here
  if (email.indexOf("@") == -1 || email.length < 6 || email == "" || email == null) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (password.length != 8  ) {
    text = "Password must be 8 characters or more";
    error_message.innerHTML = text;
    return false;
  }
  if (validation() == true) {
    let user = {
      user_email: "email",
      user_password: "password",
    };
    window.localStorage.setItem("person", JSON.stringify(user));
  }
  window.open("home.html", "_self");
}
// validation ends here

   