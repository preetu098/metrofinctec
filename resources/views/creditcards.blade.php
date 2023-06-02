@include('layout.header')

<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"> -->
<style>
    @import url('https://fonts.googleapis.com/css2?family=Asap&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Asap", sans-serif;
}
#sbccard:hover 
{
  
  opacity:0.7;
 
}

section:nth-child(1){
  color:green;
  }
section:nth-child(2){
  color: #42455a;
  background: #e0ffff;
} 
section:nth-child(3){
  color: #e0ffff;
}
section:nth-child(4){
  color: #42455a;
  background: #e0ffff;
}

section h1{
  font-size: 3rem;
  margin: 20px;
}
section h2{
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
}
section .text-container{
   display: flex;
}
section .text-container .text-box{
  margin: 20px;
  padding: 20px;
  /* background:#F2994A; */

}
section .text-container .text-box h3{
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
}

@media (max-width: 900px){
  section h1{
    font-size: 2rem;
    text-align: center;
  }
  section .text-container{
    flex-direction: column;
  }
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
        </script>
  <body class="page-opt-nocalc page basicpage">
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
                                    src="https://img.freepik.com/free-vector/mobile-banking-app-epayment-by-smartphone-electronic-credit-card-phone-wallet-online-banking_3482-5772.jpg?w=996"
                                    alt="Second slide" style="height:340px">
                            </div>

                            <div class="carousel-item"> 
                                <img class="d-block w-100"
                                    src="https://img.freepik.com/free-vector/3d-mobile-phone-with-gold-coin-digital-transfer-into-credit-card-online-payment-transaction-concept-business-mobile-app-banner-cartoon-realistic-style-vector-illustration_257312-2115.jpg?w=900"
                                    alt="Second slide" style="height:340px">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100"
                                    src="https://img.freepik.com/free-vector/vector-illustration-realistic-style-concept-mobile-payments-using-application-your-smartphone_1441-231.jpg?t=st=1656318802~exp=1656319402~hmac=f7b153be7afc6611ef66e8b0707cac7cd5c054ee7cb0ba3a555bdf5d2621a52b&w=740"
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
            </section>
            </div>


        </div>
</div>
    </div>

</section>
<!-- <section>
  <div class="container">
<ul class="nav nav-tabs" role="tablist">
    <li><a href="#sbc" role="tab" data-toggle="tab"><img src="https://www.ctoscredit.com.my/creditfinder/wp-content/uploads/2022/03/standard-chartered-bank-new-20211713.jpg" style="height:200px;width:200px;"/></a></li>
    <li><a href="#sbi" role="tab" data-toggle="tab"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG13cSEX5MTu2Amr_PtDHAfyr8RmGnYAe0-g&usqp=CAU" style="height:200px;width:200px;"/></a></li>
    <li><a href="#icici" role="tab" data-toggle="tab"><img src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2021/06/05061407/ICICI-Bank-introduces-%E2%80%98FD-Health%E2%80%99.jpg" style="height:200px;width:200px;"/></a></li>
    <li><a href="#hdfc" role="tab" data-toggle="tab">
      <img src="https://medy365.in/images/Hdfc.png" style="height:200px;width:300px;"/>
    </a></li>
    <li><a href="#yes" role="tab" data-toggle="tab"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Yes_Bank_logo.svg/1200px-Yes_Bank_logo.svg.png" style="height:200px;width:200px;"/></a></li>
</ul>
</div>
</section> -->
<section>
  <div class="container">
    <div class="row">
      <h3 class="mt-5">Credit Cards</h3>
    </div>
      <div class="row">
        <div class="col-lg-3">
        <a href="#sbc" role="tab" data-toggle="tab">
            <div class="card">
              <div class="card-body">
              <img src="https://cdn-icons-png.flaticon.com/512/196/196575.png" style="height:100px;width:100px"/>
                  </div>

          <div class="card-header">

            <h4>Standard Charted </h4>
          </div>
                      </div>
          </a>
                  </div>
        <div class="col-lg-3">
        <a href="#sbi" role="tab" data-toggle="tab">
            <div class="card">
            <div class="card-body">
              <img src="https://bfsi.eletsonline.com/wp-content/uploads/2017/05/sbi-cards-1.png" style="height:100px;width:100px"/>
</div>

<div class="card-header">

  <h4>SBI </h4>
</div>
            </div>
</a>
        </div>
        <div class="col-lg-3">
        <a href="#icici" role="tab" data-toggle="tab">
            <div class="card">
                <div class="card-body">
              <img src="https://i0.wp.com/logotaglines.com/wp-content/uploads/2016/08/ICICI-Logo.png?fit=386%2C395&ssl=1" style="height:100px;width:100px"/>
</div>

<div class="card-header">

  <h4>ICICI </h4>
</div>
            </div>
</a>
        </div>
        <div class="col-lg-3">
        <a href="#hdfc" role="tab" data-toggle="tab">
            <div class="card">
            <div class="card-body">
              <img src="https://www.equitypandit.com/wp-content/uploads/2018/03/hdfc.jpg" style="height:100px;width:100px"/>
</div>
<div class="card-header">

  <h4>HDBC</h4>
</div>
            </div>
        </div>
</a>
      </div>
  </div>
</section>
<section>
  <div class="container">
  <div class="tab-content">
      <div class="tab-pane active" id="sbc">
            <div class="container">
                <div class="row mt-5">
                  <div class="col-lg-4 mt-5" id="sbccard">
                  <center>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/ola-282225.png" style="height:100px;width:100px;"/>
                   <h4>15% cashback at OLA</h4></center>
                  </div>
                  <div class="col-lg-4 mb-5" id="sbccard">
                  <center>
                    <img src="https://seeklogo.com/images/M/myntra-logo-B3C45EAD5C-seeklogo.com.png" style="height:100px;width:100px;"/>
                    <h4>20% cashback at Myntra</h4>
</center>
                  </div>
                  <div class="col-lg-4  mt-5" id="sbccard">
                    <center>
                    <img src="https://theplugmedia.in/wp-content/uploads/2020/06/inox.png" style="height:100px;width:100px;"/>
                    <h4>Buy One Get One</h4>
</center>
                  </div>
                </div>


                <div class="row mt-5">
                  <div class="col-lg-4 mt-5" id="sbccard">
                    <Center>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Zomato_Logo.png" style="height:100px;width:100px;"/>
                    <h4>15% off at zomato</h4>
</center>
                  </div>
                  <div class="col-lg-4 mb-5" id="sbccard">
                    <center>
                    <img src="http://faridabadfin.com/wp-content/uploads/2022/04/scb_11zon.jpg" style="height:200px;width:200px;"/>
</center>
                  </div>
                  <div class="col-lg-4  mt-5" id="sbccard">
                    <center>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Blinkit-yellow-app-icon.svg/3500px-Blinkit-yellow-app-icon.svg.png" style="height:100px;width:100px;"/>

                    <h4>20% off</h4></center>
                  </div>
                </div>
                <div class="row">
                    <div class="col-lg-12" id="sbccard">
                      <center>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Yatra_logo.svg/2560px-Yatra_logo.svg.png" style="height:100px;width:100px;"/>
                          <h4>Upto 20% off</h4>
                      </center>
                    </div>
                </div>
            </div>
      </div>
      <div class="tab-pane" id="sbi">
           <div class="container mt-5">
                <div class="row">
                <nav class="navbar navbar-expand-sm bg-light navbar-light">
                  <div class="container-fluid">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link active" href="#tab1" role="tab" data-toggle="tab"><img src="https://icons-for-free.com/download-icon-bar+beverage+drink+lifestyle+straw+wine+icon-1320185864732778943_512.png" style="height:50px;width:50px"/>LifeStyle Cards</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#tab2" role="tab" data-toggle="tab"><img src="https://static.thenounproject.com/png/2434642-200.png" style="height:50px;width:50px"/>Reward Cards</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#tab3" role="tab" data-toggle="tab">
                          <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" style="height:50px;width:50px"/>Shopping Cards</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#tab4" role="tab" data-toggle="tab"><img src="https://cdn1.iconfinder.com/data/icons/car-dashboard-part-2/100/fuel-in-water-512.png" style="height:50px;width:50px"/>Travel & Fule Cards</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#tab5" role="tab" data-toggle="tab"><img src="https://cdn4.iconfinder.com/data/icons/digital-banking-and-finance/64/Private-Banking-shareholder-partner-business-512.png" style="height:50px;width:50px"/>Banking PartnerShip Cards</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#tab6" role="tab" data-toggle="tab"><img src="https://cdn-icons-png.flaticon.com/512/46/46789.png" style="height:50px;width:50px"/>Business Cards</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#tab7" role="tab" data-toggle="tab"><img src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-2-1/512/cards-512.png" style="height:50px;width:50px"/>All Cards</a>
                      </li>
                    </ul>
                  </div>
              </nav>
                </div>
                <div class="row">
                  <div class="tab-content">
                  <div class="tab-pane active" id="tab1" role="tabpanel">
                  
                    <div class="container">
                 
                        <div class="row mt-4">
                          <div class="col-lg-4">
          <img src="https://www.sbicard.com/sbi-card-en/assets/media/images/corporate/cards/travel-entertainment-cards/sbi-signature-corporate-card/card-faces/sbi-signature-corporate-card.jpg" style="height:200px;width:400px;"/>
          <button class="btn btn-info mt-5" >Apply Now</button>
              <div class="row">
                      <div class="col-md-12">
                        <h4>SBI Card ELITE</h4>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbspWelcome a Gift Voucher worth Rs 5,000 on joining.
                        </div>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbspGet Free Movie Tickets worth Rs 6,000 every year
                        </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Earn Upto 50,000 Bonus Reward Points worth Rs 12,500/year
                          </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Complimentary membership to Club Vistara and Trident Privilege Program.
                          </div>
                         </div>
              </div>
                          </div>
                          <div class="col-lg-4">
                          </div>
                          <div class="col-lg-4">
<img src="https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/lifestyle/card-faces/sbi-card-pulse-card-face-front.png" style="height:200px;width:400px;"/>
 <button class="btn btn-info mt-5">Apply Now</button>
 <div class="row">
                <div class="col-md-12">
                  <h4>SBI Card PULSE</h4>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp Noise Color Fit Pulse Smartwatch worth Rs. 4,999 on payment of joining fees.
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 12 Month Membership for FITPASS and Netmeds First Pass on payment of joining fee and card activation
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 5X Reward Points on Chemist, Pharmacy, Dining and Movie Spends
                  </div>
                  
                </div>
              </div>
                          </div>
                        </div>
                        
                    </div>

                  </div>
                  <div class="tab-pane" id="tab2" role="tabpanel">
                  <div class="container">
                  
                        <div class="row mt-4">
                          <div class="col-lg-4">
          <img src="https://www.paisabazaar.com/wp-content/uploads/2017/10/SBI-SimplySAVE-Credit-Card.png" style="height:200px;width:400px;"/>
          <button class="btn btn-info mt-5">Apply Now</button>
          <div class="row">
                      <div class="col-md-12">
                        <h4>SBI Card ELITE</h4>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbspWelcome a Gift Voucher worth Rs 5,000 on joining.
                        </div>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbspGet Free Movie Tickets worth Rs 6,000 every year
                        </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Earn Upto 50,000 Bonus Reward Points worth Rs 12,500/year
                          </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Complimentary membership to Club Vistara and Trident Privilege Program.
                          </div>
                         </div>
              </div>
                          </div>
                          <div class="col-lg-4">
                          </div>
                          <div class="col-lg-4">
<img src="https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/card-faces/apollo-sbi-card/apollo-sbi-card-face.png" style="height:200px;width:400px;"/>
 <button class="btn btn-info mt-5">Apply Now</button>
 <div class="row">
                <div class="col-md-12">
                  <h4>SBI Card PULSE</h4>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp Noise Color Fit Pulse Smartwatch worth Rs. 4,999 on payment of joining fees.
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 12 Month Membership for FITPASS and Netmeds First Pass on payment of joining fee and card activation
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 5X Reward Points on Chemist, Pharmacy, Dining and Movie Spends
                  </div>
                </div>
                          </div>
                        </div>
</div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab3" role="tabpanel">
                  <div class="container">
               
                        <div class="row mt-4">
                          <div class="col-lg-4">
          <img src="https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/card-faces/apollo-sbi-card/apollo-sbi-card-face.png"style="height:200px;width:400px;" />
          <button class="btn btn-info mt-5">Apply Now</button>
          <div class="row">
                      <div class="col-md-12">
                        <h4>SBI Card ELITE</h4>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbspWelcome a Gift Voucher worth Rs 5,000 on joining.
                        </div>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbspGet Free Movie Tickets worth Rs 6,000 every year
                        </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Earn Upto 50,000 Bonus Reward Points worth Rs 12,500/year
                          </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Complimentary membership to Club Vistara and Trident Privilege Program.
                          </div>
                         </div>
              </div>
                          </div>
                          <div class="col-lg-4">
                          </div>
                          <div class="col-lg-4">
<img src="https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/lifestyle/card-faces/sbi-card-pulse-card-face-front.png" style="height:200px;width:400px;"/>
 <button class="btn btn-info mt-5">Apply Now</button>
 <div class="row">
                <div class="col-md-12">
                  <h4>SBI Card PULSE</h4>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp Noise Color Fit Pulse Smartwatch worth Rs. 4,999 on payment of joining fees.
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 12 Month Membership for FITPASS and Netmeds First Pass on payment of joining fee and card activation
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 5X Reward Points on Chemist, Pharmacy, Dining and Movie Spends
                  </div>
                </div>
                          </div>
                          </div>
                        </div>
                    
                    </div>
                  </div>
                  <div class="tab-pane" id="tab4" role="tabpanel">
                  <div class="container">
                  
                        <div class="row mt-4">
                          <div class="col-lg-4">
          <img src="https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/lifestyle/card-faces/sbi-card-pulse-card-face-front.png"style="height:200px;width:400px;" />
          <button class="btn btn-info mt-5" >Apply Now</button>
          <div class="row">
                      <div class="col-md-12">
                        <h4>SBI Card ELITE</h4>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbspWelcome a Gift Voucher worth Rs 5,000 on joining.
                        </div>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbspGet Free Movie Tickets worth Rs 6,000 every year
                        </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Earn Upto 50,000 Bonus Reward Points worth Rs 12,500/year
                          </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Complimentary membership to Club Vistara and Trident Privilege Program.
                          </div>
                         </div>
              </div>
                          </div>
                          <div class="col-lg-4">
                          </div>
                          <div class="col-lg-4">
<img src="https://livefromalounge.com/wp-content/uploads/2017/11/sbi-signature-card.png" style="height:200px;width:400px;"/>
 <button class="btn btn-info mt-5" >Apply Now</button>
 <div class="row">
                <div class="col-md-12">
                  <h4>SBI Card PULSE</h4>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp Noise Color Fit Pulse Smartwatch worth Rs. 4,999 on payment of joining fees.
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 12 Month Membership for FITPASS and Netmeds First Pass on payment of joining fee and card activation
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 5X Reward Points on Chemist, Pharmacy, Dining and Movie Spends
                  </div>
                </div>
                          </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                  <div class="tab-pane" id="tab5" role="tabpanel">
                  <div class="container">
                  
                        <div class="row mt-4">
                          <div class="col-lg-4">
          <img src="https://image3.mouthshut.com/images/imagesp/925806358s.jpg"style="height:200px;width:400px;" />
          <button class="btn btn-info mt-5">Apply Now</button>
          <div class="row">
                      <div class="col-md-12">
                        <h4>SBI Card ELITE</h4>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbspWelcome a Gift Voucher worth Rs 5,000 on joining.
                        </div>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbspGet Free Movie Tickets worth Rs 6,000 every year
                        </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Earn Upto 50,000 Bonus Reward Points worth Rs 12,500/year
                          </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Complimentary membership to Club Vistara and Trident Privilege Program.
                          </div>
                         </div>
              </div>
         
                          </div>
                          <div class="col-lg-4">
                          </div>
                          <div class="col-lg-4">
<img src="https://askmehindi.com/wp-content/uploads/2017/05/sbi-platinum-international-debit-card.png" style="height:200px;width:400px;"/>
 <button class="btn btn-info mt-5">Apply Now</button>
 <div class="row">
                <div class="col-md-12">
                  <h4>SBI Card PULSE</h4>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp Noise Color Fit Pulse Smartwatch worth Rs. 4,999 on payment of joining fees.
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 12 Month Membership for FITPASS and Netmeds First Pass on payment of joining fee and card activation
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 5X Reward Points on Chemist, Pharmacy, Dining and Movie Spends
                  </div>
                </div>
                          </div>
                          </div>
                        </div>
                     
                    </div>
                  </div>
                  <div class="tab-pane" id="tab6" role="tabpanel">
                  <div class="container">
                
                        <div class="row mt-4">
                          <div class="col-lg-4">
          <img src="https://i.ytimg.com/vi/CLWEs8JUn1M/hqdefault.jpg"style="height:200px;width:400px;" />
          <button class="btn btn-info mt-5">Apply Now</button>
          <div class="row">
                      <div class="col-md-12">
                        <h4>SBI Card ELITE</h4>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbspWelcome a Gift Voucher worth Rs 5,000 on joining.
                        </div>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbspGet Free Movie Tickets worth Rs 6,000 every year
                        </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Earn Upto 50,000 Bonus Reward Points worth Rs 12,500/year
                          </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Complimentary membership to Club Vistara and Trident Privilege Program.
                          </div>
                         </div>
              </div>
                          </div>
                          <div class="col-lg-4">
                          </div>
                          <div class="col-lg-4">
<img src="https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/paytm-sbi-card/paytm-select-card-face.png" style="height:200px;width:400px;"/>
 <button class="btn btn-info mt-5">Apply Now</button>
 <div class="row">
                <div class="col-md-12">
                  <h4>SBI Card PULSE</h4>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp Noise Color Fit Pulse Smartwatch worth Rs. 4,999 on payment of joining fees.
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 12 Month Membership for FITPASS and Netmeds First Pass on payment of joining fee and card activation
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 5X Reward Points on Chemist, Pharmacy, Dining and Movie Spends
                  </div>
                </div>
                          </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                  <div class="tab-pane" id="tab7" role="tabpanel">
                  <div class="container">
                   
                        <div class="row mt-4">
                          <div class="col-lg-4">
          <img src="https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/value-savings/card-faces/sbi-unati.png"style="height:200px;width:400px;" />
          <button class="btn btn-info mt-5">Apply Now</button>
          <div class="row">
                      <div class="col-md-12">
                        <h4>SBI Card ELITE</h4>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbspWelcome a Gift Voucher worth Rs 5,000 on joining.
                        </div>
                        <div class="mt-5">
                        <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbspGet Free Movie Tickets worth Rs 6,000 every year
                        </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Earn Upto 50,000 Bonus Reward Points worth Rs 12,500/year
                          </div>
                          <div class="mt-5">
                          <span class="glyphicon glyphicon-hand-right"></span> &nbsp&nbsp Complimentary membership to Club Vistara and Trident Privilege Program.
                          </div>
                         </div>
              </div>
                          </div>
                          <div class="col-lg-4">
                          </div>
                          <div class="col-lg-4">
<img src="https://media.news9live.com/h-upload/2022/05/17/365293-sbicreditcard.webp"style="height:200px;width:400px;" />
 <button class="btn btn-info mt-5">Apply Now</button>
 <div class="row">
                <div class="col-md-12">
                  <h4>SBI Card PULSE</h4>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp Noise Color Fit Pulse Smartwatch worth Rs. 4,999 on payment of joining fees.
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 12 Month Membership for FITPASS and Netmeds First Pass on payment of joining fee and card activation
                  </div>
                  <div class="mt-5">
                  <span class="glyphicon glyphicon-hand-right"></span>&nbsp&nbsp 5X Reward Points on Chemist, Pharmacy, Dining and Movie Spends
                  </div>
                </div>
                          </div>
                          </div>
                        </div>
                       
                    </div>
                  </div>
                  </div>
                </div>
           </div>
      </div>
      <div class="tab-pane" id="icici">
            <div class="container mt-5">
                <div class="row mt-5">
                    <div class="col-md-4 mt-5">
                      <h3 class="text-primary">Credit Card</h3>
                              <h4 style="color:black">ICICI Bank Credit Cards offers a host of benefits, offers & features to cater to your needs. So get the Credit Card of your choice by browsing through the Credit Card section.</h4>
                              <button class="btn btn-warning mt-5">Get Credit Card</button>
                    </div>  
                    <div class="col-md-8 mt-5">
                        <div class="container">
                            <div class="card bg-danger" style="height:300px;width:600px;border-radius:10px;">
                            <div class="row">
                                    <div class="col-lg-1" ></div>
                                    <div class="col-lg-3 mt-3" ><h5 style='color:white'>Net Annual Income</h5></div>
                                    <div class="col-lg-6 mt-3" ><h5>Net Annual Income</h5></div>
                                    <div class="col-lg-2" ></div>
                            </div>
                          </div>      
                      </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div class="tab-pane" id="hdfc">
           <div class="container mt-5">
              <table class="table"> 
                  <tr>
                    <td><img src="https://www.coles.com.au/content/dam/coles/about-coles/flybuys/icons/flybuys-top-up-icon-470x282px.svg" style="height:100px;width:100px"/>
                  <p>Exclusive Rewards Points</p></td>
                    <td><img src="https://static.vecteezy.com/system/resources/previews/003/537/675/original/outline-hand-and-credit-card-icon-vector.jpg" style="height:100px;width:100px"/>
                    <p>Lifetime Free Credit Cards</p></td></td>
                  </tr>
                
                  <tr>
                    <td><img src="https://cdn.iconscout.com/icon/free/png-256/cashback-4587891-3803398.png" style="height:100px;width:100px"/>
                    <p>Great Cashbacks</p></td></td>
                    <td><img src="https://static.thenounproject.com/png/182226-200.png" style="height:100px;width:100px"/>
                    <p>Gift Vouchers</p></td></td>
                  </tr>
                  <tr>
                    <td><img src="https://thumbs.dreamstime.com/b/quick-easy-loan-fast-money-providence-icon-vector-illustration-easy-instant-credit-loan-payment-fast-money-icon-finance-quick-160008758.jpg" style="height:100px;width:100px"/>  <p>Improve Credit Score with Timely Payments</p></td></td>
                    <td><img src="https://cdn2.iconfinder.com/data/icons/maki/100/fuel-512.png" style="height:100px;width:100px"/>
                    <p>Up To 50 Liters of Free Fuel Anuualy</p></td></td>
                  </tr>
                 
              </table>
              
           </div>
      </div>
      <div class="tab-pane" id="yes">
            <h2>Welcome in YES</h2>
      </div>

  </div>  
</div>
</section>
<!--  -->
   

<section>
    <div class="container">
        <div class="">

        </div>
    </div>
</section>
    <section>
  <div class="container reveal">
  
    <div class="text-container">
      <div class="text-box" style="max-width:250px">
      <img src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_63,h_63/https://www.siliceo.es/wp-content/uploads/2021/04/icon.png" style="height:100px;width:100px"/>
        <h3 style="color:black">Standard Carted</h3>
        <p class="text-warning">
        Standard Chartered Bank credit cards come with plenty of reward points, cashback, discounts and offers
        </p>
      </div>
      <div class="text-box" style="max-width:250px">
      <img src="https://freeiconshop.com/wp-content/uploads/edd/creditcard-flat.png" style="height:100px;width:100px"/>
        <h3 style="color:black">SBI</h3>
        <p class="text-warning">
        The applicant requesting for an SBI credit card is a resident of India.
        SBI is the largest state-owned banking and financial services company in India.
        </p>
      </div>
      <div class="text-box" style="max-width:250px">
      <img src="https://cdn-icons-png.flaticon.com/512/667/667073.png" style="height:100px;width:100px"/>
        <h3 style="color:black">ICICI</h3>
        <p class="text-warning">
        The card offers various benefits, such as reward points, dining discount, fuel surcharge waiver and more.
        </p>
      </div>
      <div class="text-box" style="max-width:250px">
      <img src="https://cdn-icons-png.flaticon.com/512/3190/3190478.png" style="height:100px;width:100px"/>
        <h3 style="color:black">HDFC</h3>
        <p class="text-warning">
        
HDFC MoneyBack is a suitable credit card for beginners because of a comparatively lower income requirement and low annual fee.
        </p>
      </div>
    </div>
  </div>
</section>

<section>
        <div class="container mt-5"  data-aos="fade-up">
        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="https://img.freepik.com/free-vector/vector-illustration-man-using-computer-laptop-sitting-top-credit-card-shopping-online_253672-156.jpg?w=740" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
          <h3>Credit Card</h3>
          <p class="text-box">A credit card is a thin rectangular piece of plastic or metal issued by a bank or financial services company, that allows cardholders to borrow funds with which to pay for goods and services with merchants that accept cards for payment. Credit cards impose the condition that cardholders pay back the borrowed money, plus any applicable interest, as well as any additional agreed-upon charges, either in full by the billing date or over time.</p>
          <p>
A credit card is a type of credit facility, provided by banks that allow customers to borrow funds within a pre-approved credit limit. It enables customers to make purchase transactions on goods and services.</p>
          </div>
</div>
        </div>
    </section>


 

    
   
    @include('layout.mutualfundfooter')
    @include('layout.footer')
