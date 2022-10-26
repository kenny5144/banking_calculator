"Use Strict"
window.onload = init;
function init(){
    const calculate = document.getElementById("calc");
    calculate.onclick= calculateButtonClicked;
}

function calculateButtonClicked(){
    const payment = document.getElementById("Payment").value;
    const rateYearlyWhole = document.getElementById("Interest").value;
    const years = document.getElementById("Years").value;
    const time = document.getElementById("Time").value;

    //This will be the yearly rate as a fraction, 4% will become 0.04
    let rateYearlyFraction = rateYearlyWhole / 100;
    let rateAnnuallyFraction = rateYearlyFraction /1
    

    if (time =="monthly")
    {
        //This will be the montly interest rate as a fraction (4% would become 0.03333) )
        let rateMonthlyFraction = rateYearlyFraction / 12;
        var presentValue = payment * (1-(1+rateMonthlyFraction)**-(12*years) /rateMonthlyFraction);
    }
    else if (time == "annually"){
         let rateAnnuallyFraction = rateYearlyFraction /1
        var presentValue = payment * (1-(1+rate)**-(1*years) /rate);
    }else if (time == "semi annually"){
        let rateSemiAnnuallyFraction = rateYearlyFraction /2
        var presentValue = payment * (1-(1+rateSemiAnnuallyFraction)**-(2*years) /rateSemiAnnuallyFraction);
    }else if (time == "Quaterly"){
        let rateQuaterlyFraction = rateYearlyFraction /4
        var presentValue = payment * (1-(1+rateQuaterlyFraction)**-(4*years) /rateQuaterlyFraction);
    }
    const value= document.getElementById("PresentValue")
    value.innerHTML= presentValue
}