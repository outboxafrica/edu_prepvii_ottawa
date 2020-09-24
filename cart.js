document.addEventListener("DOMContentLoaded", function () {

    let qtys = [...document.querySelectorAll(".qty")]; //quantity

    let prices = [...document.querySelectorAll(".price")]; //prices

    let amt = [...document.querySelectorAll(".amount")]; //amount of a product

    let total = document.querySelector("#ttot"); // total

    let roo = [...document.querySelectorAll(".pdt_row")]; // product info row

    // calculations
    
    let div_len = roo.length;
let totarr = [],f_tot;


    for(let i=0; i<div_len;i++){
        totarr.push(parseInt(amt[i].innerHTML));
    }
    f_tot = totarr.reduce(( acc, cur ) => acc + cur,
    0
  );

  total.textContent = f_tot;

    minus = function () {
      let count = 0;
      for (let it = 0; it < div_len; it++) {
        let qty1 = parseInt(qtys[it].innerHTML);
        let prices1 = parseInt(prices[it].innerHTML);
        let amt1 = parseInt(amt[it].innerHTML);
        let tot = parseInt(total.innerHTML);
      if (true) {
        count++;
        qty1 -= count;
        amt1 = qty1 * prices1;
      }
      qtys[it].textContent = qty1;
      amt[it].textContent = amt1;
      tot +=amt1;
      total.textContent = tot;
    }
    };

    plus = function () {
      let count = 0;
      for (let it = 0; it < div_len; it++) {
        let qty1 = parseInt(qtys[it].innerHTML);
        let prices1 = parseInt(prices[it].innerHTML);
        let amt1 = parseInt(amt[it].innerHTML);
        let tot = parseInt(total.innerHTML);
      if (true) {
        count++;
        qty1 += count;
        amt1 = qty1 * prices1;
      }
      qtys[it].textContent = qty1;
      amt[it].textContent = amt1;
      tot +=amt1; 
      console.log(tot);
      total.textContent = tot;
    }
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
        