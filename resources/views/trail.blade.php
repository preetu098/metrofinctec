@include('layout.header')

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
                                    style="height:300px">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="images/second.jpeg" alt="Second slide"
                                    style="height:300px">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="assets/images/banner3.jpg" alt="Third slide"
                                    style="height:300px">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100"
                                    src="https://www.bonanzaonline.com/mutualfunds/images/banners/mutual-fund.jpg"
                                    alt="Third slide" style="height:300px">

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

                <div class="col-lg-3">
                    <form class="mx-5" id="authform" method="POST">
                        <div class="mb-3 mt-3">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" class="form-control" id="name" name="name"
                                aria-describedby="emailHelp" placeholder="Enter name">

                        </div>
                        <div class="mb-3 mt-3">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="email" name="email"
                                aria-describedby="emailHelp" placeholder="Enter email">

                        </div>
                        <label for="exampleInputPassword1">Mobile number</label>
                        <div class="input-group ">

                            <div class="input-group-append w-100">
                                <input type="number" class="form-control w-100 " id="phone" name="phone"
                                    placeholder="enter number">


                                <input type="submit" class="btn btn-primary" value="verify">
                            </div>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="exampleInputPassword1" id="otpModalLabel">OTP</label>
                            <input type="text" class="form-control" name="otp" id="otp"
                                placeholder="enter otp">
                        </div>

                        <button type="button" id="verifyotp" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </section>

    <!-- Start Team Doctors -->
    <section class="section-padding " style="padding: 0px 0px 22px 0px;">
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
                                            <h4><a href="team.html" class="text-custom-black fw-600 fs-20">Wealth
                                                    Creation</a></h4>
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
                                            <h4><a href="team.html" class="text-custom-black fw-600 fs-20">Kon
                                                    Banayega Crorepati</a></h4>
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
                                            <h4><a href="team.html" class="text-custom-black fw-600 fs-20">Next
                                                    Generation </a></h4>
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
                                            <h4><a href="team.html" class="text-custom-black fw-600 fs-20">Tax
                                                    Saver</a></h4>
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
                                            <h4><a href="team.html" class="text-custom-black fw-600 fs-20">Emergency
                                                    fund</a></h4>
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
                                            <img src="https://cdn-icons-png.flaticon.com/512/4207/4207247.png"
                                                style="height:70px" />
                                            <h4><a href="team.html"
                                                    class="text-custom-black fw-600 fs-20">International Funds</a></h4>
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
                                            <img src="https://capitalmaster.in/assets/images/risk/lowrisk.png"
                                                style="height:70px" />
                                            <h4><a href="team.html" class="text-custom-black fw-600 fs-20">Low Risk
                                                    (Debt Funds)</a></h4>
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
                                        <th>Edit</th>
                                    </tr>
                                    <tr>
                                        <td><a href="">Quant Absolute Fund (G)</a></td>
                                        <td>341.661 Cr</td>
                                        <td>Nav</td>
                                        <td>14.3%</td>
                                        <td>24.9%</td>
                                        <td>16.9%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">ICICI Prudential Equity & Debt Fund (G)</a></td>
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
                                        <td><a href="">Parag Parikh Flexi Cap fund (G)</a></td>
                                        <td>21906.959 Cr</td>
                                        <td>Nav</td>
                                        <td>11.7%</td>
                                        <td>23%</td>
                                        <td>18.6%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">Mirae Asset Emerging Bluechip Fund (G)</a></td>
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
                                        <td><a href="">Parag Parikh Flexi Cap fund (G)</a></td>
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
                                        <td><a href="">Canara Robeco Emerging Equities fund (G)</a></td>
                                        <td>13113.227 Cr</td>
                                        <td>Nav</td>
                                        <td>9.6%</td>
                                        <td>16.3%</td>
                                        <td>17.1%</td>
                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="">Mirae Asset Tax Saver Fund (G)</a></td>
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
                                        <td><a href="">Quant Small Cap - GrowthS</a></td>
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
                                        <td><a href="">Mirae Asset Tax Saver Fund (G)</a></td>
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
                                        <td><a href="">HDFC Overnight fund (G)</a></td>
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
                                        <td><a href="">ICICI Prudential All Seasons Bond Fund Premium (G)</a>
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
                                        <td><a href="">ICICI Prudential Corporate Bond Fund Retail (G)</a></td>
                                        <td>17579.638 Cr</td>
                                        <td>Nav</td>
                                        <td>9.5%</td>
                                        <td>7.7%</td>
                                        <td>7.9%</td>
                                        <td><button class="btn"style="color:white;background-color:#3CB371">Invest
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
                                        <td><a href="">HDFC Floating Rate Debt Wholesale Plan (G)</a></td>
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
    <!-- End lw-tab -->
    <!-- Start section Process -->
    <center>
        <section class="section-padding">
            <div class="overlay overlay-bg-black"></div>
            <div class="container">
                <h3 class="text-custom-black fw-700">
                    Tools and Calculators</h3>
                <div class="row">
                    <div class="col-md-4">
                        <h5>Systematic Investment Plan(SIP)</h5>
                        <a href="/sipcalculator">
                            <img src="https://mf.nipponindiaim.com/LearnAndInvest/calculators/assets/images/sip-an-inc.svg"
                                style="height:300px;width:300px" />
                        </a>
                    </div>
                    <div class="col-md-4">
                        <h5>Systematic Withdrawal Plan(SWP)</h5>
                        <a href="/businessloan">
                            <img src="https://www.kotaksecurities.com/investment-products/mutual-fund/top-mutualfund/img/mutualFund.svg"
                                style="height:300px;width:300px" />
                        </a>
                    </div>
                    <div class="col-md-4">
                        <h5>One Time investment</h5>
                        <a href="/carloan">
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

    <section class="section-padding about-us-sec bg-gray p-relative">

        <div class="container">
            <div class="row">
                <div class="col-lg-12 align-self-center">
                    <div class="about-left-side mb-md-40 ">
                        <center>
                            <h3 class="text-custom-black fw-700">Why Helious</h3>
                        </center>
                        <p>Helios Fintec has essentially designed multiple plans for corporates, investors and
                            individuals to effectively invest in financial aid opportunities and get surplus returns.
                            The said plans have covered all the necessary details and paperwork required to get the
                            aforementioned loans, traditional investment, insurance, and more. Hence, Helios Fintec is
                            the best option you can conveniently opt for.
                        </p>

                        <div class="row">
                            <div class="col-lg-3">
                                <div class="card"
                                    style="border-bottom-left-radius:60px;border-top-right-radius:60px;">
                                    <center>
                                        <p>Certified Advisor
                                        <p>
                                            <img src="https://cdn2.iconfinder.com/data/icons/digital-processing-16/100/storaging_digital_processing_color_technology_business_file-512.png"
                                                style="height:80px;width:80px" />
                                    </center>
                                </div>
                            </div>
                            <div class="col-lg-3">

                                <div class="card"
                                    style="border-bottom-left-radius:60px;border-top-right-radius:60px;">
                                    <center>
                                        <p>100 % Digital Procecss
                                        <p>
                                            <img src="https://cdn0.iconfinder.com/data/icons/researcher-business-1/100/psychology_researcher_color_digital_business_process_chemical-512.png"
                                                style="height:80px;width:80px" />
                                    </center>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card"
                                    style="border-bottom-left-radius:60px;border-top-right-radius:60px;">
                                    <center>
                                        <p> Most Trusted Dgital Wealth Management Firm</p>
                                        <img src="https://www.pinclipart.com/picdir/big/98-985785_wealth-management-insurance-clipart.png"
                                            style="height:80px;width:80px" />
                                </div>
                                </center>
                            </div>
                            <div class="col-lg-3">
                                <div class="card"
                                    style="border-bottom-left-radius:60px;border-top-right-radius:60px;">
                                    <center>
                                        <p>Personalized Portfolio <br>Management</p>
                                        <img src="https://pasfa.de/wp-content/uploads/2022/03/Financial-Advisory.png"
                                            style="height:80px;width:80px" />
                                    </center>
                                </div>
                            </div>
                        </div>


                        <!-- <div class="about-list">
                            <ul>
                                <li class="text-light-white fs-14"><i class="fa fa-check"></i> Certified Advisor <img src="https://cdn2.iconfinder.com/data/icons/digital-processing-16/100/storaging_digital_processing_color_technology_business_file-512.png" style="height:80px;width:80px"/></li>
                                <li class="text-light-white fs-14"><i class="fa fa-check"></i> 100 % Digital Procecss <img src="https://cdn0.iconfinder.com/data/icons/researcher-business-1/100/psychology_researcher_color_digital_business_process_chemical-512.png" style="height:80px;width:80px"/>
                                </li>
                                <li class="text-light-white fs-14"><i class="fa fa-check"></i> Most Trusted Dgital Wealth Management Firm
                                <img src="https://www.pinclipart.com/picdir/big/98-985785_wealth-management-insurance-clipart.png" style="height:80px;width:80px"/></li>
                                <li class="text-light-white fs-14"><i class="fa fa-check"></i>Personalized Portfolio Management <img src="https://pasfa.de/wp-content/uploads/2022/03/Financial-Advisory.png" style="height:80px;width:80px"/>
                                </li> <li class="text-light-white fs-14"><i class="fa fa-check"></i>Best-In-Class Research<img src="https://contensis.uwaterloo.ca/sites/open/courses/FEFOCHE/media/images/unit2-icon-Cropped-180x180.png" style="height:80px;width:80px"/>
                                </li>
                                </li> <li class="text-light-white fs-14"><i class="fa fa-check"></i>One Platform For All Your
