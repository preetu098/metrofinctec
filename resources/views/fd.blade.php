@include('layout.header')


<style>
   #cardhover
    {
        transition:all 5s;
      border:0px;
    }
    #pms:hover 
    {
        transform:scale(0.9);
        transition:all 3s;
    }
#cardhover:hover 
{

transform:scale(1.1);
box-shadow:2px 2px 2px 2px black;
}
.cardborderless
{border:0px;}
    .icon {
  padding: 10px;
  background: dodgerblue;
  color: white;
  min-width: 50px;
  text-align: center;
}
.input-field:focus {
  border: 2px solid dodgerblue;
}
.input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.reveal.active{
  transform: translateY(0);
  opacity: 1;
}

.reveal1{
  position: relative;
  transform: translateX(150px);
  opacity: 0;
  transition: 1s all ease;
}

.reveal1.active{
  transform: translateX(0);
  opacity: 1;
}


.reveal2{
  position: relative;
  transform: translateX(-150px);
  opacity: 0;
  transition: 1s all ease;
}

.reveal2.active{
  transform: translateX(0);
  opacity: 1;
}
</style>
<script>
        function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
function reveal1() {
  var reveals1 = document.querySelectorAll(".reveal1");

  for (var i = 0; i < reveals1.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals1[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals1[i].classList.add("active");
    } else {
      reveals1[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal1);

function reveal2() {
  var reveals2 = document.querySelectorAll(".reveal2");

  for (var i = 0; i < reveals2.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals2[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals2[i].classList.add("active");
    } else {
      reveals2[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal2);

        </script>
<body class="page-opt-nocalc page basicpage">
    <!--<div class="home-page-layout cm-page-container">-->
    <!--    <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12" style="background-color:white">-->
    <!--        <div class="row">-->
    <!--            <div class="col-md-9">-->
    <!--                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">-->
    <!--                    <ol class="carousel-indicators">-->
    <!--                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>-->
    <!--                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>-->
    <!--                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>-->
    <!--                    </ol>-->
    <!--                    <div class="carousel-inner">-->
    <!--                    <div class="carousel-item active">-->
    <!--                            <img class="d-block w-100"-->
    <!--                                src="https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2019/10/Buyers-Guide-FD-min.jpg"-->
    <!--                                alt="First slide" style="height:300px">-->
    <!--                            <div class="carousel-caption d-none d-md-block">-->
    <!--                                <h5>...</h5>-->
    <!--                                <p>...</p>-->
    <!--                            </div>-->
    <!--                        </div>-->
    <!--                        <div class="carousel-item"> -->
    <!--                            <img class="d-block w-100"-->
    <!--                                src="https://paytmblogfinal.wpengine.com/wp-content/uploads/2022/04/2_Fixed-Deposit-FD-Vs-Public-Provident-Fund-PPF-Which-is-Better-800x500.png"-->
    <!--                                alt="Second slide" style="height:300px">-->
    <!--                        </div>-->
    <!--                        <div class="carousel-item">-->
    <!--                            <img class="d-block w-100"-->
    <!--                                src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?t=st=1656208835~exp=1656209435~hmac=89e658753d7e56b49f8e6e64db5fe5392db8e2320c053b534786134626ef8d69&w=826"-->
    <!--                                alt="Third slide" style="height:300px">-->
    <!--                            <div class="carousel-caption d-none d-md-block">-->
    <!--                                <h5>...</h5>-->
    <!--                                <p>...</p>-->
    <!--                            </div>-->
    <!--                        </div>-->
    <!--                    </div>-->
    <!--                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"-->
    <!--                        data-slide="prev">-->
    <!--                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
    <!--                        <span class="sr-only">Previous</span>-->
    <!--                    </a>-->
    <!--                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"-->
    <!--                        data-slide="next">-->
    <!--                        <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
    <!--                        <span class="sr-only">Next</span>-->
    <!--                    </a>-->
    <!--                </div>-->
    <!--            </div>-->

    <!--             <div class="col-md-3">-->
    <!--             <div class="container">-->
    <!--                <form style="padding: 15px;">-->
    <!--                <div class="form-group">-->
    <!--                        <label for="exampleInputEmail1">Name</label>-->
    <!--                        <input type="email" class="form-control" id="exampleInputEmail1"-->
    <!--                            aria-describedby="emailHelp" placeholder="Enter email">-->
                           
    <!--                    </div>-->
    <!--                    <div class="form-group">-->
    <!--                        <label for="exampleInputEmail1">Email address</label>-->
    <!--                        <input type="email" class="form-control" id="exampleInputEmail1"-->
    <!--                            aria-describedby="emailHelp" placeholder="Enter email">-->
                            
    <!--                    </div>-->
    <!--                    <div class="form-group">-->
    <!--                        <label for="exampleInputPassword1">Password</label>-->
    <!--                        <input type="password" class="form-control" id="exampleInputPassword1"-->
    <!--                            placeholder="Password">-->
    <!--                    </div>-->
                       
    <!--                    <button type="submit" class="btn btn-primary">Submit</button>-->
    <!--                </form>-->
    <!--            </div> -->
    <!--            </div>-->
    <!--        </section>-->
    <!--        </div>-->


    <!--    </div>-->

    <!--</div>-->
    
    <div class="home-page-layout cm-page-container">
        <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12" style="background-color:white">
            <div class="row">
                <div class="col-md-9">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                                <img class="d-block w-100"
                                    src="https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2019/10/Buyers-Guide-FD-min.jpg"
                                    alt="First slide" style="height:340px">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>
                                </div>
                            </div>
                            <div class="carousel-item"> 
                                <img class="d-block w-100"
                                    src="https://paytmblogfinal.wpengine.com/wp-content/uploads/2022/04/2_Fixed-Deposit-FD-Vs-Public-Provident-Fund-PPF-Which-is-Better-800x500.png"
                                    alt="Second slide" style="height:340px">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100"
                                    src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?t=st=1656208835~exp=1656209435~hmac=89e658753d7e56b49f8e6e64db5fe5392db8e2320c053b534786134626ef8d69&w=826"
                                    alt="Third slide" style="height:340px">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>

   
                @include('register_form') 
                </div>
        
            </div>


        </div>

    </div>
 
    
    
</section>
<section class="section-padding  doctors-team-style-2" style="    padding: 0px 0px 22px 0px;">
        <div class="container">
            <div class="section-header">
                <div class="section-heading " style="margin-top:50px">
                   <h3>Explore Fixed Deposit</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12 no-padding">
                    <div class="doctors-slider">
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box">
                                    <div class="lower-content p-relative text-center">
                                        <center>
                                        <img src="https://www.freeiconspng.com/thumbs/summary-png-icon/summary-icon-png-and-since-the-procedure-24.png" style="height:70px;width:70px"/>
                                        <h4 class="mt-5">OverView</h4>
                                     
                                        </center>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box">
                                    <div class="lower-content p-relative text-center">
                                    <center>
                                    <img src="https://icon-library.com/images/feature-icon/feature-icon-3.jpg" style="height:70px;width:70px"/>
                                    <h4 class="mt-5">Features</h4>
                                        
                                    </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box">
                                    <div class="lower-content p-relative text-center">
                                    <center>
                                    <img src="https://www.theconstructsim.com/wp-content/uploads/2021/01/Prerequisites-icon.png" style="height:70px;width:70px"/>
                                    <h4 class="mt-5">Eligility</h4>
                                    </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box">
                                    <div class="lower-content p-relative text-center">
                                    <center>
                                    <img src="https://cdn-icons-png.flaticon.com/512/3310/3310653.png" style="height:70px;width:70px"/>
                                    <h4 class="mt-5">How to Invest</h4>
                                       
                                    </center>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box">
                                    <div class="lower-content p-relative text-center">
                                    <center>
                                    <img src="https://cdn-icons-png.flaticon.com/512/2037/2037101.png" style="height:70px;width:70px"/>
                                    <h4 class="mt-5">Interest Rate</h4>
                                       
                                    </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box">
                                    <div class="lower-content p-relative text-center">
                                    <center>
                                    <img src="https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/Calculator.png" style="height:70px;width:70px"/>
                                    <h4 class="mt-5">Calculator</h4>
                                        
                                    </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box">
                                    <div class="lower-content p-relative text-center">
                                    <center>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/OOjs_UI_icon_articles-rtl-progressive.svg/1024px-OOjs_UI_icon_articles-rtl-progressive.svg.png" style="height:70px;width:70px"/>
                                    <h4 class="mt-5">Articles</h4>
                                        
                                    </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box">
                                    <div class="lower-content p-relative text-center">
                                    <center>
                                    <img src="https://static.thenounproject.com/png/2069228-200.png" style="height:70px;width:70px"/>
                                    <h4 class="mt-5">FAQs</h4>
                                        
                                    </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box">
                                    <div class="lower-content p-relative text-center">
                                    <center>
                                    <img src="https://icons.veryicon.com/png/o/miscellaneous/jiankangxian/contact-us-20.png" style="height:70px;width:70px"/>
                                    <h4 class="mt-5">Contact Us</h4>
                                        
                                    </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box">
                                    <div class="lower-content p-relative text-center">
                                    <center>
                                    <img src="https://icon-library.com/images/terms-and-conditions-icon/terms-and-conditions-icon-3.jpg" style="height:70px;width:70px"/>
                                    <h4 class="mt-5">Terms and Conditions</h4>
                                    </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="row mt-5 mb-5">
            <div class="col-md-6 col-lg-6">
                <center>
                <img src="https://www.ruloans.com/assets/img/FD/ICICI-FD.PNG" class="reveal1" style="height:300px;width:300px"/>
</center>
            </div>
            <div class="col-md-6 col-lg-6 reveal">
                <p>A fixed deposit, popularly known as an FD, is an investment system largely offered
by banks, as well as non-banking financial companies (NBFC) to support their
customers for saving money. It is a very beneficial system in fixed deposits, wherein
you can invest a sizeable amount of money at a pre-fixed rate of interest for a fixed
period. </p>
                <p>In a Fixed Deposit, a customer has to put an amount according to the minimum
and maximum limit of his bank for a fixed tenure at an agreed rate of interest. At
the end of the tenure, the customer receives the amount he has invested plus
compound interest. FDs are also called term deposits. 
</p>
                <button class="btn btn-warning text-white">Fixed Deposit</button>
             
            </div>
            

        </div>
    </section>
   <section style="background-image:url('https://cdn.pixabay.com/photo/2021/12/05/23/04/personality-6848950_960_720.png');background-repeat:no-repeat;background-size:cover">
    <div class="container-fluid" style="background-color:#3CB371;opacity:0.7">
        <br>
        <h4 class="mt-3" style="color:white;opacity:1">BENEFITS OF FIXED DEPOSITS</h4>
        <p style="color:white;font-family:Cursive;font-size:18px" class="reveal2">The main advantage of a fixed deposit is that it offers guaranteed returns. The rate
of interest offered to a customer when he opens a FD remains fixed throughout the
tenure. Despite changes in the market scenario the interest rates pre-decided for FD
remain the same. So, a customer need not worry about the upheavals in the economic
arena.</p>
<p style="color:white;font-family:Cursive;font-size:18px" class="reveal2">A customer can easily open an FD in the bank in which he has a savings account.
After opening a Fixed deposit, a client doesn’t have to worry about it till it matures. He
or she can also give maturity instructions for automatic renewal or get the maturity
amount credited directly to his account. If a customer selects a fixed deposit plan with
a reinvestment option, you will benefit from compound interest.
</p>
<p style="color:white;font-family:Cursive;font-size:18px" class="reveal2">Normally people who want to have a regular income from their savings go for fixed
deposits so that the interest which is deposited in their account gives them comfort
and security</p>
<br>
    </div>
   
   </section>




   <!--Table for fixed deposit-->
   <div class="section-padding lw-tab-section p-relative">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="lw-mega-tab">
                        <ul class="nav lw-nav-tabs">
                            <li class="nav-item"> <a href="#LOANLY-1" class="nav-link active" data-toggle="tab">
                           Senior Citizens
                                </a>
                            </li>
                            <li class="nav-item"> <a href="#LOANLY-2" class="nav-link" data-toggle="tab">
                           Non-Senior Citizens
                                </a>
                            </li>
                            
                            
                           
                           
                        </ul>
                        <div class="tab-content " >
                            <div class="tab-pane container active" id="LOANLY-1">
                               
                              <div class="row">
                            <div class="col-lg-6">
                            <table class="table table-hover"> 
 <tr style="color:white;background-color:#3CB371">
                                                        <th class="mt-5"><center>Period</center></th>
                                                        <th><center>Cumulative<br>At Maturity<br>(%p.a.)</center></th>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <td>12-23 months</td><td>5.85</td>
                                                    </tr>
                                                    <tr>
                                                        <td>24-35 months</td><td>6.60</td>
                                                    </tr>
                                                    <tr>
                                                        <td>36-60 months</td><td>7.20</td>
                                                    </tr>
                                                    <tr>
                                                        <td>15 month</td><td>6.05</td>
                                                    </tr>
                                                    <tr>
                                                        <td>18 months</td><td>6.15</td>
                                                    </tr>
                                                    <tr>
                                                        <td>22 months</td><td>6.30</td>
                                                    </tr>
                                                    <tr>
                                                        <td>30 months</td><td>6.70</td>
                                                    </tr>
                                                    <tr>
                                                        <td>33 months</td><td>6.95</td>
                                                    </tr>
                                                    <tr>
                                                        <td>44 months</td><td>7.35</td>
                                                    </tr>
                            </table>
                            </div>
                            <div class="col-lg-6">
                            <table class="table table-hover"> 
 <tr style="color:white;background-color:#3CB371">
 <tr style="color:white;background-color:#3CB371">
                                                        <th colspan="4"><center>Non-Cumulative</center></th>
</tr>
<tr style="color:white;background-color:#3CB371">
                                                        <th>Monthly</th>
                                                        <th>Quaterly</th>
                                                        <th>Half yearly</th>
                                                        <th>Annula</th>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <td>5.70</td>
                                                        <td>5.73</td>
                                                        <td>5.77</td>
                                                        <td>5.85</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.41</td>
                                                        <td>6.44</td>
                                                        <td>6.49</td>
                                                        <td>6.60</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.97</td>
                                                        <td>7.01</td>
                                                        <td>7.08</td>
                                                        <td>7.20</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5.89</td>
                                                        <td>5.92</td>
                                                        <td>5.96</td>
                                                        <td>6.05</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5.98</td>
                                                        <td>6.01</td>
                                                        <td>6.06</td>
                                                        <td>6.15</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.13</td>
                                                        <td>6.16</td>
                                                        <td>6.20</td>
                                                        <td>6.30</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.50</td>
                                                        <td>6.54</td>
                                                        <td>6.59</td>
                                                        <td>6.70</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.74</td>
                                                        <td>6.78</td>
                                                        <td>6.83</td>
                                                        <td>6.95</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7.11</td>
                                                        <td>7.16</td>
                                                        <td>7.22</td>
                                                        <td>7.35</td>
                                                    </tr>

                            </table>
                            </div>
                              </div>
                                                  
                            </div>
                            <div class="tab-pane fade container" id="LOANLY-2">
                               
                            <div class="row">
                            <div class="col-lg-6">
                            <table class="table table-hover"> 
 <tr style="color:white;background-color:#3CB371">
                                                        <th class="mt-5"><center>Period</center></th>
                                                        <th><center>Cumulative<br>At Maturity<br>(%p.a.)</center></th>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <td>12-23 months</td><td>6.10</td>
                                                    </tr>
                                                    <tr>
                                                        <td>24-35 months</td><td>6.85</td>
                                                    </tr>
                                                    <tr>
                                                        <td>36-60 months</td><td>7.45</td>
                                                    </tr>
                                                    <tr>
                                                        <td>15 month</td><td>6.30</td>
                                                    </tr>
                                                    <tr>
                                                        <td>18 months</td><td>6.40</td>
                                                    </tr>
                                                    <tr>
                                                        <td>22 months</td><td>6.55</td>
                                                    </tr>
                                                    <tr>
                                                        <td>30 months</td><td>6.95</td>
                                                    </tr>
                                                    <tr>
                                                        <td>33 months</td><td>7.20</td>
                                                    </tr>
                                                    <tr>
                                                        <td>44 months</td><td>7.60</td>
                                                    </tr>
                            </table>
                            </div>
                            <div class="col-lg-6">
                            <table class="table table-hover"> 
 <tr style="color:white;background-color:#3CB371">
 <tr style="color:white;background-color:#3CB371">
                                                        <th colspan="4"><center>Non-Cumulative</center></th>
</tr>
<tr style="color:white;background-color:#3CB371">
                                                        <th>Monthly</th>
                                                        <th>Quaterly</th>
                                                        <th>Half yearly</th>
                                                        <th>Annula</th>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <td>5.94</td>
                                                        <td>5.97</td>
                                                        <td>6.01</td>
                                                        <td>6.10</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.64</td>
                                                        <td>6.68</td>
                                                        <td>6.74</td>
                                                        <td>6.85</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7.21</td>
                                                        <td>7.25</td>
                                                        <td>7.32</td>
                                                        <td>7.45</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.13</td>
                                                        <td>6.16</td>
                                                        <td>6.20</td>
                                                        <td>6.30</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.22</td>
                                                        <td>6.25</td>
                                                        <td>6.30</td>
                                                        <td>6.40</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.36</td>
                                                        <td>6.40</td>
                                                        <td>6.45</td>
                                                        <td>6.55</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.74</td>
                                                        <td>6.78</td>
                                                        <td>6.83</td>
                                                        <td>6.95</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.97</td>
                                                        <td>7.01</td>
                                                        <td>7.08</td>
                                                        <td>7.20</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7.35</td>
                                                        <td>7.39</td>
                                                        <td>7.46</td>
                                                        <td>7.60</td>
                                                    </tr>

                            </table>
                            </div>
                            </div>
                           
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                <img src="https://www.pngall.com/wp-content/uploads/2017/05/Disclaimer-Symbol-Transparent.png" style="height:70px;width:100px"/>
                <h4>Exciting Update! Fixed Deposit rates are revised upwards w.e.f June 14,2022.Now start investing and earn higher returns of up to 7.60% p.a. T & C apply . To check the  latest Fixed Deposit interst rates <font color='red'><a href="">click here</a></font></h4>
</div></div>
            </div>
        </div>
    </div>
</div>
</div>
@include('layout.logofooter')
@include('layout.mutualfundfooter')
@include('layout.footer')