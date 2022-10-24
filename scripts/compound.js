// var principal;
// var rate;
// var timeLenght;
// var apy(%);
 "use strict"
window.onload = init;
function init (){
    
    const calculate = document.getElementById("calculate");
    calculate.onclick=calculateButtonClicked;
    
}

function calculateButtonClicked()
{
    const depositElement =  document.getElementById("deposit");
    const deposit = depositElement.value;


    const termLenght = document.getElementById("time").value;
    
    const APY = document.getElementById("apy").value;
    var totalIntrest = deposit*(1 + (APY/termLenght) )**(termLenght * APY);
    var intrestGained = totalIntrest - deposit;

     const totalPayment = document.getElementById("Totalpayment");
     totalPayment.innerHTML = "Total Payment: " + totalIntrest;



    document.getElementById("intrestamount").innerHTML = "Intrest Gained: " + intrestGained;
}

