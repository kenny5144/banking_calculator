// var principle;
// var monthlyPrincipal;
// var monthyIntrest ;

"use strict"
window.onload = init;

function init (){
    const calculate = document.getElementById("calc");
    calculate.onclick = calculateButtonClicked;
}
function calculateButtonClicked(){
    const Principal =  document.getElementById("Principal").value;
    const Rate =  document.getElementById("Rate").value;
    const loanLenght =  document.getElementById("lenght").value;
    const monthPaid =  document.getElementById("paid").value;

    var monthlyPrincipal = Principal * Rate * (1 + Rate)**monthPaid/(1 + Rate)** monthPaid -1 ;
    var intrestTotal = monthlyPrincipal - Principal;
    
   const monthly = document.getElementById("monthlyPayment");
   monthly.innerHTML = "The monthly payment is " + monthlyPrincipal;
   
   const interest = document.getElementById("InteresttoPay");
   interest.innerHTML = "The intrest to pay is  " + intrestTotal;

}