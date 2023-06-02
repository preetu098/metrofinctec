@include('layout.header')
<style>
   #cardhover
    {
        transition:all 5s;
      border:0px;
    }
   
#cardhover:hover 
{

transform:scale(1.1);
box-shadow:2px 2px 2px 2px black;
}
.cardborderless
{border:0px;}

.inner-box 
{
    width:400px;
    height:400px;
}
#ho:hover 
{
    transform:scale(0.9);
    transition:all 4s;
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
                                    src="http://www.usnews.com/cmsmedia/2b/39/5ab3fbcb493f8a65f6de03ca4b5c/150123-budget-stock.jpg"
                                    alt="First slide" style="height:340px">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>
                                </div>
                            </div>
                            <div class="carousel-item"> 
                                <img class="d-block w-100"
                                    src="https://www.sbimf.com/campaign/sip_generic/images/Banner02.gif"
                                    alt="Second slide" style="height:340px">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100"
                                    src="https://tradingetfs.com/wp-content/uploads/2019/08/long-bond-fund-poised-to-hit-new-highs.jpg"
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
            </section>
            </div>


        </div>

    </div>
<!--start slider for security-->
<section class="section-padding  doctors-team-style-2" style="padding: 0px 0px 22px 0px;">
        <div class="container" >
            <div class="section-header">
                <div class="section-heading " style="margin-top:10px">
                   <h3>Explore Security</h3>
                </div>
            </div>
            
            <!--  <div class="responsivegrid aem-GridColumn aem-GridColumn--default--4" style="background-color:white;box-shadow:2px 2px 12px 2px black">-->
            <!--<div class="row">-->
            <!--    <div class="col-md-4">-->
            <!--        <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">-->
            <!--            <ol class="carousel-indicators">-->
            <!--                <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>-->
            <!--                <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>-->
            <!--                <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>-->
            <!--            </ol>-->
            <!--            <div class="carousel-inner" >-->
            <!--            <div class="carousel-item active" >-->
            <!--                    <div class="card" >-->
                                        
            <!--                                <center>-->
            <!--                                    <p class="text-danger">9.25% TATA CAPITAL FINANCIAL SERVICES 2025</p>-->
            <!--                                    <h4>9.25%</h4>-->
            <!--                                    <p>CRISIL AAA/Stable & CARE AAA/Stable</p>-->
            <!--                                    <img src="https://d3ca48y7jz4ig.cloudfront.net/companies/logos/42995/tata-capital_thumb.png?1571809410" style="height:100px;"/>-->
            <!--                                </center>-->
                                     
            <!--                    </div>-->
                             
            <!--                </div>-->
            <!--                <div class="carousel-item"> -->
            <!--                <div class="card">-->
                                     
            <!--                                <center>-->
            <!--                                    <p class="text-danger">9.30% HDFC CREDILA FINANCIAL SERVICES PVT LTD-2025</p>-->
            <!--                                    <h4>9.3%</h4>-->
            <!--                                    <p>CRISIL AAA/Stable   CARE AAA/Stable</p>-->
            <!--                                    <img src="https://pbs.twimg.com/profile_images/1057132896056561665/fJDhUKkw_400x400.jpg" style="height:100px;"/>-->
            <!--                                </center>-->
                                      
            <!--                    </div>-->
            <!--                </div>-->
            <!--                <div class="carousel-item">-->
            <!--                <div class="card">-->
                                      
            <!--                                <center>-->
            <!--                                <p class="text-danger">9.35% ADANI PORTS AND SPECIAL ECONOMIC ZONE LIMITED-2026</p>-->
            <!--                                    <h4>9.35%</h4>-->
            <!--                                    <p>ICRA AA+/Stable   IND AA+/Stable</p>-->
            <!--                                    <img src="https://www.adaniports.com/-/media/Project/Ports/Newsroom/adani-ports.png?la=en&hash=9138B70B40720245BC452EAF0079CE0A&hash=9138B70B40720245BC452EAF0079CE0A" style="height:100px;"/>-->
            <!--                                </center>-->
                                       
            <!--                    </div>-->
            <!--                    <div class="carousel-caption d-none d-md-block">-->
            <!--                        <h5>...</h5>-->
            <!--                        <p>...</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="carousel-item">-->
            <!--                <div class="card">-->
            <!--                            <div class="card-body">-->
            <!--                                <center>-->
            <!--                                    <p class="text-danger">9.00% SHRIRAM TRANSPORT FINANCE COMPANY LIMITED-2028</p>-->
            <!--                                    <h4>9%</h4>-->
            <!--                                    <p>AA+ BY CRISIL & IND RATING</p>-->
            <!--                                    <img src="https://www.stfc.in/bundle/assets/images/logo.png" style="height:100px;"/>-->
            <!--                                </center>-->
            <!--                            </div>-->
            <!--                    </div>-->
            <!--                    <div class="carousel-caption d-none d-md-block">-->
            <!--                        <h5>...</h5>-->
            <!--                        <p>...</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="carousel-item">-->
            <!--                <div class="card">-->
            <!--                            <div class="card-body">-->
            <!--                                <center>-->
            <!--                                    <p class="text-danger">8.35% INDIABULLS HOUSING FINANCE LIMITED-08/09/2027</p>-->
            <!--                                    <h4>8.35%</h4>-->
            <!--                                    <p>AA+  by BWR   AA  by CARE</p>-->
            <!--                                    <img src="https://cdn.freelogovectors.net/wp-content/uploads/2020/09/indiabulls_housing_finance_logo.png" style="height:100px;"/>-->
            <!--                                </center>-->
            <!--                            </div>-->
            <!--                    </div>-->
            <!--                    <div class="carousel-caption d-none d-md-block">-->
            <!--                        <h5>...</h5>-->
            <!--                        <p>...</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="carousel-item">-->
            <!--                <div class="card">-->
            <!--                            <div class="card-body">-->
            <!--                                <center>-->
            <!--                                    <p class="text-danger">09.30% INDIABULLS HOUSING FINANCE LIMITED - 29/06/2026</p>-->
            <!--                                    <h4>9.3000%</h4>-->
            <!--                                    <p>AA+  by BWR   AA-  by CARE</p>-->
            <!--                                    <img src="https://cdn.freelogovectors.net/wp-content/uploads/2020/09/indiabulls_housing_finance_logo.png" style="height:100px;"/>-->
            <!--                                </center>-->
            <!--                            </div>-->
            <!--                    </div>-->
            <!--                    <div class="carousel-caption d-none d-md-block">-->
            <!--                        <h5>...</h5>-->
            <!--                        <p>...</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="carousel-item">-->
            <!--                <div class="card">-->
            <!--                            <div class="card-body">-->
            <!--                                <center>-->
            <!--                                    <h3 class="text-danger">9.25% TATA CAPITAL FINANCIAL SERVICES 2025</h3>-->
            <!--                                </center>-->
            <!--                            </div>-->
            <!--                    </div>-->
            <!--                    <div class="carousel-caption d-none d-md-block">-->
            <!--                        <h5>...</h5>-->
            <!--                        <p>...</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="carousel-item">-->
            <!--                <div class="card">-->
            <!--                            <div class="card-body">-->
            <!--                                <center>-->
            <!--                                    <h3 class="text-danger">9.25% TATA CAPITAL FINANCIAL SERVICES 2025</h3>-->
            <!--                                </center>-->
            <!--                            </div>-->
            <!--                    </div>-->
            <!--                    <div class="carousel-caption d-none d-md-block">-->
            <!--                        <h5>...</h5>-->
            <!--                        <p>...</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="carousel-item">-->
            <!--                <div class="card">-->
            <!--                            <div class="card-body">-->
            <!--                                <center>-->
            <!--                                    <h3 class="text-danger">9.25% TATA CAPITAL FINANCIAL SERVICES 2025</h3>-->
            <!--                                </center>-->
            <!--                            </div>-->
            <!--                    </div>-->
            <!--                    <div class="carousel-caption d-none d-md-block">-->
            <!--                        <h5>...</h5>-->
            <!--                        <p>...</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->

            <!--            <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button"-->
            <!--                data-slide="prev">-->
            <!--                <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
            <!--                <span class="sr-only">Previous</span>-->
            <!--            </a>-->
            <!--            <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button"-->
            <!--                data-slide="next">-->
            <!--                <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
            <!--                <span class="sr-only">Next</span>-->
            <!--            </a>-->
            <!--        </div>-->
            <!--    </div>-->
                      <html>
	<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

<style>
    body 
    {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        overflow-x: hidden;
     

    }
    .hi-slide 
    {
        position: relative;
        width:754px;
        height:292px;
        margin:5px auto 0;

    }
     .hi-slide .hi-next,
    .hi-slide .hi-pre 
    {
            position:absolute;
            top:50%;
            width:40px;
            height:40px;
            margin-top:-20px;
            border-radius:50px;
            line-height:40px;
            text-align:center;
            cursor:pointer;
            background-color:white;
            color:black;
            transition:all 0.7s;
            font-size:20px;
            font-weight: bold;

    }

    
    .hi-slide .hi-pre 
    {
        left:-70px;
    }
    .hi-slide .hi-pre::before
    {
       content:'<';
    }
    .hi-slide .hi-next 
    {
        right:-70px;
    }
    .hi-slide .hi-next::before
    {
       content:'>';
    }
    .hi-slide > ul 
    {
        list-style:none;
        position:relative;
        width:100px;
        height:100px;
        margin:0px;
        padding:0px;

    }
    .hi-slide >ul >li 
    {
        overflow:hidden;
        position:absolute;
        z-index:0;
        left:377px;
        top:17px;
        width:0;
        height:0;
        margin:0;
        padding:0;
   
        
       
        cursor:pointer;

    }
    .hi-slide > ul >li >img 
    {
        width:100%;
        height:100%;
        background-position:center ;

    } 
</style>
	</head>
	<body>
	
			<div class="t hi-slide">
				  <div class="hi-pre"></div>
				  <div class="hi-next"></div>
				          <ul class="list-group">
            <li class="list-group-item"><img class="d-block w-100" src="https://thebrakereport.com/wp-content/uploads/2019/01/Tata-logo-2000-2560x1440.png"
                    alt=""></li>

            <li class="list-group-item"><img class="d-block w-100" src="https://www.gurpreetsaluja.com/wp-content/uploads/2020/09/HDFC-LOGO.png"
                        alt=""></li>
            <li class="list-group-item"><img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adani_2012_logo.png/1200px-Adani_2012_logo.png"
                        alt=""></li>
            <li class="list-group-item"><img class="d-block w-100" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/mityzgqkbz4kze89xohu"
                            alt=""></li>
                            <li class="list-group-item"><img class="d-block w-100" src="http://assets.stickpng.com/images/627ccd131b2e263b45696ab3.png"
                                alt=""></li>
                    <li class="list-group-item"><img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png"
                                alt=""></li>
                    <li class="list-group-item"><img class="d-block w-100" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/cnpnxbca3xjuqggdqpxn"
                                    alt=""></li>
                                    <li class="list-group-item"><img class="d-block w-100" src="https://iconape.com/wp-content/files/da/207276/png/207276.png"
                                        alt=""></li>
                            <li class="list-group-item"><img class="d-block w-100" src="https://i2.wp.com/opportunitycell.com/wp-content/uploads/2022/01/NHAI-Recruitment-2021.jpg?fit=544%2C485&ssl=1"
                                        alt=""></li>
                            <li class="list-group-item"><img class="d-block w-100" src="https://seeklogo.com/images/P/pnb-housing-logo-39B3332301-seeklogo.com.png"
                                            alt=""></li>
											</ul>
			</div>
		
		    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
 <script>
(function($) {
   
    var slide = function(ele,options) {
        var $ele = $(ele);
       
        var setting = {
        		
            speed: 1000,
        
            interval: 2000,
            
        };
      
        $.extend(true, setting, options);
        
        var states = [
            { $zIndex: 1, width: 100, height: 150, top: 69, left: 100, $opacity: 0.2 },
            { $zIndex: 2, width: 110, height: 170, top: 59, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 150, height: 218, top: 35, left: 76, $opacity: 0.7 },
            { $zIndex: 4, width: 205, height: 288, top: 0, left: 229, $opacity: 1 },
            { $zIndex: 3, width: 150, height: 218, top: 35, left: 436, $opacity: 0.7 },
            { $zIndex: 2, width: 110, height: 170, top: 59, left: 586, $opacity: 0.4 },
            { $zIndex: 1, width: 100, height: 150, top: 69, left: 466, $opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

   
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

       
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

       
        function next() {
           
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }

    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
    
        return this;
    }
})(jQuery);
</script>
    <script>
        $('.t').hiSlide({
  speed: 1000,
  interval: 2000,
});

        $('.t').hiSlide();

    </script>
	</body>
	
</html>  
                    </div>
                </div>
            </div>
        </div>
    </section>
    
<!--end slide for security-->
<div class="container">
    <div class="row">
        <div class="col-lg-12"  style="height:500px;overflow:scroll">
        <table class="table table-hover">
                                                    <tr style="color:white;background-color:#3CB371">
                                                        <th>Security Name</th>
                                                        <th>Coupon Rate</th>
                                                        <th>ISIN</th>
                                                        <th>Rating</th>
                                                        <th>IP Dates</th>
                                                      
                                                        <th>Maturity Dates</th>
                                                        <th>Price Rs</th>
                                                        <th>YTM (Ann)</th>
                                                       
                                                        <th>MULTIPLE QTM</th>
                                                        <th>Available Qty (In Lacs)</th>
                                                        <th>Face Value</th>
                                                        <th style="width:120px">Action</th>
                                                    </tr>
                                                    <tr>
                                                        <th>9.25% TATA CAPITAL FINANCIAL SERVICES 2025</th>
                                                        <th>9.25%</th>
                                                        <th>INE306N08078</th>
                                                        <th>CRISIL AAA/Stable & CARE AAA/Stable</th>
                                                        <th>7/22/2022</th>
                                                     
                                                        <th>22-Jul-2025</th>
                                                        <th>104.4032</th>
                                                        <th>7.6%</th>
                                                      
                                                        <th>MULTIPLE OF 10 LACS</th>
                                                        <th>UP TO 30 LACS</th>
                                                        <th>1000000</th>
                                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                                    </tr>
                                                    <tr>
                                                        <th>9.30% HDFC CREDILA FINANCIAL SERVICES PVT LTD-2025</th>
                                                        <th>9.3%</th>
                                                        <th>INE539K08146</th>
                                                        <th>CRISIL AAA/Stable   CARE AAA/Stable</th>
                                                        <th>12/9/2022</th>
                                                      
                                                        <th>09-Oct-2025</th>
                                                        <th>104.4249</th>
                                                        <th>7.72%</th>
                                                      
                                                        <th>10 LACS ONLY </th>
                                                        <th>10 LACS ONLY </th>
                                                        <th>1000000</th>
                                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                                    </tr>
                                                    <tr>
                                                        <th>9.35% ADANI PORTS AND SPECIAL ECONOMIC ZONE LIMITED-2026</th>
                                                        <th>9.35%</th>
                                                        <th>INE742F07353</th>
                                                        <th>ICRA AA+/Stable   IND AA+/Stable</th>
                                                        <th>5/27/2022</th>
                                                      
                                                        <th>27-May-2026</th>
                                                        <th>103.5901</th>
                                                        <th>8.25%</th>
                                                      
                                                        <th>MULTIPLE OF 10 LACS</th>
                                                        <th>UP TO 50 LACS </th>
                                                        <th>1000000</th>
                                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                                    </tr>
                                                    <tr>
                                                        <th>9.00% SHRIRAM TRANSPORT FINANCE COMPANY LIMITED-2028</th>
                                                        <th>9%</th>
                                                        <th>INE721A08DA2</th>
                                                        <th>AA+ BY CRISIL & IND RATING</th>
                                                        <th>3/28/2022</th>
                                                      
                                                        <th>28-Mar-2028</th>
                                                        <th>100.3475</th>
                                                        <th>8.9%</th>
                                                      
                                                        <th>MULTIPLE OF 10 LACS</th>
                                                        <th>UP TO 1.6 CR</th>
                                                        <th>1000000</th>
                                                        <td><button class="btn" style="color:white;background-color:#3CB371">Invest
                                                Now<button></td>
                                                    </tr>
</table>                             
        </div>
    </div>
   </div>
<!--start data as security-->
<!--end data as security-->
    <div class="container mt-5">
    <div class="row">
            <div class="col-lg-4">
                    <div class="card cardborderless" id="cardhover">
                    
                            <img src="https://cdn.fundsindia.com/prelogin/person-with-locker.webp?auto=format&fit=max&w=384" style="height:200px"/>
                    
                    </div>
            </div>
            
            <div class="col-lg-8">
            <div class="card cardborderless">
                           
                           <p>A bond fund, also referred to as a debt fund, is a pooled investment vehicle that invests primarily in bonds (government, municipal, corporate, convertible) and other debt instruments, such as mortgage-backed securities (MBS). The primary goal of a bond fund is often that of generating monthly income for investors.</p>
                            
                    </div>
            </div>
           
    </div>
    <div class="row">
          
            
            <div class="col-lg-6 mt-5">
            <div class="card cardborderless">
                          
            <p>A bond fund, also referred to as a debt fund, is a pooled investment vehicle that invests primarily in bonds (government, municipal, corporate, convertible) and other debt instruments, such as mortgage-backed securities (MBS). The primary goal of a bond fund is often that of generating monthly income for investors.</p>
                               
                           
                    </div>
            </div>
            <div class="col-lg-6">
            <div class="card cardborderless" id="cardhover">
                    
                    <img src="https://cdn.fundsindia.com/prelogin/one-platform.webp?auto=format&fit=max&w=384" style="height:200px"/>
            
            </div>
            </div>
    </div>
    </div>
<div class="container mt-5">
  
    <div class="row">
        <div class="col-lg-2" id="ho">
            <center>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/001/829/850/small/bank-interest-and-investment-look-for-mutual-fund-and-currency-option-to-get-maximum-profit-for-return-on-investment-roi-character-concept-illustration-for-web-landing-page-mobile-apps-card-free-vector.jpg" style="height:200px;width:200px"/>
</center>
        </div>
        <div class="col-lg-2" id="ho">
        <center>
        <img src="https://www.forbes.com/advisor/wp-content/uploads/2021/06/Invest.svg" style="height:200px;width:200px"/>
</center>
        </div>
        <div class="col-lg-2" id="ho">
            <center>
        <img src="https://img.freepik.com/free-vector/senior-characters-couple-getting-profit-celebrating-old-man-woman-dancing-huge-money-pile-pension-income_87771-19792.jpg?w=2000" style="height:200px;width:200px"/>
</center>
        </div>
        <div class="col-lg-2" id="ho">
            <center>
        <img src="https://img.freepik.com/free-vector/finance-help-mutual-fund-business-concept-office-characters-businessman-businesswoman-shaking-hands-huge-glass-jar-with-gold-coins-green-sprout-dollar-sign-cartoon-vector-illustration_87771-11135.jpg?w=2000" style="height:200px;width:200px"/>
</center>
        </div>
        <div class="col-lg-2" id="ho">
            <center>
        <img src="https://img.freepik.com/free-vector/pension-fund-illustration-with-agent-giving-coins-money-bag-elderly-as-concept-this-illustration-can-be-use-website-landing-page-web-app-banner_9829-24.jpg?w=2000" style="height:200px;width:200px"/>
</center>
        </div>
        <div class="col-lg-2" id="ho">
            <center>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/fundraising-concept-3142062-2617876.png" style="height:200px;width:200px"/>
</center>
        </div>
    </div>

</div>
<div class="container mt-5">
    <div class="row">
           <div class="col-lg-10 mt-5">
            <h4>A bond fund, also referred to as a debt fund, is a pooled investment vehicle that invests primarily in bonds (government, municipal, corporate, convertible) and other debt instruments, such as mortgage-backed securities (MBS). The primary goal of a bond fund is often that of generating monthly income for investors</h4>
           </div>
           <div class="col-lg-2 mt-5">
                <img src="https://www.bazaarindicator.com/imgp/what-is-mutual-funds.png"/>
           </div>
    </div>
</div>
     <!-- Start Faqs -->
     <section class="section-padding  doctors-team-style-2" style="padding: 44px 0px 22px 0px;height:500px">
        <div class="container">
            <div class="section-header">
                <div class="section-heading " style="">
                               <h3>Funds House</h3>
                </div>
            </div>
            <div class="row">
           
                <div class="col-12 no-padding" >
                    <div class="doctors-slider" >
                  
                        <div class="slide-item col-12" >
                        
                            <div class="team-block p-relative" >
                                <div class="inner-box" style="height:150px;box-shadow:0px 0px 0px">
                               
                                
                                   <div class="row">
                                   <div class="col-lg-12">
                                    <div>
                                        <center>
            <img src="http://loanbeku.com/wp-content/uploads/2017/10/Tata-Capital-bank.png"/>
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
            <img src="https://logos-world.net/wp-content/uploads/2020/11/HDFC-Bank-Logo.png"/>
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
            <img src="https://orissadiary.com/wp-content/uploads/2018/08/264279_528701413838836_555702680_n-768x448.png"/>
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
                                        <img src="http://weeassure.com/assets/images/shriram-transport-finance.png"/>
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
                                        <img src="https://www.govnokri.in/wp-content/uploads/2020/02/EXIM-Bank.png"/>
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
                                        <img src="https://pbs.twimg.com/media/EbRWhnmUMAA6YCc.jpg"/>
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
                                        <img src="https://logos-download.com/wp-content/uploads/2016/04/BNP_Paribas_logo_logotype_emblem.png"/>
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
                                        <img src="https://www.thehindubusinessline.com/incoming/6czm86/article27999953.ece/alternates/LANDSCAPE_1200/bharti-axa-Gen-Insurance-logo-01-3png"/>
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
                                        <img src="https://bloghost0.orowealth.com/wp-content/uploads/2018/07/CRMF-Logo-01.png"/>
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
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLO_RIWLjvBdGQdfKedkZoBu1lVqeVvxcU-saj813Ed6mYep4_LDniLFVkd-zak8PPqM&usqp=CAU"/>
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
                                        <img src="https://media-exp1.licdn.com/dms/image/C5116AQGUL7qVCzQ2qg/profile-displaybackgroundimage-shrink_200_800/0/1517067492712?e=1660176000&v=beta&t=MPl7gBzU1ZmQqnmqsHy74czt1OfI1y2lIgg5KwPI5-0"/>
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
                                        <img src="https://content.indiainfoline.com/_media/iifl/img/article/2019-05/06/full/1557143914-0954.jpg"/>
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
                                        <img src="https://iconape.com/wp-content/files/mq/182656/svg/indiabulls-2018-seeklogo.com.svg"/>
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
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5ntWaou8XM4bob_VPi3YxcyzYKK6w-gOwkAnQK9nDa0k5DZORdZmziow_3COfvWw7A&usqp=CAU"/>
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
                                        <img src="https://www.greatplacetowork.in/great/admin/uploads/company_logo/16704009681585566551.jpg"/>
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
                                        <img src="https://logos-download.com/wp-content/uploads/2016/06/Kotak_Mahindra_Bank_logo.png"/>
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
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png"/>
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
                                        <img src="https://download.logo.wine/logo/Axis_Bank/Axis_Bank-Logo.wine.png"/>
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
                                        <img src="https://21btrj3i7vy42n2f4044931p-wpengine.netdna-ssl.com/wp-content/uploads/2021/09/Bank-of-baroda.jpg"/>
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
                                <li><a href="https://www.facebook.com/heliosfintec/"><i class="fa fa-facebook-f"></i></a>
                                </li>
                                <li><a href="https://twitter.com/heliosfintec/"><i class="fa fa-twitter"></i></a>
                                </li>
                                <li><a href="https://www.instagram.com/heliosfintec/"><i class="fa fa-instagram"></i></a>
                                </li>
                                <li><a href="#"><i class="fa fa-youtube"></i></a>
                                </li>
                                <li><a href="https://www.linkedin.com/company/helios-fintech-pvt-ltd/"><i class="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="payment-logo mb-md-20"> <span class="text-custom-white fs-14 mr-3">We are
                            accept</span>
                       
                    </div>
                </div>
                <div class="col-lg-6">
                    <p class="text-custom-white no-margin">© Helois - 2020 | All Right Reserved. <a href=""
                            target="_blank" class="text-custom-white"></a>
                    </p>
                </div>
            </div>
        </div>
    </div>

@include('layout.footer')