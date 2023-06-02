var invest=10000
document.getElementById("ti").innerHTML="<Center> Rs "+invest+"</center>";
document.getElementById("tii").innerHTML="<Center> Rs "+invest+"</center>";
function addInvest()
{
    invest+=10000
    document.getElementById("ti").innerHTML="<center> Rs "+invest+"</center>";
    document.getElementById("tii").innerHTML="<Center> Rs "+invest+"</center>";
}

function lessInvest()
{
    if(invest>10000)
    {
        invest-=10000
        document.getElementById("ti").innerHTML="<center> Rs "+invest+"</center>";
        document.getElementById("tii").innerHTML="<Center> Rs "+invest+"</center>";
    }
}

var withd=500
document.getElementById("ti2").innerHTML="<Center> Rs "+withd+"</center>"; 
function addWithdrawl()
{
    withd+=500
    document.getElementById("ti2").innerHTML="<Center> Rs "+withd+"</center>"; 
}

function lessWithdrawl()
{
    if(withd>500)
    {
        withd-=500
        document.getElementById("ti2").innerHTML="<center> Rs "+withd+"</center>";
    }
}

var rate=1
document.getElementById("ti3").innerHTML="<Center> "+rate.toFixed(1)+"  %</center>"; 
function addRate()
{
    rate+=.1
    document.getElementById("ti3").innerHTML="<Center> "+rate.toFixed(1)+"  %</center>"; 
}
function lessRate()
{
     if(rate>1)
    {
        rate-=.1
        document.getElementById("ti3").innerHTML="<Center> "+rate.toFixed(1)+"  %</center>"; 
    }
}
var period=1
document.getElementById("ti4").innerHTML="<center>"+period+" Yr</center>";

function addPeriod()
{
    period+=1
    document.getElementById("ti4").innerHTML="<Center> "+period+" Yr</center>"; 
}
function lessPeriod()
{
    if(period>1)
    {
        period-=1
        document.getElementById("ti4").innerHTML="<Center> "+period+" Yr</center>"; 
    }
}

