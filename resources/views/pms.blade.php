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
</style>
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

             
                @include('register_form') 
                
                </div>
        
            </div>


        </div>

    </div>
 
    <section class="section-padding  doctors-team-style-2" style="padding: 0px 0px 0px 0px;">
        <div class="container">
            <div class="section-header">
                <div class="section-heading " style="margin-top:10px">
                   <h3>Explore</h3>
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
                                        <!-- <h4 class="text-info">Reliance Retail</h4> -->
                <img src="https://abakkusinvest.com/wp-content/themes/twentytwenty/assets/images/new-ban.png" style="height:70px"/>
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
                                    <img src="https://cdn.dribbble.com/users/2682232/screenshots/9023345/dribbble_shot_hd_-_1_4x.jpg" style="height:70px"/>
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXj-Li5b8gv7TCFJtxfQnbwULP-BhpG88yY_UBBiOaGSYoyGQUEuGg3pHs69PYFjOlMQ&usqp=CAU" style="height:70px"/>
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-6DD1ZDYuMNISVY4Jh-a_0-BEBqOv-nISjZUR8Zac8j2hj4y2hrB1JJJV8ZtKaJNevM&usqp=CAU" style="height:70px"/>
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
                                    <img src="https://previews.123rf.com/images/vectorknight/vectorknight1904/vectorknight190400018/123990189-career-growth-to-success-business-people-vector-illustration-achievement-concept-financial-wealth-an.jpg"style="height:70px"/>
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
                                    <img src="https://previews.123rf.com/images/ontsunan/ontsunan1812/ontsunan181200020/118386199-mini-people-create-idea-to-success-business-illustration-vector-graphic-on-white-background-flat-car.jpg" style="height:70px"/>
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
    <section class="mt-5">
    <div class="container">
        <div class="row">
            <center>
                <h2 style="color:black">Our Philosophy</h2>
                <h3 style="color:black">In EQUITY INVESTMENTS Performance depends on simply 2 factors</h3>
            </center>
        </div>
        <div class="row" >
           
           <div class="col-lg-6">
            <h3 class="text-info">Investing in Quality Portfolio</h3>
            <hr>
            <h4>A quality portfolio is the one that is not too much diversified, & still offers the best risk-adjusted returns. With us, this is identified through unbiased selection based on our proprietary analytics. It’s easy to socialize and sell products, which is what most wealth managers do. We’re reshaping the wealth management industry by sticking to basics, in-depth analytics. We maintain insight + integrity and aim at the long term prosperity of clients.</h4>
           </div>
           <div class="col-lg-6">
           <h3 class="text-info">Holding it for Long Term</h3>
            <hr>
            <h4>
            It is easy to aspire for a long term horizon when making an investment, but practically very difficult to maintain. With us, this is achieved through our educative super simple & articulate proprietary content. Holding on to the portfolio requires high conviction in the portfolio at all points of time, else, one tends to exit early owing to the traps of emotions or impatience.  We ensure our clients make informed investment decisions.
            </h4>
           </div>
        </div>
    </div>
</section>
<section>
    <div class="container">
        <div class="row">
      
                <h2 style="color:black" class="mt-5">Why Us</h2>

        </div>
        <div class="row">
            <table>
                <tr>
                    <td>
                <img src="https://i.dlpng.com/static/png/7046530_preview.png"/>
                <h5>FOCUSED &
CONCENTRATED
PORTFOLIOS</h5>
                    </td>
                    <td>
                    <img src="https://media.istockphoto.com/vectors/group-of-friends-holding-hands-jumping-vector-id165768414?k=20&m=165768414&s=170667a&w=0&h=RW89zC3EKgA1ZzM1Ky7Z4ANf1nrXPZZxYhsX0swUa40="/>
                    <h5 class="mt-5">HIGH
PERFORMANCE
PHILOSOPHIES</h5>
                        </td>
                        <td>
                        <img src="https://www.mishainfotech.com/images/hrms-im.jpg"/>
                        <h5 class="mt-5">ADEPT
PORTFOLIO
MANAGERS</h5>
                        </td>
                        <td>
                        <img src="https://www.kapturecrm.com/images/payments/payments-collection/Banner%20Img.svg"/>
                        <h5 class="mt-5">ZERO
SET UP
FEES</h5>
                        </td>
                        <td>
                        <img src="https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2020/03/advantages-of-mutual-funds-vector.png"/>
                        <h5 class="mt-5">MINIMAL
EXIT LOAD
STRUCTURES</h5>
                        </td>
                        <td>
                        <img src="https://www.counterpath.com/wp-content/uploads/2019/10/01-Softphone-1.jpg"/>
                        <h5>BEST IN CLASS
INVESTMENT SERVICE</h5>
                        </td>
                </tr>
            </table>
        </div>
    </div>
</section>
<section>
        <div class="container mt-5">
        
          
                <div class="row">
                    <div class="col-md-8" >
                   <img id="pms" src='https://abakkusinvest.com/wp-content/themes/twentytwenty/assets/images/new-ban.png' style="height:400px;"/>
                    </div>
                    <div class="col-md-4">
                        <h3 class="" style="color:teal">Why & How Portfolio Management Services (PMS)</h3>
                        <p>PMSs focusses on a few selected companies and says no to the rest, whereas Mutual funds are made to follow too diversified approach because these are products meant for the masses. Though this helps mutual funds in reducing volatility to an extent, but more doesn’t always mean low risk, and in fact, exposure to more companies may increase the risk of buying less known.</p>
                    </div>
                </div>
            </div>
         
        </div>
</section>
<section class="mt-5">
        <div class="container mt-5">
         
           <div>
                <div class="row">
                    <div class="col-md-4">
                    <h3 class="" style="color:teal">Why and how Alternative Investment Funds(AIF)</h3>
                        <p>AIFs combines the operational ease of a mutual fund and the flexibility of a PMS making it a perfect blend geared for generating optimum performance for a stipulated investment objective.

 

To enhance risk-adjusted performance, these products can use complex strategies like unlisted equity investments, long-short hedging style of investments etc</p>
                    </div>
                    <div id="pms" class="col-md-8" style="height:300px;width:100%;background-image:url('https://miro.medium.com/max/624/1*A1_AbCVvlu5gX2giYpnCvQ.png');">
                        
                    </div>
                </div>
            </div>
         
        </div>
</section>

 
    @include('layout.logofooter')  
    
   
    @include('layout.mutualfundfooter')
    @include('layout.footer')