Financial Needs<img src="https://cdn-icons-png.flaticon.com/128/81/81752.png" style="height:80px;width:80px"/>
                                </li>
                                </li> <li class="text-light-white fs-14"><i class="fa fa-check"></i>Innovative Tools For The
Modern Investor<img src="https://cdn-icons-png.flaticon.com/512/3789/3789988.png" style="height:80px;width:80px"/>
                                </li>
                            </ul>
                        </div> -->

                    </div>
                </div>

            </div>
        </div>
        <div class="bg-light-white-skew-2 bg-custom-black"></div>
    </section>
    <!-- End why choose us -->


    <!-- Start Blog -->
    <div class="container">
        <div class="row">
            <div class="col-lg-4" style="margin-top:50px">
                <img
                    src="https://www.easypeasyfinance.com/wp-content/uploads/2018/04/Mutual-Funds-or-MFs-for-Kids-Teens-and-Students-Pooling-Money-for-Investment-300x300.jpg" />
            </div>
            <div class="col-lg-8">
                <h3 class="mt-5">What Is a Mutual Fund?</h3>
                <p>A mutual fund is a type of financial vehicle made up of a pool of money collected from many investors
                    to invest in securities like stocks, bonds, money market instruments, and other assets. Mutual funds
                    are operated by professional money managers, who allocate the fund's assets and attempt to produce
                    capital gains or income for the fund's investors. A mutual fund's portfolio is structured and
                    maintained to match the investment objectives stated in its prospectus.</p>
                <p>Mutual funds give small or individual investors access to professionally managed portfolios of
                    equities, bonds, and other securities. Each shareholder, therefore, participates proportionally in
                    the gains or losses of the fund. Mutual funds invest in a vast number of securities, and performance
                    is usually tracked as the change in the total market cap of the fund—derived by the aggregating
                    performance of the underlying investments.</p>
            </div>
        </div>
    </div>
    <!-- End Blog -->

    <section class="section-padding  doctors-team-style-2" style="padding: 44px 0px 22px 0px;height:500px">
        <div class="container">
            <div class="section-header">
                <div class="section-heading " style="">

                    <h3>Our Clients</h3>

                </div>
            </div>
            <div class="row">

                <div class="col-12 no-padding">
                    <div class="doctors-slider">

                        <div class="slide-item col-12">

                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:250px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <img src="https://static.thenounproject.com/png/19279-200.png"
                                                style="height:40px;width:50px" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <h5>Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                                                        used in laying out print, graphic or web designs. </h5>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:250px">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <img src="https://static.thenounproject.com/png/19279-200.png"
                                                style="height:40px;width:50px" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <h5>Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                                                        used in laying out print, graphic or web designs. </h5>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:250px">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <img src="https://static.thenounproject.com/png/19279-200.png"
                                                style="height:40px;width:50px" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <h5>Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                                                        used in laying out print, graphic or web designs. </h5>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:250px">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <img src="https://static.thenounproject.com/png/19279-200.png"
                                                style="height:40px;width:50px" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <h5>Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                                                        used in laying out print, graphic or web designs. </h5>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:250px">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <img src="https://static.thenounproject.com/png/19279-200.png"
                                                style="height:40px;width:50px" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <h5>Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                                                        used in laying out print, graphic or web designs. </h5>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:250px">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <img src="https://static.thenounproject.com/png/19279-200.png"
                                                style="height:40px;width:50px" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <h5>Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                                                        used in laying out print, graphic or web designs. </h5>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:250px">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <img src="https://static.thenounproject.com/png/19279-200.png"
                                                style="height:40px;width:50px" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <h5>Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                                                        used in laying out print, graphic or web designs. </h5>
                                                </center>
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
    </section>
    <!-- End Why choose us / testimonials -->
    <!--start logo!-->
    <section class="section-padding  doctors-team-style-2" style="padding: 44px 0px 22px 0px;height:500px">
        <div class="container">
            <div class="section-header">
                <div class="section-heading " style="">
                    <h3>Funds House</h3>
                </div>
            </div>
            <div class="row">

                <div class="col-12 no-padding">
                    <div class="doctors-slider">

                        <div class="slide-item col-12">

                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">


                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="http://loanbeku.com/wp-content/uploads/2017/10/Tata-Capital-bank.png" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://logos-world.net/wp-content/uploads/2020/11/HDFC-Bank-Logo.png" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://orissadiary.com/wp-content/uploads/2018/08/264279_528701413838836_555702680_n-768x448.png" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box"style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="http://weeassure.com/assets/images/shriram-transport-finance.png" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://www.govnokri.in/wp-content/uploads/2020/02/EXIM-Bank.png" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img src="https://pbs.twimg.com/media/EbRWhnmUMAA6YCc.jpg" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://logos-download.com/wp-content/uploads/2016/04/BNP_Paribas_logo_logotype_emblem.png" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://www.thehindubusinessline.com/incoming/6czm86/article27999953.ece/alternates/LANDSCAPE_1200/bharti-axa-Gen-Insurance-logo-01-3png" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://bloghost0.orowealth.com/wp-content/uploads/2018/07/CRMF-Logo-01.png" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLO_RIWLjvBdGQdfKedkZoBu1lVqeVvxcU-saj813Ed6mYep4_LDniLFVkd-zak8PPqM&usqp=CAU" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://media-exp1.licdn.com/dms/image/C5116AQGUL7qVCzQ2qg/profile-displaybackgroundimage-shrink_200_800/0/1517067492712?e=1660176000&v=beta&t=MPl7gBzU1ZmQqnmqsHy74czt1OfI1y2lIgg5KwPI5-0" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://content.indiainfoline.com/_media/iifl/img/article/2019-05/06/full/1557143914-0954.jpg" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://iconape.com/wp-content/files/mq/182656/svg/indiabulls-2018-seeklogo.com.svg" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5ntWaou8XM4bob_VPi3YxcyzYKK6w-gOwkAnQK9nDa0k5DZORdZmziow_3COfvWw7A&usqp=CAU" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://www.greatplacetowork.in/great/admin/uploads/company_logo/16704009681585566551.jpg" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://logos-download.com/wp-content/uploads/2016/06/Kotak_Mahindra_Bank_logo.png" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>









                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://download.logo.wine/logo/Axis_Bank/Axis_Bank-Logo.wine.png" />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <center>
                                                    <img
                                                        src="https://21btrj3i7vy42n2f4044931p-wpengine.netdna-ssl.com/wp-content/uploads/2021/09/Bank-of-baroda.jpg" />
                                                </center>
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
    </section>
    <!--end logo!-->
    <!-- Start Faqs -->
    <!-- <section class="section-padding loan-faqs-sec bg-light-white findrate-top">
        <div class="container">
            <div class="row">
                <div class="offset-lg-2 col-lg-8">
                    <div class="findratesec">
                       <div class="row">
                            <div class="col-sm-3">
                                <img src="https://www.iiflwealth.com/sites/default/files/iifl-inverse-logo.png" style="height:40px;" />
                            </div>
                            <div class="col-sm-1">
                                <img src="https://muthootgold.in/images/logo.png"style="height:40px;" />
                            </div>
                            <div class="col-sm-3">
                                <img src="http://weeassure.com/assets/images/shriram-transport-finance.png"style="height:40px;" />
                            </div>
                            <div class="col-sm-3">
                                <img src="https://www.timesofassam.com/wp-content/uploads/2011/03/SBI.png" style="height:40px;"/>
                            </div>
                       </div>

                    </div>
                </div>
            </div>
            
        </div>

    </section> -->
    <!-- End Faqs -->

    <!-- Start Footer -->
    <footer class="bg-black section-padding footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="footer-box mb-md-80">
                        <div class="footer-heading">
                            <h4 class="text-custom-white no-margin">Useful Links</h4>
                        </div>
                        <ul class="custom links">
                            <li> <a href="about.html" class="text-custom-white">About Us</a>
                            </li>
                            <li> <a href="service.html" class="text-custom-white">Service</a>
                            </li>
                            <li> <a href="blog.html" class="text-custom-white">Blog</a>
                            </li>
                            <li> <a href="team.html" class="text-custom-white">Team</a>
                            </li>
                            <li> <a href="contact.html" class="text-custom-white">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="footer-box mb-md-80">
                        <div class="footer-heading">
                            <h4 class="text-custom-white no-margin">Featured Post</h4>
                        </div>
                        <!-- <ul class="custom popular_post">
                            <li>
                                <div class="post">
                                    <div class="post-wrapper">
                                        <div class="popular_post_img animate-img">
                                            <a href="blog-single.html">
                                              
                                            </a>
                                        </div>
                                        <div class="popular_post_title">
                                            <h6><a href="blog-single.html" class="text-custom-white fs-14 fw-400">8
                                                    Tips to Help You Finding New Home</a></h6>
                                            <div class="post-date">
                                                <p class="text-white no-margin">March 20 2020</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="post">
                                    <div class="post-wrapper">
                                        <div class="popular_post_img animate-img">
                                            <a href="blog-single.html">
                                                <img src="assets1/images/featuredpost2" class="img-fluid image-fit"
                                                    alt="#">
                                            </a>
                                        </div>
                                        <div class="popular_post_title">
                                            <h6><a href="blog-single.html"
                                                    class="text-custom-white fs-14 fw-400">Bedroom Colors You'll
                                                    Never Regret</a></h6>
                                            <div class="post-date">
                                                <p class="text-white no-margin">09 Jan 2020</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul> -->
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="footer-box mb-xs-80">
                        <div class="footer-heading">
                            <h4 class="text-custom-white no-margin">Quick link</h4>
                            <!-- <ul class="custom links">
                                <li> <a href="about.html" class="text-custom-white">Privacy Policy</a>
                                </li>
                                <li> <a href="service.html" class="text-custom-white">Terms & Conditions</a>
                                </li>
                                <li> <a href="blog.html" class="text-custom-white">Career</a></li>

                            </ul> -->
                        </div>

                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="footer-box">
                        <div class="footer-heading">
                            <h4 class="text-custom-white no-margin">News Letter</h4>
                        </div>
                        <!-- <div class="newsletter">
                            <form>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-custom"
                                        placeholder="Email Id">
                                </div>
                                <button class="btn-first btn-submit-fill btn-height full-width"
                                    type="submit">Subscribe</button>
                            </form>
                        </div> -->
                        <div class="social-media">
                            <ul class="custom social-media">
                                <li><a href="#"><i class="fa fa-facebook-f"></i></a>
                                </li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a>
                                </li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a>
                                </li>
                                <li><a href="#"><i class="fa fa-youtube"></i></a>
                                </li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

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


            });

            $('#verifyotp').click(function(e) {
                e.preventDefault();

                var otp = $('#authform input[name="otp"]').val();
                var email = $('#authform input[name="email"]').val();
                var phone = $('#authform input[name="phone"]').val();

                var form = new FormData();

                form.append('otp', otp);

                form.append('email', email);
                form.append('phone', phone);


                // alert(form);
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
                            window.location.href = "/register/"+data.auth_id
                            // swal("Good job!", "You clicked the button!", "success");
                            // $('#otpModal').modal('show');
                            // $('#exampleModal').modal('hide');                           

                        } else {
                            alert("OTP Incorrect");

                        }

                    },

                });
            });
        </script>
    @endsection

    @include('layout.mutualfundfooter')
    @include('layout.footer')
