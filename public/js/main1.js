let monthlyInvestmentVar;
let monthlyInvestmentInputVar;

let returnRateVar;
let returnRateInputVar;

let timePeriodVar;
let timePeriodInputVar;

//common-function
function monthlyInvestmentTimePeriodFunction(){
    var investment  = parseInt(document.getElementById("monthlyInvestment").value);
    var rate        = parseInt(document.getElementById("returnRate").value);
    var years       = parseInt(document.getElementById("timePeriod").value);
    
    // console.log("investment", investment);
    // console.log("rate", rate);
    // console.log("years", years);

    var monthlyRate = rate / 12 / 100;
    var months = years * 12;
    var totalValue = 0;

    var totalInvestment = investment*rate*years*12;
        totalInvestment = totalInvestment/rate;

    totalValue = (investment * (1+monthlyRate) * ((Math.pow((1+monthlyRate),months)) - 1)/monthlyRate);

    totalReturn  = totalValue - totalInvestment;

    document.getElementById("totalValue").innerHTML = Math.round(totalValue).toLocaleString('en-IN');
    document.getElementById("totalInvestmentAmount").innerHTML = Math.round(totalInvestment).toLocaleString('en-IN');
    document.getElementById("totalReturn").innerHTML = Math.round(totalReturn).toLocaleString('en-IN');

    // console.log("totalInvestment", Math.round(totalInvestment));
    // console.log("totalValue", Math.round(totalValue));
    // console.log("totalReturn", Math.round(totalReturn));
}
function returnRateFunction(){
    var investment              = parseInt(document.getElementById("monthlyInvestment").value);
    var investmentAmountHTML    = parseInt(document.getElementById("totalInvestmentAmount").innerHTML.replace(/\,/g,''));
    var rate                    = parseInt(document.getElementById("returnRate").value);
    var years                   = parseInt(document.getElementById("timePeriod").value);

    investmentAmountHTML = parseInt(investmentAmountHTML);

    // console.log("investment", investment);
    // console.log("rate", rate);
    // console.log("years", years);
    
    var monthlyRate = rate / 12 / 100;
    var months = years * 12;
    var totalValue = 0;

    // var totalInvestment = (investment*rate*years) * 12;

    totalValue = (investment * (1+monthlyRate) * ((Math.pow((1+monthlyRate),months)) - 1)/monthlyRate);
    
    totalReturn  = totalValue - investmentAmountHTML;

    document.getElementById("totalValue").innerHTML = Math.round(totalValue).toLocaleString('en-IN');

    // document.getElementById("totalInvestmentAmount").innerHTML = Math.round(totalInvestment);

    document.getElementById("totalReturn").innerHTML = Math.round(totalReturn).toLocaleString('en-IN');

    // console.log("totalInvestment", Math.round(totalInvestment));
    // console.log("totalValue", Math.round(totalValue));
    // console.log("totalReturn", Math.round(totalReturn));
}
//common-function

//monthly-investment
function monthlyInvestment(e){
    monthlyInvestmentVar = e;
    document.getElementById("monthlyInvestmentInput").value = monthlyInvestmentVar;

    monthlyInvestmentTimePeriodFunction();
}
function monthlyInvestmentInput(e){
    monthlyInvestmentInputVar = e;
    document.getElementById("monthlyInvestment").value = monthlyInvestmentInputVar;

    monthlyInvestmentTimePeriodFunction();
}
//monthly-investment

//return-rate
function returnRate(e){
    returnRateVar = e;
    document.getElementById("returnRateInput").value = returnRateVar;

    returnRateFunction();
}
function returnRateInput(e){
    returnRateInputVar = e;
    document.getElementById("returnRate").value = returnRateInputVar;

    returnRateFunction();
}
//return-rate

//time-period
function timePeriod(e){
    timePeriodVar = e;
    document.getElementById("timePeriodInput").value = timePeriodVar;

    monthlyInvestmentTimePeriodFunction();
}
function timePeriodInput(e){
    timePeriodInputVar = e;
    document.getElementById("timePeriod").value = timePeriodInputVar;

    monthlyInvestmentTimePeriodFunction();
}
//time-period