@include('layout.header')
<style>
    #imageHover:hover 
    {
        opacity:0.7;
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
<!--<div class="home-page-layout cm-page-container">-->
<!--        <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12" style="background-color:white">-->
<!--            <div class="row">-->
<!--                <div class="col-lg-9">-->
<!--                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">-->
<!--                        <ol class="carousel-indicators">-->
<!--                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>-->
<!--                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>-->
<!--                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>-->
<!--                        </ol>-->
<!--                        <div class="carousel-inner">-->
<!--                        <div class="carousel-item active">-->
<!--                        <img class="d-block w-100"-->
<!--                                    src="https://thumbs.dreamstime.com/b/medical-health-insurance-vector-illustration-cartoon-flat-tiny-doctor-character-standing-big-paper-form-document-policy-178489558.jpg"-->
<!--                                    alt="Third slide" style="height:300px">-->
<!--                                <div class="carousel-caption d-none d-md-block">-->
<!--                                    <h5>...</h5>-->
<!--                                    <p>...</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="carousel-item">-->
<!--                                <img class="d-block w-100"-->
<!--                                src="https://static.vecteezy.com/system/resources/previews/002/930/810/non_2x/insurance-illustration-concept-agent-template-background-isolated-can-be-use-for-presentation-web-banner-ui-ux-landing-page-vector.jpg"-->

<!--                                    alt="Second slide" style="height:300px">-->
<!--                            </div>-->
<!--                            <div class="carousel-item">-->
<!--                                <img class="d-block w-100"-->
<!--                                    src="https://www.tiainsights.com/assets/images/about.png"-->
<!--                                    alt="Third slide" style="height:300px">-->
<!--                                <div class="carousel-caption d-none d-md-block">-->
<!--                                    <h5>...</h5>-->
<!--                                    <p>...</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="carousel-item">-->
<!--                                <img class="d-block w-100"-->
<!--                                    src="https://www.bonanzaonline.com/mutualfunds/images/banners/mutual-fund.jpg"-->
<!--                                    alt="Third slide" style="height:300px">-->
                                   
<!--                                <div class="carousel-caption d-none d-md-block">-->
<!--                                    <h5>...</h5>-->
<!--                                    <p>...</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"-->
<!--                            data-slide="prev">-->
<!--                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--                            <span class="sr-only">Previous</span>-->
<!--                        </a>-->
<!--                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"-->
<!--                            data-slide="next">-->
<!--                            <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--                            <span class="sr-only">Next</span>-->
<!--                        </a>-->
<!--                    </div>-->
<!--                </div>-->

<!--                 <div class="col-lg-3">-->
<!--                    <form class="mx-5">-->
<!--                    <div class="mb-3 mt-3">-->
<!--                            <label for="exampleInputEmail1">Name</label>-->
<!--                            <input type="email" class="form-control" id="exampleInputEmail1"-->
<!--                                aria-describedby="emailHelp" placeholder="Enter email">-->
                           
<!--                        </div>-->
<!--                        <div class="mb-3 mt-3">-->
<!--                            <label for="exampleInputEmail1">Email address</label>-->
<!--                            <input type="email" class="form-control" id="exampleInputEmail1"-->
<!--                                aria-describedby="emailHelp" placeholder="Enter email">-->
                            
<!--                        </div>-->
<!--                        <div class="mb-3 mt-3">-->
<!--                            <label for="exampleInputPassword1">Password</label>-->
<!--                            <input type="password" class="form-control" id="exampleInputPassword1"-->
<!--                                placeholder="Password">-->
<!--                        </div>-->
<!--                        <div class="mb-3 mt-3">-->
<!--                            <label for="exampleInputPassword1">OTP</label>-->
<!--                            <input type="text" class="form-control" id="exampleInputPassword1"-->
<!--                                placeholder="otp">-->
<!--                        </div>-->
                       
<!--                        <button type="submit" class="btn btn-primary">Submit</button>-->
<!--                    </form>-->
<!--                </div> -->
<!--                </div>-->


<!--</div>-->

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
                                    src="https://abakkusinvest.com/wp-content/themes/twentytwenty/assets/images/new-ban.png"
                                    alt="First slide" style="height:340px">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>
                                </div>
                            </div>
                            <div class="carousel-item"> 
                                <img class="d-block w-100"
                                    src="https://grmbulls.com/wp-content/uploads/2021/06/best-pms-in-india-1536x732.png"
                                    alt="Second slide" style="height:340px">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100"
                                    src="https://www.hemsecurities.com/img/mutual_fund_header.png"
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

                 <div class="col-lg-3">
                    <center> <h5 class="mt-3 text-warning">Register your account</h5></center>
                    <form class="mx-5" style="margin-top:20px">
                    <div class="mb-3 mt-3">
                            <!--<label for="exampleInputEmail1"><font color="white">Name</font></label>-->
                            <!--<input type="text" class="form-control" style="background-color:#203A43;border:1px solid orange;color:white;width:100%"  id="exampleInputEmail1"-->
                            <!--    aria-describedby="emailHelp" placeholder="Enter name">-->
                           
                            <div class="input-container ">
    <i class="fa fa-user icon"></i>
    <input class="input-field" type="text" placeholder="PAN" style="width:100%" name="usrnm">
  </div>

                        </div>
                        <div class="mb-3 mt-3">
                            <!--<label for="exampleInputEmail1"><font color="white">Email address</font></label>-->
                            <!--<input type="email" class="form-control" style="background-color:#203A43;border:1px solid orange;color:white" id="exampleInputEmail1"-->
                            <!--    aria-describedby="emailHelp" placeholder="Enter email">-->
                     <div class="input-container">
    <i class="fa fa-envelope icon"></i>
    <input class="input-field" type="text" placeholder="Email" style="width:100%" name="email">
  </div>        
                        </div>
                         <div class="mb-3 mt-3">
                            <!--<label for="exampleInputPassword1"><font color="white">Mobile number</font></label>-->
                            <!--<input type="number" class="form-control" style="background-color:#203A43;border:1px solid orange;color:white" id="exampleInputPassword1"-->
                            <!--    placeholder="enter number">-->
                            <div class="input-container">
    <i class="fa fa-key icon"></i>
    <input class="input-field" type="password" placeholder="Password" style="width:100%" name="pwd">
  </div>
                        </div>
                          <div class="mb-3 mt-3">
                            <!--<label for="exampleInputPassword1"><font color="white">Mobile number</font></label>-->
                            <!--<input type="number" class="form-control" style="background-color:#203A43;border:1px solid orange;color:white" id="exampleInputPassword1"-->
                            <!--    placeholder="enter number">-->
                            <div class="input-container">
    <i class="fa fa-phone icon"></i>
    <input class="input-field" type="number" placeholder="Mobile" style="width:100%" name="num">
  </div>
                        </div>
                        <div class="mb-3 mt-3">
                            <div class="input-container">
    <i class="fa fa-lock icon"></i>
    <input class="input-field" type="number" placeholder="Otp" name="otp" style="width:100%">
  </div>
                        </div>

                      
  <!--                      <div class="mb-3 mt-3">-->
  <!--                          <div class="input-container">-->
  <!--  <i class="fa fa-lock icon"></i>-->
  <!--  <input class="input-field" type="number" placeholder="Otp" name="otp" style="width:100%">-->
  <!--</div>-->
  <!--                      </div>-->
                       
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div> 
                </div>
        
            </div>


        </div>

    </div>
</section>
<section>
    <div class="container mt-5">
        <div class="row">
                <div class="col-md-2">
                    <img src="https://www.pngall.com/wp-content/uploads/2016/06/Life-Insurance.png" style="height:70px;width:70" id="imageHover"/>
                    <p>Term Life Insurance</p>
                </div>
                <div class="col-md-2">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/42-business-professional-services/health-insurance.png" style="height:70px;width:70" id="imageHover"/>
                    <p>Health Insurance</p>
                </div>
                <div class="col-md-2">
                <img src="https://www.pngall.com/wp-content/uploads/5/Investment-PNG-Free-Image.png" style="height:70px;width:70" id="imageHover"/>
                <p>Investment Plan</p>
                </div>
                <div class="col-md-2">
                <img src="http://cdn.onlinewebfonts.com/svg/img_541668.png" style="height:70px;width:70" id="imageHover"/>
                <p>Car Insurance</p>
                </div>
                <div class="col-md-2">
                <img src="https://pngimage.net/wp-content/uploads/2018/06/motorbike-logo-png-6.png" style="height:70px;width:70" id="imageHover"/>
                <p>
2 Wheeler Insurance</p>
                </div>
                <div class="col-md-2">
                <img src="https://www.progressiveonline.com.au/wp-content/uploads/2022/03/istockphoto-1010669538-612x612-1.jpg" style="height:70px;width:70" id="imageHover"/>
                <p>Family Health <br>Insurance</p>
                </div>
        </div>
    
    <div class="row">
                <div class="col-md-2">
                    <img src="http://www.seveninsurtech.com/wp-content/uploads/2021/06/travel-insurance.png" style="height:70px;width:70" id="imageHover"/>
                    <p>Travel Insurance</p>
                </div>
                <div class="col-md-2">
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/money-bag_1f4b0.png" style="height:70px;width:70" id="imageHover"/>
                    <p>Gauranteed Return</p>
                </div>
                <div class="col-md-2">
                <img src="https://www.savethechildren.ca/wp-content/uploads/2018/09/girl-boy-biscuit.png" style="height:70px;width:70" id="imageHover"/>
                <p>Child Save</p>
                </div>
                <div class="col-md-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1tKQefQppUgdaAoOgrRR6wKPuBv8FKSmu4YMsulmyf3FmmLPza9WfTMuiLMR1y_Ptqc&usqp=CAU" style="height:70px;width:70" id="imageHover"/>
                <p>Retriement Plan</p>
                </div>
                <div class="col-md-2">
                <img src="https://www.ethika.co.in/wp-content/themes/ultrabootstrap-child/assets/ghi_detail/ghi.png" style="height:70px;width:70" id="imageHover"/>
                <p>
Group Health <br>Insurance</p>
                </div>
                <div class="col-md-2">
                <img src="https://cdn.dribbble.com/users/508588/screenshots/15429852/media/50df2ca6737601df6c8da0c2f2b60954.jpg?compress=1&resize=400x300&vertical=top" style="height:70px;width:70" id="imageHover"/>
                <p>View All Products</p>
                </div>
        </div>
    </div>
</section>
<section>
    <div class="container mt-5">
        <div class="row">
            <h6 class="text-info" style="margin-left:10px">ALSO BUY</h6>
        </div>
        <div class="row">
            
                <div class="col-md-2">
                <a href="">
                     <i>Term Life</i>
                     <p>Return of Premium</p>
                     </a>
                </div>
          
            
                <div class="col-md-2">
                <a href="">
                     <i>Term Life</i>
                     <p>Non-Working Spouse Plan</p>
                     </a>
                </div>


                <div class="col-md-2">
                <a href="">
                     <i>Health</i>
                     <p>Corona Virus Health Insurance</p>
                     </a>
                </div>


                <div class="col-md-2">
                <a href="">
                     <i>Health</i>
                     <p>Arogya Sanjeevani</p>
                     </a>
                </div>


                <div class="col-md-2">
                <a href="">
                     <i>Home</i>
                     <p>Home Building & Items</p>
                     </a>
                </div>


                <div class="col-md-2">
                <a href="">
                     <i>Motors</i>
                     <p>Commercial Vehicles</p>
                     </a>
                </div>

        </div>
        <div class="row">
            
            <div class="col-md-2">
            <a href="">
                 <i>Others</i>
                 <p>Pet Insurance</p>
                 </a>
            </div>
</div>
    </div>
    </div>
</section>
<section>
    <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-6">
            <center>
                <img src="https://www.anblicks.com/wp-content/uploads/2022/08/direct-to-customer.png" style="width:400px;height:400px"/>
            </center>
       
        </div>
        <div class="col-md-6 col-lg-6 col-sm-6">
        <p class="mt-5">Insurance is a means of protection from financial loss in which, in exchange for a fee, a party agrees to compensate another party in the event of a certain loss, damage, or injury. </p>
        <p class="mt-5">Insurance is a means of protection from financial loss in which, in exchange for a fee, a party agrees to compensate another party in the event of a certain loss, damage, or injury. Insurance is a means of protection from financial loss in which, in exchange for a fee, a party agrees to compensate another party in the event of a certain loss, damage, or injury. </p>
        <a href="https://pc.maxlifeinsurance.com/login">
        <button class="btn btn-warning text-white">Calculate Primium<br>
        
        </button>
</a>
        <p style="font-size:14px">UserId 32115A Password Max@1234</p>
        </div>
    </div>
</section>
<section>
    <div class="jumbotron">
        <div class="row">
            <div class="col-lg-3">
                <center>
                <div class="card bg-default" style="width:400px;border-radius:10px;">
                <div class="row mt-3">
                    <div class="col-md-6">
                        <img src="https://www.pngkit.com/png/full/302-3020680_medical-insurance-icon.png" style="margin-right:40px;height:50px;width:50px"/>
                        <h5>Protect YourSelf &<br>your family againt</h5>
                        <h4>Covid-19</h4>
                    </div>
                    <div class="col-md-6">
                        <center>
                            <img src="https://cdn.pixabay.com/photo/2020/07/23/11/07/corona-virus-5431028_960_720.png" style="height:100px;width:100px"/>
                        </center>
                    </div>
                </div>
            </div>
                </center>
            </div>
            <div class="col-lg-1">
                </div>
            <div class="col-lg-3">
            <center>
                <div class="card" style="width:400px;border-radius:10px;">
                <div class="row ">
                    <div class="col-md-6 mt-3">
                        <img src="https://www.pngall.com/wp-content/uploads/2016/06/Investing-PNG-Picture.png" style="margin-right:40px;height:50px;width:50px;"/>
                        <h5 style="margin-left:5px">Invest Rs 10K and Get & Rs 1 Crore return*</h5>
                        <h4>Covid-19</h4>
                    </div>
                    <div class="col-md-6">
                        <center>
                            <img class="mt-3" src="https://uxwing.com/wp-content/themes/uxwing/download/19-e-commerce-currency-shopping/indian-rupee-coin-color.png" style="height:70px;width:70px"/>
                        </center>
                    </div>
                </div>
            </div>
</center>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-3">
            <center>
                <div class="card" style="width:400px;border-radius:10px;">
                <div class="row ">
                    <div class="col-md-6">
                        <img src="https://www.freepnglogos.com/uploads/logo-home-png/vector-bambu-home-logo-download-vector-logos-22.png" style="margin-right:40px;height:50px;width:50px;"/>
                        <h5 style="margin-left:5px">50L Cover for home</h5>
                        <h4>Just for Rs 123/month</h4>
                    </div>
                    <div class="col-md-6">
                        <center>
                            <img class="mt-3" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/house-icon.png" style="height:70px;width:70px"/>
                        </center>
                    </div>
                </div>
            </div>
</center>   
            </div>
            <div class="col-lg-1"></div>
        </div>
    </div>
</section>
<section>
    <div class="container">
            <div class="row mt-5">
                <div class="col-lg-4" >
                    <h3 class="mt-5">What makes</h3>
                    <h3>Best Place to buy</h3>
                    <h3>insurance in India?</h3>

                </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-5">
                            <div class="card mt-3"  style="height:200px;width:200px;border-left:2px solid blue">
                        <img class="mt-3" src="https://cdn.iconscout.com/icon/free/png-256/party-2-62612.png" style="height:30px;width:30px;margin-left:5px"/>
                            <h5 style="margin-left:5px" class="mt-3 text-info"> Over 9 million</h5>
                            <p style="margin-left:5px">customers trust us & have bought their insurance</p>
                    </div>
                           
                        </div>
                        <div class="col-md-5">
                        <div class="card mt-5" style="height:200px;width:200px;border-left:2px solid orange">
                        <img class="mt-3" src="https://icons.veryicon.com/png/o/application/wq/search-171.png" style="height:30px;width:30px;margin-left:5px"/>
                            <h5 style="margin-left:5px" class="mt-3 text-success">50+ insurers</h5>
                            <p style="margin-left:5px">partnered with us so that you can compare easily & transparently</p>
                   
                    </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4"></div>
                        <div class="col-md-4 mt-3">
                            <div class="card" style="height:200px;width:200px;border-left:2px solid red">
                            <img class="mt-3" src="https://images.vexels.com/media/users/3/134792/isolated/lists/11021ac040438214430837e55f4225b7-3d-smile-emoticon-emoji.png" style="height:30px;width:30px;margin-left:5px"/>
                            <h5 style="margin-left:5px" class="mt-3 text-warning">The Best Price</h5>
                            <p style="margin-left:5px">for all insurance plans available online</p>
                        </div>
                           
                        </div>
                        <div class="col-md-4  mt-3">
                        <div class="card mt-5" style="height:200px;width:200px;border-left:2px solid green">
                        <img class="mt-3" src="https://icons.veryicon.com/png/o/miscellaneous/icon-library-of-grey-sun-1/work-experience-1.png" style="height:30px;width:30px;margin-left:5px"/>
                            <h5 style="margin-left:5px" class="mt-3 text-dark">Claims</h5>
                            <p style="margin-left:5px">support built in with every policy for help, when you need it the most</p>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</section>
<div class="jumbotron mt-5">
<section class="mt-5">
<div class="container mt-5" >
            <div class="section-header mt-5">
                <div class="section-heading " style="">
                               
                </div>
            </div>
            <div class="row">
           
                <div class="col-12 no-padding" >
                    <div class="doctors-slider" >
                  
                        <div class="slide-item col-12" >
                        
                            <div class="team-block p-relative" >
                                <div class="inner-box">
                               
                                
                                   <div class="row">
                                   <div class="col-lg-12">
                                    <div>
                                        <center>
            <img src="https://static.pbcdn.in/cdn/images/home-v1/made-in-india-banner.png"/>
                                                        </center>
</div>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                     
                    
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box">
                                   
                                   <div class="row">
                                   <div class="col-lg-12">
                                    <div>
                                        <center>
                                        <img src="https://static.pbcdn.in/cdn/images/home-v1/pbaskci_banner_1.png"/>
</center>
</div>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" >
                                 
                                   <div class="row">
                                   <div class="col-lg-12">
                                    <div>
                                    <center>
                                        <img src="https://static.pbcdn.in/cdn/images/home-v1/made-in-india-banner.png"/>
</center>
</div>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide-item col-12">
                            <div class="team-block p-relative">
                                <div class="inner-box" >
                                   
                                   <div class="row">
                                   <div class="col-lg-12">
                                    <div>
                                    <center>
                                        <img src="https://static.pbcdn.in/cdn/images/home-v1/beware-of-fraudsters.png"/>
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
</section>
</div>
<section>
    <div class="container">
        <h3>Advantage</u></h3>
        <div class="row">
            <div class="col-lg-6">
        <h4>When you buy insurance from us, you get more than just financial safety. You also get: our promise of simplifying complex insurance terms and conditions, quick stress-free claims, instant quotes from top insurers and being present for you in the toughest of times.</h4>
        </div>
        <div class="col-lg-6"></div>
        </div>
    <div class="row mt-5">
            <div class="col-lg-1">

            </div>
            <div class="col-lg-2">
                   
                        <div class="card" style="border:0px;">
                            <center><img src="https://cdn.iconscout.com/icon/free/png-256/credit-card-1454538-1228446.png" style="height:60px;width:60px"/>

                            <h5>One Of the best Price</h5></center>
                        </div>
                   
            </div>
            <div class="col-lg-2">
            <div class="card" style="border:0px;">
            <center>
                            <img src="https://cdn-icons-png.flaticon.com/512/177/177885.png" style="height:60px;width:60px"/>
                            <h5>
Unbiased Advice</h5></center>
                        </div>
            </div>
            <div class="col-lg-2">
            <div class="card" style="border:0px;">
            <center>
                            <img src="https://cdn-icons-png.flaticon.com/512/1600/1600130.png" style="height:60px;width:60px"/>
                            <h5>100% Reliable</h5></center>
                        </div>
            </div>
            <div class="col-lg-2">
            <div class="card" style="border:0px;">
            <center>
                            <img src="https://www.fincover.com/wp-content/uploads/2020/10/car-ins-renew-1.png" style="height:60px;width:60px"/>
                            <h5>Claim Support</h5>
</center>
                        </div>
            </div>
            <div class="col-lg-2">
            <div class="card" style="border:0px;">
            <center>
                            <img src="https://infra-cloudfront-talkdeskcom.svc.talkdeskapp.com/talkdesk_com/future-workforce-engagement-the-rise-the-hybrid-contact-center-435x290.png" style="height:60px;width:60px"/>
                            <h5>Happy to Help</h5>
</center>
                        </div>
            </div>
            <div class="col-lg-1">

            </div>
    </div>
    </div>
</section>
<section class="mt-5">
    <div class="container mt-5">
            <div class="row">
                <div class="col-lg-5">
                    <h3><u>Get</u> App</h3>
                <p>Get Control of all your insurance needs anywhere,anytime</p>
                <p class="mt-5"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" style="height:30px;width:30px"/>Compare different insurance policies</p>
                <p class="mt-5"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" style="height:30px;width:30px"/>Buy, store and share all your policies online</p>
                <p class="mt-5"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" style="height:30px;width:30px"/>Track your policy status on the go</p>
                <p class="mt-5"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" style="height:30px;width:30px"/>Download your policy with a single tap</p>
                    <div class="row">
                        <div class="col-lg-6">

                            <button class="btn btn-dark" style="width:80%">
                            GET IT ON<br>
                            <img src="https://cdn.icon-icons.com/icons2/2119/PNG/512/social_google_play_store_icon_131220.png" style="height:20px;width:20px"/>Google Play</button>
                        </div>
                        <div class="col-lg-6">
                        <button class="btn btn-dark" style="width:80%"> Download on the<br><img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-antivirus-software-policy-library-and-information-34.png" style="height:20px;width:20px"/>App Store</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <img src="https://static.pbcdn.in/cdn/images/home-v1/get-app.png"/>
                </div>
            </div>
    </div>
</section>

 
    @include('layout.logofooter')  

    @include('layout.mutualfundfooter')
    @include('layout.footer')
