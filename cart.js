document.addEventListener("DOMContentLoaded", function () {

    let qtys = [...document.querySelectorAll(".qty")]; //quantity

    let prices = document.querySelectorAll(".price"); //prices

    let amt = document.querySelectorAll(".amount"); //amount of a product

    let tot = document.querySelector("#ttot"); // total

    let roo = [...document.querySelectorAll(".pdt_row")]; // product info row

    // calculations

      let totarr = [];
    let div_len = roo.length;

    for (let it = 0; it < div_len; it++) {
    let qty1 = parseInt(qtys[it].innerHTML);
    let prices1 = parseInt(prices[it].innerHTML);
    let amt1 = parseInt(amt[it].innerHTML);

    amt1 += amt1;
    console.log(amt1[it]);

    minus = function () {
      let count = 0;
      if (true) {
        count++;
        qty1 -= count;
        amt1 = qty1 * prices1;
      }
      qtys[it].textContent = qty1;
      amt[it].textContent = amt1;
      tot.textContent = parseInt(amt1 + tot);

      // return
      console.log(qty1 + " " + prices1 + " " + amt1);
    };

    plus = function () {
      let count = 0;
      if (true) {
        count++;
        qty1 += count;
        amt1 = qty1 * prices1;
      }
      qtys[it].textContent = qty1;
      amt[it].textContent = amt1;
      tot.textContent = parseInt(amt1 + tot);
      console.log(qty1 + " " + prices1 + " " + amt1);
      
    };
}
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
    console.log(rowCount);
    can.textContent = pdts.length;
    if (rowCount == 0) {
        window.location = "home.html";
      }
            
        }  
      
