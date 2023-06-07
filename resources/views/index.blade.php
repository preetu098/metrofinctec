@include('layout.header')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
    .cardshow {
        box-shadow: 10px 10px 10px 10px orange;
    }

    .cardshow:hover {
        opacity: 0.7;
        transform: scale(1.1);
        transition: all 5s;
    }

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
        display: -ms-flexbox;
        /* IE10 */
        display: flex;
        width: 100%;
        margin-bottom: 15px;
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

.reveal21{
  position: relative;
  transform: translateX(-150px) scale(0);
  opacity: 0;
  transition: 1s all ease;
}

.reveal21.active{
  transform: translateX(0) scale(1);
  opacity: 1;
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


function reveal21() {
  var reveals21 = document.querySelectorAll(".reveal21");

  for (var i = 0; i < reveals21.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals21[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals21[i].classList.add("active");
    } else {
      reveals21[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal21);

    </script>
<body class="page-opt-nocalc page basicpage">

    <div class="home-page-layout cm-page-container">
        <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12" style="background-color:white">
            <div class="row">
                <div class="col-lg-9">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="images/first.jpeg" alt="Third slide"
                                    style="height:340px">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" slick-prev slick-arrow src="images/second.jpeg"
                                    alt="Second slide" style="height:340px">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="assets/images/banner3.jpg" alt="Third slide"
                                    style="height:340px">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100"
                                    src="https://www.bonanzaonline.com/mutualfunds/images/banners/mutual-fund.jpg"
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
    </section>

    <!-- Start Team Doctors -->
    <section class="section-padding " style="padding: 0px 0px 0px 0px;">
        <div class="container">
            <div class="section-header">
                <div class="section-heading " style="margin-top:10px">
                    <h3>Explore Mutual Funds</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12 no-padding"> 
                    <div class="doctors-slider">
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="box-shadow:0px 0px 0px">
                                    <div class="lower-content p-relative text-center">
                                        <center>
                                            <img src="https://www.freepngimg.com/thumb/money/49304-6-wealth-hq-image-free-png.png"
                                                style="height:70px" />
                                            <h4 class="nav-item"><a href="#LOANLY-1" data-toggle="tab"
                                                    class="nav-link active">Wealth Creation</a></h4>
                                        </center>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="box-shadow:0px 0px 0px">
                                    <div class="lower-content p-relative text-center">
                                        <center>
                                            <img src="https://vignette.wikia.nocookie.net/millionaire/images/4/4b/Kaun_Banega_Crorepati_logo.png/revision/latest?cb=20160805211149"
                                                style="height:70px" />
                                            <h4 class="nav-item"><a href="#LOANLY-2" data-toggle="tab"
                                                    class="nav-link">Kon Banayega Crorepati</a></h4>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="box-shadow:0px 0px 0px">
                                    <div class="lower-content p-relative text-center">
                                        <center>
                                            <img src="https://www.fraxnet.com/web/image/1020/IoT-Internet%20of%20things1.png"
                                                style="height:70px" />
                                            <h4 class="nav-item"><a href="#LOANLY-3" data-toggle="tab"
                                                    class="nav-link">Next Generation </a></h4>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="box-shadow:0px 0px 0px">
                                    <div class="lower-content p-relative text-center">
                                        <center>
                                            <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/Depositphotos_9417358_S1_1642179384.jpg"
                                                style="height:70px" />
                                            <h4 class="nav-item"><a href="#LOANLY-4" data-toggle="tab"
                                                    class="nav-link">Tax Saver</a></h4>
                                        </center>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="box-shadow:0px 0px 0px">
                                    <div class="lower-content p-relative text-center">
                                        <center>
                                            <img src="https://thumbs.dreamstime.com/b/emergency-funds-flat-icon-color-simple-element-fintech-collection-creative-web-design-templates-colored-filled-vector-210076785.jpg"
                                                style="height:70px" />
                                            <h4 class="nav-item"><a href="#LOANLY-5" data-toggle="tab"
                                                    class="nav-link">Emergency fund</a></h4>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--<div class="slide-item col-12">-->
                        <!--    <div class="team-block p-relative">-->
                        <!--        <div class="inner-box" style="box-shadow:0px 0px 0px">-->
                        <!--            <div class="lower-content p-relative text-center">-->
                        <!--            <center>-->
                        <!--            <img src="https://cdn-icons-png.flaticon.com/512/4207/4207247.png" style="height:70px"/>-->
                        <!--                <h4><a href="#LOANLY-6" class="text-custom-black fw-600 fs-20">International Funds</a></h4>-->
                        <!--            </center>-->
                        <!--            </div>-->
                        <!--        </div>-->
                        <!--    </div>-->
                        <!--</div>-->
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="box-shadow:0px 0px 0px">
                                    <div class="lower-content p-relative text-center">
                                        <center>
                                            <img src="https://capitalmaster.in/assets/images/risk/lowrisk.png"
                                                style="height:70px" />
                                            <h4 class="nav-item"><a href="#LOANLY-6" data-toggle="tab"
                                                    class="nav-link">Low Risk (Debt Funds)</a></h4>
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
    <!-- End Team Doctors -->
    <!-- start lw-tab -->
    <div class="section-padding lw-tab-section p-relative">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="lw-mega-tab">
                        <ul class="nav lw-nav-tabs">
                            <li class="nav-item"> <a href="#LOANLY-1" class="nav-link active" data-toggle="tab">
                                    Wealth Creation
                                </a>
                            </li>
                            <li class="nav-item"> <a href="#LOANLY-2" class="nav-link" data-toggle="tab">
                                    Kon Banayega Crorepati
                                </a>
                            </li>
                            <li class="nav-item"> <a href="#LOANLY-3" class="nav-link" data-toggle="tab">
                                    Next Generation
                                </a>
                            </li>
                            <li class="nav-item"> <a href="#LOANLY-4" class="nav-link" data-toggle="tab">
                                    Tax Saver
                                </a>
                            </li>
                            <li class="nav-item"> <a href="#LOANLY-5" class="nav-link" data-toggle="tab">
                                    Emergency fund
                                </a>
                            </li>
                            <li class="nav-item"> <a href="#LOANLY-6" class="nav-link" data-toggle="tab">
                                    Low Risk (Debt Funds)
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content lw-tab-content-wrapper">
                            <div class="tab-pane container active" id="LOANLY-1">

                                <table class="table table-hover">
                                    <tr style="color:white;background-color:#3CB371">
                                        <th>Fund Name</th>
                                        <th>AUM Size(in Cr)</th>
                                        <th>Nav</th>
                                        <th>1 Year Return</th>
                                        <th>3 Year Return</th>
                                        <th>Since Inception Return</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr>
                                        <td><a href="pdffiles/Quant Absolute Fund.pdf" target="_blank">Quant Absolute
                                                Fund (G)</a></td>
                                        <td>341.661 Cr</td>
                                        <td>Nav</td>
                                        <td>14.3%</td>
                                        <td>24.9%</td>
                                        <td>16.9%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pdffiles/ICICI Prudential Equity & Debt Fund.pdf"
                                                target="_blank">ICICI Prudential Equity & Debt Fund (G)</a></td>
                                        <td>19330.755 Cr</td>
                                        <td>Nav</td>
                                        <td>20.4%</td>
                                        <td>17.5%</td>
                                        <td>14.7%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">Principal Emerging Bluechip Fund (G)</a></td>
                                        <td>3124.318 Cr</td>
                                        <td>Nav</td>
                                        <td>38.9%</td>
                                        <td>21.9%</td>
                                        <td>24.8%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">Tata Digital India Fund (G)</a></td>
                                        <td>5583.704 Cr</td>
                                        <td>Nav</td>
                                        <td>14.6%</td>
                                        <td>28.3%</td>
                                        <td>19.9%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pdffiles/Parag Parikh Flexi Cap fund.pdf" target="_blank">Parag
                                                Parikh Flexi Cap fund (G)</a></td>
                                        <td>21906.959 Cr</td>
                                        <td>Nav</td>
                                        <td>11.7%</td>
                                        <td>23%</td>
                                        <td>18.6%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pdffiles/Mirae Asset Emerging Bluechip Fund (G).pdf"
                                                target="_blank">Mirae Asset Emerging Bluechip Fund (G)</a></td>
                                        <td>21910.25 Cr</td>
                                        <td>Nav</td>
                                        <td>7%</td>
                                        <td>18.6%</td>
                                        <td>20.4%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                </table>

                            </div>
                            <div class="tab-pane fade container" id="LOANLY-2">

                                <table class="table table-hover">
                                    <tr style="color:white;background-color:#3CB371">
                                        <th>Fund Name</th>
                                        <th>AUM Size(in Cr)</th>
                                        <th>Nav</th>
                                        <th>1 Year Return</th>
                                        <th>3 Year Return</th>
                                        <th>Since Inception Return</th>
                                        <th>Edit</th>
                                    </tr>
                                    <tr>
                                        <td><a href="">Principal Emerging Bluechip Fund (G)</a></td>
                                        <td>3124.318 Cr</td>
                                        <td>Nav</td>
                                        <td>38.9%</td>
                                        <td>21.9%</td>
                                        <td>24.8%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">Tata Digital India Fund (G)</a></td>
                                        <td>5583.704 Cr</td>
                                        <td>Nav</td>
                                        <td>14.6%</td>
                                        <td>28.3%</td>
                                        <td>19.9%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pdffiles/Parag Parikh Flexi Cap fund.pdf" target="_blank">Parag
                                                Parikh Flexi Cap fund (G)</a></td>
                                        <td>21906.959 Cr</td>
                                        <td>Nav</td>
                                        <td>11.7%</td>
                                        <td>23%</td>
                                        <td>18.6%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">SBI Large & Midcap Fund (G)</a></td>
                                        <td>6598.829 Cr</td>
                                        <td>Nav</td>
                                        <td>9.3%</td>
                                        <td>15.6%</td>
                                        <td>17.2%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>

                                    <tr>
                                        <td><a href="pdffiles/Canara Robeco Emerging Equities fund.pdf"
                                                target="_blank">Canara Robeco Emerging Equities fund (G)</a></td>
                                        <td>13113.227 Cr</td>
                                        <td>Nav</td>
                                        <td>9.6%</td>
                                        <td>16.3%</td>
                                        <td>17.1%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pdffiles/Mirae Asset Tax Saver Fund.pdf" target="_blank">Mirae
                                                Asset Tax Saver Fund (G)</a></td>
                                        <td>11962.664 Cr</td>
                                        <td>Nav</td>
                                        <td>6.8%</td>
                                        <td>17.5%</td>
                                        <td>18.2%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                </table>

                            </div>
                            <div class="tab-pane fade container" id="LOANLY-3">

                                <table class="table table-hover">
                                    <tr style="color:white;background-color:#3CB371">
                                        <th>Fund Name</th>
                                        <th>AUM Size(in Cr)</th>
                                        <th>Nav</th>
                                        <th>1 Year Return</th>
                                        <th>3 Year Return</th>
                                        <th>Since Inception Return</th>
                                        <th>Edit</th>
                                    </tr>
                                    <tr>
                                        <td><a href="">SBI Small Cap Fund (G)</a></td>
                                        <td>12097.841</td>
                                        <td>Nav</td>
                                        <td>13</td>
                                        <td>24%</td>
                                        <td>22%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pdffiles/Quant Small Cap - Growth.pdf" target="_blank">Quant
                                                Small Cap - GrowthS</a></td>
                                        <td>1822.46</td>
                                        <td>Nav</td>
                                        <td>14</td>
                                        <td>37</td>
                                        <td>18</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">BOI AXA Small Cap Fund - Regular Plan - Growth</a></td>
                                        <td>296.55</td>
                                        <td>Nav</td>
                                        <td>13</td>
                                        <td>30</td>
                                        <td>28</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">SBI Focused Equity Fund (G)</a></td>
                                        <td>24706.562</td>
                                        <td>Nav</td>
                                        <td>6</td>
                                        <td>13</td>
                                        <td>19</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>

                                </table>

                            </div>
                            <div class="tab-pane fade container" id="LOANLY-4">

                                <table class="table table-hover">
                                    <tr style="color:white;background-color:#3CB371">
                                        <th>Fund Name</th>
                                        <th>AUM Size(in Cr)</th>
                                        <th>Nav</th>
                                        <th>1 Year Return</th>
                                        <th>3 Year Return</th>
                                        <th>Since Inception Return</th>
                                        <th>Edit</th>
                                    </tr>
                                    <tr>
                                        <td><a href="">HDFC Long Term Advantage Fund (G)</a></td>
                                        <td>1311.678 Cr</td>
                                        <td>Nav</td>
                                        <td>35.5%</td>
                                        <td>20.6%</td>
                                        <td>21.4%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">Principal Personal Tax Saver Fund (G)</td>
                                        <td>332.677 Cr</td>
                                        <td>Nav</td>
                                        <td>31.9%</td>
                                        <td>16.8%</td>
                                        <td>19%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">Quant Tax Plan (G)</a></td>
                                        <td>1316.078 Cr</td>
                                        <td>Nav</td>
                                        <td>14.4%</td>
                                        <td>31.1%</td>
                                        <td>14.8%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pdffiles/Mirae Asset Tax Saver Fund.pdf" target="_blank">Mirae
                                                Asset Tax Saver Fund (G)</a></td>
                                        <td>11962.664 Cr</td>
                                        <td>Nav</td>
                                        <td>6.8%</td>
                                        <td>17.5%</td>
                                        <td>18.2%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">IDFC Tax Advantage (ELSS) Fund - Regular Plan -
                                                Growth</a></td>
                                        <td>3741.56</td>
                                        <td>Nav</td>
                                        <td>11</td>
                                        <td>17</td>
                                        <td>18</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                </table>

                            </div>
                            <div class="tab-pane fade container" id="LOANLY-5">

                                <table class="table table-hover">
                                    <tr style="color:white;background-color:#3CB371">
                                        <th>Fund Name</th>
                                        <th>AUM Size(in Cr)</th>
                                        <th>Nav</th>
                                        <th>1 Year Return</th>
                                        <th>3 Year Return</th>
                                        <th>Since Inception Return</th>
                                        <th>Edit</th>
                                    </tr>
                                    <tr>
                                        <td><a href="">ICICI Prudential Liquid Fund (G)</a></td>
                                        <td>40402.167 Cr</td>
                                        <td>Nav</td>
                                        <td>3.4%</td>
                                        <td>4.2%</td>
                                        <td>7.2%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">Aditya Birla Sun Life Money Manager Fund (G)</a></td>
                                        <td>15495.319 Cr</td>
                                        <td>Nav</td>
                                        <td>3.6%</td>
                                        <td>5.4%</td>
                                        <td>6.8%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>

                                    <tr>
                                        <td><a href="">ICICI Prudential Liquid Fund Institutional (G)</a></td>
                                        <td>40402.167 Cr</td>
                                        <td>Nav</td>
                                        <td>5.8%</td>
                                        <td>6.4%</td>
                                        <td>6.9%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pdffiles/HDFC Overnight fund.pdf" target="_blank">HDFC Overnight
                                                fund (G)</a></td>
                                        <td>18675.838 Cr</td>
                                        <td>Nav</td>
                                        <td>3.2%</td>
                                        <td>3.6%</td>
                                        <td>5.8%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                </table>

                            </div>
                            <div class="tab-pane fade container" id="LOANLY-6">

                                <table class="table table-hover">
                                    <tr style="color:white;background-color:#3CB371">
                                        <th>Fund Name</th>
                                        <th>AUM Size(in Cr)</th>
                                        <th>Nav</th>
                                        <th>1 Year Return</th>
                                        <th>3 Year Return</th>
                                        <th>Since Inception Return</th>
                                        <th>Edit</th>
                                    </tr>
                                    <tr>
                                        <td><a href="pdffiles/ICICI Prudential All Seasons Bond Fund Premium.pdf"
                                                target="_blank">ICICI Prudential All Seasons Bond Fund Premium (G)</a>
                                        </td>
                                        <td>5866.97 Cr</td>
                                        <td>Nav</td>
                                        <td>12.1%</td>
                                        <td>8.3%</td>
                                        <td>9.6%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">Aditya Birla Sun Life Corporate Bond Fund Discipline
                                                Advantage Plan (G)</a></td>
                                        <td>16866.436 Cr</td>
                                        <td>Nav</td>
                                        <td>5.5%</td>
                                        <td>7.9%</td>
                                        <td>8.1%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pdffiles/ICICI Prudential Corporate Bond Fund Retail.pdf"
                                                target="_blank">ICICI Prudential Corporate Bond Fund Retail (G)</a>
                                        </td>
                                        <td>17579.638 Cr</td>
                                        <td>Nav</td>
                                        <td>9.5%</td>
                                        <td>7.7%</td>
                                        <td>7.9%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">ICICI Prudential Liquid Fund Institutional I (G)</a></td>
                                        <td>40402.167 Cr</td>
                                        <td>Nav</td>
                                        <td>5.9%</td>
                                        <td>6.4%</td>
                                        <td>7.5%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pdffiles/HDFC Floating Rate Debt Wholesale Plan.pdf"
                                                target="_blank">HDFC Floating Rate Debt Wholesale Plan (G)</a></td>
                                        <td>18174.076 Cr</td>
                                        <td>Nav</td>
                                        <td>3.2%</td>
                                        <td>6.2%</td>
                                        <td>7.8%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section>
        <div class="container">
            <div
                style="background-image:url('https://blog.stockedge.com/wp-content/uploads/2021/12/TOP-5-MUTUAL-FUNDS-2022-01-1024x576.png')">
                <div style="background-color:black;height:400px;opacity:0.3"></div>
            </div>
        </div>

    </section>

    <!-- End lw-tab -->
    <!-- Start section Process -->
    <center>
        <section class="section-padding">
            <div class="overlay overlay-bg-black"></div>
            <div class="container">
                <h3 class="text-custom-black fw-700">
                    Tools and Calculators</h3>
                <div class="row">
                    <div class="col-md-4 reveal">
                        <h5>Systematic Investment Plan(SIP)</h5>
                        <a href="/sipcalculator">
                            <img src="https://mf.nipponindiaim.com/LearnAndInvest/calculators/assets/images/sip-an-inc.svg"
                                style="height:300px;width:300px" />
                        </a>
                    </div>
                    <div class="col-md-4 reveal">
                        <h5>Systematic Withdrawal Plan(SWP)</h5>
                        <a href="/swp">
                            <img src="https://www.kotaksecurities.com/investment-products/mutual-fund/top-mutualfund/img/mutualFund.svg"
                                style="height:300px;width:300px" />
                        </a>
                    </div>
                    <div class="col-md-4 reveal">
                        <h5>One Time investment</h5>
                        <a href="/one-time-invest">
                            <img src="https://addepar.com/assets/img/clip-financial-report.png" class="mt-5"
                                style="height:200px;width:300px" />
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </center>
    <!-- End section Process -->
    <!-- Start why choose us -->

    <section class="section-padding about-us-sec p-relative">

        <div class="container">
        <center>
                            <h3 class="text-custom fw-700">WHY MetroFintec?</h3>
                        </center>
            <div class="row">
                <div class="col-lg-6">
                <p style="font-family:Cursive;font-size:18px" class="reveal2">
MetroFintec is the dawn of the new Sun in the world of financial products. It has been
launched to bring about a ray of hope to the millions of investors looking for multiplying
their investments but with negligible risk.
                        </p>
                </div>
                <div class="col-lg-6">
                    <img src="https://cubelogic.com/wp-content/uploads/2018/11/Financial-Services.png" class="reveal21" style=height:300px;width:300px" alt="">
                    </div>
            </div>

            <div class="row mt-5">
                <div class="col-lg-6">
                <img src="https://www.pnc.com/content/experience-fragments/pnc-com/en/conversation_starter/personal/consumer_checking/prospect/vw_400_offer/master/_jcr_content/root/containergrid_copy/embeddedGrid/image_copy_copy_copy.coreimg.png/1660834067839/vw-wallet-molecule-400.png" class="reveal2" style=height:300px;width:400px" alt="">
                </div>
                <div class="col-lg-6">
                <p style="font-family:Cursive;font-size:18px" class="reveal21">With decades of experience the founders of the organization have designed multiple
investment portfolios for individuals, corporates and investors. MetroFintec is their
hand holder and guide for effectively investing in financial aid opportunities which earn
them surplus returns.
                        </p>
                    </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-6">
                <p style="font-family:Cursive;font-size:18px" class="reveal2">Due to the expertise and personal involvement of the company they have very skilfully
covered all the necessary detailed information and documentation required to attain
the aforementioned loans, traditional investment, insurance and more. </p>
                </div>
                <div class="col-lg-6">
                <img src="https://www.bonanzaonline.com/blog/wp-content/uploads/2022/07/Key-without-background.png" class="reveal21" style=height:300px;width:300px" alt="">
                    </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-6">
                <img src="https://www.clicksandsales.com/img/Financial-Products.png" class="reveal21" style=height:300px;width:300px" alt="">
                </div>
                <div class="col-lg-6">
              
<p style="font-family:Cursive;font-size:18px" class="reveal2">“MetroFintec” is synonymous with trust, loyalty and security of the investments of their
esteemed investors. So, whenever you wish to invest your hard-earned money and
explore the various options the first and foremost name in your mind should be
MetroFintec. </p>
                    </div>
            </div>


</div>


</div>
                </div>

            </div>
        </div>
        <div class="bg-light-white-skew-2 bg-custom-black"></div>
    </section>
<section>
   <div class="container">
   <div class="row mt-5 mb-5">
        <div class="col-lg-6">
        <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspCertified Advisor</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbsp100 % Digital Procecss</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspMost Trusted Dgital Wealth Management Firm</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspPersonalized Portfolio Management</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspBest-In-Class Research</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspOne Platform For All Your Financial Needs</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspInnovative Tools For The Modern Investor</li>
        </div>
        <div class="col-lg-6">
            <img src="images/mutual.png" class="reveal21"  alt="" style="height:400px;margin-top:-12px">
        </div>
   </div>
   </div>
</section>


<section >
    <div class="container">
        <br>
        <br>
        <div class="text-center">
            <h3 style="color:#3CB371;margin-top:-12px;font-family:">What Is a Mutual Fund?</h3>
        </div>
        <br>
        <div class="row">
            <div class="col-lg-6">
            <p style="font-family:Cursive;font-size:18px;color:#3CB371" class="reveal2">A mutual fund is a vast investment programme of financial investments created up of
a pool of money collected from many investors to invest in securities like stocks, bonds,
money market instruments, and other assets. Mutual funds are operated by
professional money managers, who allocate the fund's assets and dedicatedly make
efforts to produce capital gains or income for the fund's investors. A mutual fund's
portfolio is organized and maintained to attain the investment objectives stated in its
prospectus.</p>
<p style="font-family:Cursive;font-size:18px;color:#3CB371" class="reveal2">Mutual funds give small or individual investors access to professionally managed
portfolios of equities, bonds, and other securities. Each shareholder, therefore,
participates proportionally in the gains or losses of the fund. Mutual funds invest in an
extensive number of securities, and performance is usually tracked as the change in
the total market cap of the fund which is derived by the assimilated performance of
the underlying investments.</p>
            </div>
            <div class="col-lg-6">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/hXAANPFNR1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspMultiple investments.</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspSharing of investment expenses.</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspEasier to invest in significant markets</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspEasy to approach and track.</li>

            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspVery easy portfolio management.</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspSupport of professional money managers.</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal2"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspMinimal costs</li>
            </div>
        </div>
    </div>
</section>
<style>
 #test1,#test2,#test3,#test4,#test5,#test6,#test7,#test8,#test9
 {
    display:none
 }   
</style>

<section class="mt-5">
                <div class="container">
                    <h3>Advantages of investing in Mutual Funds</h3>
                <div class="row">
                  
                    <div class="col-md-7">
                        <br>
                        <br><br>
                        
                       <div id="test1" class="reveal2">
                        <h4>Expert Management</h4>
                        <br>
                        <br>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/011/684/830/small/e-learning-online-education-and-workshop-icon-elements-knowledge-for-success-business-training-and-better-ideas-bookstore-remote-training-classes-service-and-academic-graduation-free-png.png" alt="" style="height:200px;width:200px">
                        <br>
                            <p style="font-family:Cursive;font-size:18px;color:#3CB371">The most important advantage of investing in mutual funds
is that they are handled by qualified and expert professionals. They are supported by
a dedicated investment research team which routinely analyses the executions and
performance and prospects of companies and selects suitable investments.</p>
                       </div>
                       <div id="test2" class="reveal2">
                       <h4>Wide array of Portfolios</h4>
                        <br>
                        <br>
                        <img src="https://www.nishkaera.com/static/media/PMSimage.22fa39ed.png" alt="" style="height:200px;width:200px">
                        <br>
                            <p style="font-family:Cursive;font-size:18px;color:#3CB371">The most important strategy of investment is to invest in
different portfolios so a mutual fund is the best option for the same. Since the money
is invested in various industries and plans it is not possible that losses will occur
simultaneously so the risk is minimal.</p>
                       </div>

                       <div id="test3" class="reveal2">
                       <h4>Comfortable and complacent investment</h4>
                        <br>
                        <br>
                        <img src="https://freepngimg.com/thumb/investing/3-2-investing-picture-thumb.png" alt="" style="height:200px;width:200px">
                        <br>
                            <p style="font-family:Cursive;font-size:18px;color:#3CB371"> From a short to a long period of time mutual funds
have the possibility to provide a higher return as they invest in multiple portfolios of
appropriate securities.</p>
                       </div>
                       <div id="test4" class="reveal2">
                       <h4>Higher possibilities of returns</h4>
                        <br>
                        <br>
                        <img src="https://i.pinimg.com/originals/3c/a2/8c/3ca28c07b01ba2fd27d639d2ffbbd531.png" alt="" style="height:200px;width:200px">
                        <br>
                            <p style="font-family:Cursive;font-size:18px;color:#3CB371">It doesn’t hamper the busy schedules
of clients because mutual funds investments need very less documentation and
thereby there no hurdles like lost deliveries, delayed payments and stressful follow up
with brokers and companies. Mutual Funds are very comfortable and easy to
understand and make investing very convenient.</p>
                       </div>
                       <div id="test5" class="reveal2">
                       <h4>Minimal expenses</h4>
                        <br>
                        <br>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/012/072/527/small_2x/3d-gold-coins-stack-with-house-on-blue-arrow-up-on-transparent-home-model-with-windows-door-icon-financial-investment-growth-concept-mockup-cartoon-icon-minimal-style-3d-render-illustration-png.png" alt="" style="height:200px;width:200px">
                        <br>
                            <p style="font-family:Cursive;font-size:18px;color:#3CB371">Mutual funds involve very negligible expenses if compared to
directly investing in the capital markets because the benefits of scale in brokerage,
custodial and other fees translate into lower costs for investors.</p>
                       </div>

                       <div id="test6" class="reveal2">
                       <h4>Clarity</h4>
                        <br>
                        <br>
                        <img src="https://cdn-icons-png.flaticon.com/512/6897/6897881.png" alt="" style="height:200px;width:200px">
                        <br>
                            <p style="font-family:Cursive;font-size:18px;color:#3CB371">An investor gets regular information on the value of his investment through
account statement and in addition to disclosure on the investments made by his
scheme through portfolios disclosures.</p>
                       </div>

                       <div id="test7" class="reveal2">
                       <h4 >Benefit of convenience</h4>
                        <br>
                        <br>
                        <img src="https://cdn3.iconfinder.com/data/icons/market-research-navy-vol-1/512/Convenience_Sample-512.png" alt="" style="height:200px;width:200px">
                        <br>
                            <p style="font-family:Cursive;font-size:18px;color:#3CB371">Because of characteristics like regular investment plans,
regular withdrawal plans and dividend reinvestment plans, you can systematically
invest or withdraw funds according to a client’s needs.</p>
                       </div>
                       <div id="test8" class="reveal2">
                       <h4 style="font-family:Cursive;font-size:18px;color:#3CB371">Multiple planse</h4>
                        <br>
                        <br>
                        <img src="https://cdn-icons-png.flaticon.com/512/123/123418.png" alt="" style="height:200px;width:200px">
                        <br>
                            <p style="font-family:Cursive;font-size:18px;color:#3CB371">You can find a mutual fund scheme that is perfect as per your
expectations from an investment. This could be related to both your risk tolerance and
your investment horizon.</p>
                       </div>
                       <div id="test9" class="reveal2"> 
                       <h4 style="font-family:Cursive;font-size:18px;color:#3CB371">SEBI registered</h4>
                        <br>
                        <br>
                        <img src="https://www.investelite.in/webassets/images-new/sebi/sebi1.png" alt="" style="height:200px;width:200px">
                        <br>
                            <p style="font-family:Cursive;font-size:18px;color:#3CB371">All mutual funds are registered with SEBI and the operations of
mutual funds are regularly monitored by SEBI.</p>
                       </div>
                    </div>
                    <div class="col-md-5">
                        <h4 class="reveal2"><button class="btn btn-link" onclick="load('test1')" style="color:orange"><i class="fa fa-check" aria-hidden="true"></i>&nbsp&nbspExpert Management</button></h4>
                        <h4 class="reveal2"><button class="btn btn-link" onclick="load('test2')"  style="color:orange"><i class="fa fa-check" aria-hidden="true"></i>&nbsp&nbspWide array of Portfolios</button></h4>
                        <h4 class="reveal2"><button class="btn btn-link" onclick="load('test3')"  style="color:orange"><i class="fa fa-check" aria-hidden="true"></i>&nbsp&nbspComfortable and complacent investment</button></h4>
                        <h4 class="reveal2"><button class="btn btn-link" onclick="load('test4')"  style="color:orange"><i class="fa fa-check" aria-hidden="true"></i>&nbsp&nbspHigher possibilities of returns</button></h4>
                        <h4 class="reveal2"><button class="btn btn-link" onclick="load('test5')"  style="color:orange"><i class="fa fa-check" aria-hidden="true"></i>&nbsp&nbspMinimal expenses</button></h4>
                        <h4 class="reveal2"><button class="btn btn-link" style="color:orange" onclick="load('test6')" ><i class="fa fa-check" aria-hidden="true"></i>&nbsp&nbspClarity</button></h4>
                        <h4 class="reveal2"><button class="btn btn-link" onclick="load('test7')"  style="color:orange"><i class="fa fa-check" aria-hidden="true"></i>&nbsp&nbspBenefit of convenience</button></h4>
                        <h4 class="reveal2"><button class="btn btn-link" onclick="load('test8')"  style="color:orange"><i class="fa fa-check" aria-hidden="true"></i>&nbsp&nbspMultiple plans</button></h4>
                        <h4 class="reveal2"><button class="btn btn-link" onclick="load('test9')"  style="color:orange"><i class="fa fa-check" aria-hidden="true"></i>&nbsp&nbspSEBI registered</button></h4>
                    </div>
                </div>
                </div>
</section>

<script>
     document.getElementById('test1').style.display='block';
    function load(val)
    {
       
        if(val=='test1')
        {
            document.getElementById(val).style.display='block';
            document.getElementById('test2').style.display='none';
            document.getElementById('test3').style.display='none';
            document.getElementById('test4').style.display='none';
            document.getElementById('test5').style.display='none';
            document.getElementById('test6').style.display='none';
            document.getElementById('test7').style.display='none';
            document.getElementById('test8').style.display='none';
            document.getElementById('test9').style.display='none';

        }
        else if(val=='test2')
        {
            document.getElementById(val).style.display='block';
            document.getElementById('test1').style.display='none';
            document.getElementById('test3').style.display='none';
            document.getElementById('test4').style.display='none';
            document.getElementById('test5').style.display='none';
            document.getElementById('test6').style.display='none';
            document.getElementById('test7').style.display='none';
            document.getElementById('test8').style.display='none';
            document.getElementById('test9').style.display='none';

        }
        else if(val=='test3')
        {
            document.getElementById(val).style.display='block';
            document.getElementById('test1').style.display='none';
            document.getElementById('test2').style.display='none';
            document.getElementById('test4').style.display='none';
            document.getElementById('test5').style.display='none';
            document.getElementById('test6').style.display='none';
            document.getElementById('test7').style.display='none';
            document.getElementById('test8').style.display='none';
            document.getElementById('test9').style.display='none';

        }
        else if(val=='test4')
        {
            document.getElementById(val).style.display='block';
            document.getElementById('test1').style.display='none';
            document.getElementById('test3').style.display='none';
            document.getElementById('test2').style.display='none';
            document.getElementById('test5').style.display='none';
            document.getElementById('test6').style.display='none';
            document.getElementById('test7').style.display='none';
            document.getElementById('test8').style.display='none';
            document.getElementById('test9').style.display='none';

        }
        else if(val=='test5')
        {
            document.getElementById(val).style.display='block';
            document.getElementById('test1').style.display='none';
            document.getElementById('test3').style.display='none';
            document.getElementById('test4').style.display='none';
            document.getElementById('test2').style.display='none';
            document.getElementById('test6').style.display='none';
            document.getElementById('test7').style.display='none';
            document.getElementById('test8').style.display='none';
            document.getElementById('test9').style.display='none';

        }
        else if(val=='test6')
        {
            document.getElementById(val).style.display='block';
            document.getElementById('test1').style.display='none';
            document.getElementById('test3').style.display='none';
            document.getElementById('test4').style.display='none';
            document.getElementById('test5').style.display='none';
            document.getElementById('test2').style.display='none';
            document.getElementById('test7').style.display='none';
            document.getElementById('test8').style.display='none';
            document.getElementById('test9').style.display='none';

        }
        else if(val=='test7')
        {
            document.getElementById(val).style.display='block';
            document.getElementById('test1').style.display='none';
            document.getElementById('test3').style.display='none';
            document.getElementById('test4').style.display='none';
            document.getElementById('test5').style.display='none';
            document.getElementById('test6').style.display='none';
            document.getElementById('test2').style.display='none';
            document.getElementById('test8').style.display='none';
            document.getElementById('test9').style.display='none';

        }
        else if(val=='test8')
        {
            document.getElementById(val).style.display='block';
            document.getElementById('test1').style.display='none';
            document.getElementById('test3').style.display='none';
            document.getElementById('test4').style.display='none';
            document.getElementById('test5').style.display='none';
            document.getElementById('test6').style.display='none';
            document.getElementById('test7').style.display='none';
            document.getElementById('test2').style.display='none';
            document.getElementById('test9').style.display='none';

        }
        else if(val=='test9')
        {
            document.getElementById(val).style.display='block';
            document.getElementById('test1').style.display='none';
            document.getElementById('test3').style.display='none';
            document.getElementById('test4').style.display='none';
            document.getElementById('test5').style.display='none';
            document.getElementById('test6').style.display='none';
            document.getElementById('test7').style.display='none';
            document.getElementById('test8').style.display='none';
            document.getElementById('test2').style.display='none';

        }
    }
</script>
           

    <!-- End why choose us -->





    @section('footer')
        <script>
            $(document).ready(function() {

                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });


                $('#authform').submit(function(e) {

                    e.preventDefault();

                    var form = new FormData(this);

                    // alert(form);
                    $.ajax({
                        url: "{{ url('authsubmit') }}",
                        type: "POST",
                        contentType: false,
                        processData: false,
                        data: form,

                        dataType: 'json',
                        success: function(data) {
                            if (data.message == "success") {

                                // swal("Good job!", "You clicked the button!", "success");
                                // $('#otpModal').modal('show');
                                // $('#exampleModal').modal('hide');

                            }

                        },

                    });
                });


                $('#verifyotp').click(function(e) {
                    e.preventDefault();

                    var otp = $('#authform input[name="otp"]').val();
                    var email = $('#authform input[name="email"]').val();
                    var phone = $('#authform input[name="phone"]').val();
                    // var pwd = $('#authform input[name="pwd"]').val();

                    var form = new FormData();

                    form.append('otp', otp);

                    form.append('email', email);
                    form.append('phone', phone);
                    // form.append('password', pwd);
                    $.ajax({
                        url: "{{ url('authotp') }}",
                        type: "POST",
                        contentType: false,
                        processData: false,
                        data: form,
                        dataType: 'json',
                        success: function(data) {
                            if (data.type == "success") {
                                alert(data.message);
                                window.location.href = "/register/" + data.auth_id
                                // swal("Good job!", "You clicked the button!", "success");
                                // $('#otpModal').modal('show');
                                // $('#exampleModal').modal('hide');                           

                            } else {
                                alert("OTP Incorrect");

                            }

                        },

                    });
                });
            });
        </script>
    @endsection
    @include('layout.logofooter')


    @include('layout.mutualfundfooter')
    @include('layout.footer')
