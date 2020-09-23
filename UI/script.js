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
var name = document.getElementById("name").value;
var location = document.getElementById("location").value;
var phone = document.getElementById("phone-no").value;
var email = document.getElementById("email").value;

// storage of input information
localStorage.setItem("Name",name);
localStorage.setItem("Location",location);
localStorage.setItem("Phone",phone);
localStorage.setItem("Email",email);

// Retrieving stored information
function myFunc(){
  localStorage.getItem("Name");
  localStorage.getItem("Location");
  localStorage.getItem("Phone");
  localStorage.getItem("Email");
  
};


})