document.addEventListener('DOMContentLoaded', function(){
const list = document.querySelector('.product');
const forms = document.forms;

 // filter products
 const searchBar = forms['search-product'].querySelector('input');
 searchBar.addEventListener('keyup', (e) => {
   const term = e.target.value.toLowerCase();
   const products = list.getElementsByClassName('product');
   Array.from(products).forEach((product) => {
     const title = product.firstElementChild.textContent;
     if(title.toLowerCase().indexOf(e.target.value) != -1){
       book.style.display = 'block';
     } else {
       book.style.display = 'none';
     }
   });
 });

 function showAlert() {
   alert("Your order is being processed, thank you");
   
 };

//Declaring input information
let name = document.getElementById("name").value;
let location = document.getElementById("location").value;
let phone = document.getElementById("phone-no").value;
let email = document.getElementById("email").value;

// storage of input information

let personDetails = {
  "Name": name,
  "Location": location,
  "Phone": phone,
  "Email": email

}
localStorage.setItem("pdetails",JSON.stringify(personDetails));

// Retrieving stored information
function myFunc(){
  localStorage.getItem("Name");
  localStorage.getItem("Location");
  localStorage.getItem("Phone");
  localStorage.getItem("Email");
  
};


});
 /* cart figures */
 var pdts = [...document.querySelectorAll(".pdt_row")];
 let can = document.querySelector("#cart_num");

 can.textContent = pdts.length; 

/* Remove an item from the cart */
function remov(btn) {
 var row = btn.parentNode.parentNode;
 row.parentNode.removeChild(row);
 
 pdts = [...document.querySelectorAll(".pdt_row")];
 let rowCount = pdts.length;
 can.textContent = pdts.length;
 if (rowCount == 0) {
     window.location = "home.html";
   }
     }  