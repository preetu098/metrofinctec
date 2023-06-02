@include('layout.header')
<style>
      
.left{
  position: relative;
  transform: translateX(-150px);
  opacity: 0;
  transition: 1s all ease;
}

.left.active{
  transform: translateY(0);
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
</style>
<script>
    
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
function left() {
  var left = document.querySelectorAll(".left");

  for (var i = 0; i < left.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = left[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
        left[i].classList.add("active");
    } else {
        left[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", left);  
</script>

<!--start banner-->

<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <img src="https://www.shriramamc.in/assets/images/homepage/bg-img.png" class="img-fluid" style=""/>
        </div>
        <div class="col-lg-6">
            <h3 class="text-success mt-5" style="margin-top:200px!important">Mutual Funds: A Beginner's Guide</h3>
            <p style="font-size:17px">This blog post provides a comprehensive overview of mutual funds, including what they
are, how they work, and the different types of mutual funds available. It also discusses
the benefits of investing in mutual funds and how to choose the right mutual funds for
your investment goals.</p>
        </div>
    </div>
</div>


<!--end banner-->

<div class="container" style="">
    <div class="row">
        <div class="col-lg-6">
            <div style="margin-top:-100px!important">
            <h3 class="text-success" style="margin-top:200px!important"> How to Select Mutual Funds</h3>
            <p style="font-size:17px">This blog post provides tips on how to select the right mutual funds for your investment
goals. It discusses factors to consider when selecting mutual funds, such as the fund's
investment objective, management team, track record, and fees.</p>
</div>
        </div>
        <div class="col-lg-6">
            <img src="https://blog.investyadnya.in/wp-content/uploads/2019/03/How-to-Select-a-Mutual-Fund.png" class="img-fluid"/>
        </div>
    </div>
</div>


<div class="container" style="">
    <div class="row">
        <div class="col-lg-6">
            <br><br><br><br>
                <img src="https://media.licdn.com/dms/image/C4D12AQFaDna48f7eLg/article-cover_image-shrink_600_2000/0/1561279841425?e=2147483647&v=beta&t=ZlrdBub3tRRvMkx_Ib3LChlz6h-WDgqJ8YpGgAGMHSE" class="img-fluid"/>
        </div>
        <div class="col-lg-6">
            <h3 class="text-success" style="margin-top:200px!important"> How to Select Mutual Funds</h3>
            <p style="font-size:17px">This blog post discusses how to build a mutual fund portfolio that meets your
investment goals. It covers topics such as asset allocation, diversification, and
rebalancing.</p>
        </div>
    </div>
</div>




<div class="container" style="">
    <div class="row">
       
        <div class="col-lg-6">
            <h3 class="text-success" style="margin-top:200px!important"> Creating Wealth Through Mutual Funds</h3>
            <p style="font-size:17px">This blog post discusses how mutual funds can help you create wealth. It covers topics
such as the power of compounding, the importance of investing early, and the benefits
of regular investing.
</p>
        </div>
        
         <div class="col-lg-6">
                <img src="https://www.5paisa.com/finschool/wp-content/uploads/2022/01/5.1.png" class="img-fluid"/>
        </div>
    </div>
</div>


<div clas="container">
    <div class="row">
        <div class="col-lg-6">
            <img src="https://cdn.muthootfinance.com/sites/default/files/files/2023-03/mutual-fund.jpg"/>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <h5>Power of 15x15</h5>
                <p>This blog post discusses the power of investing 15% of your income for 15 years. It
covers topics such as how this strategy can help you reach your financial goals and
how to get started.</p>
            </div>
        </div>
    </div>
</div>





















 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
 
 
 
    @include('layout.logofooter')  
    
   
    @include('layout.mutualfundfooter')
    @include('layout.footer')
