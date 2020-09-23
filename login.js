var objPeople = [
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
  }
   