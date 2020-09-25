document.addEventListener("DOMContentLoaded", function(){
  
  Total();
    
});
    
let roo = [...document.querySelectorAll(".pdt_row")]; // product info row

  let qtys = [...document.querySelectorAll(".qty")]; //quantity

  let prices = [...document.querySelectorAll(".Price")]; //prices

let  amt = [...document.querySelectorAll(".amount")]; //amount of a product

   // calculations
   let div_len = roo.length;

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
     
      total.textContent = Total();
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
     
      total.textContent = Total();
    }
};


    let pdts = [...document.querySelectorAll(".pdt_row")];

    let total = document.querySelector("#ttot"); // total
   
function Total(amt) {
   amt = [...document.querySelectorAll(".amount")]; //amount of a product

  let f_tot = 0;
   let amta =  amt.map(e=>{
     return parseInt(e.innerHTML);
   });

    f_tot = amta.reduce(( acc, cur ) => acc + cur,
        0
      );
      total.textContent = f_tot;
      return f_tot;
}

   /* cart figures */
    let can = document.querySelector("#cart_num");
    can.textContent = pdts.length;

/* Remove an item from the cart */
   function remov(btn) {
    
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);

    pdts = [...document.querySelectorAll(".pdt_row")];
    amt = [...document.querySelectorAll(".amount")]

    let tota = Total(amt);

    let rowCount = pdts.length;
    can.textContent = pdts.length;

    total.textContent = tota;

    if (rowCount == 0) {
        window.location = "home.html";
      }
        }  
        

     