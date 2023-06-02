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



    <div class="container">
            <div class="row">
                    <div class="col-lg-5 mt-5">
                          <h2 class="mt-5"><font color='orange'>Metrofintec  Services</font></h2>  
                          <p class="left" style="font-size:18px;font-family:cursive">Metrofintec is synonymous with trust, loyalty and security of the investments of their
esteemed investors. So, whenever you wish to invest your hard-earned money and
explore the various options the first and foremost name in your mind should be
Metrofintec. </p>
                    </div>
                    <div class="col-lg-7">
                            <img src="https://www.moneyworks4me.com/images/new-homepage/enjoy-investing-journey.svg"/>
                    </div>
            </div>
</div>

<section class="mt-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <img class="left" src="images/girl.png" alt="">
            </div>
            <div class="col-lg-6">
                <center>
                <img src="images/features1.png" style="height:500px;width:800px" alt="" class="reveal21">
</center>
            </div>
        </div>
    </div>
</section>
<section>
    <div class="container mt-5">
        <div class="text-center">
            <h3 style="color:#3CB371">Services Of Metrofintec</h3>
            <hr>
        </div>
        <div class="row">
           
            <div class="col-lg-6">
                <p class="left" style="font-size:18px;font-family:cursive;line-height:2;color:#3CB371"><strong style="color:orange">Banking</strong> The banking industry is the backbone of India's financial services
industry</p>
<p class="left" style="font-size:18px;font-family:cursive;line-height:2;color:#3CB371"><strong style="color:orange">Professional Advisory</strong> Detailed findings and conclusions explained to the
client for helping them in decision making</p>
<p class="left" style="font-size:18px;font-family:cursive;line-height:2"><strong style="color:orange">Wealth Management</strong></p>
<p class="left" style="font-size:18px;font-family:cursive;line-height:2"><strong style="color:orange">Mutual Funds</strong></p>
<p class="left" style="font-size:18px;font-family:cursive;line-height:2"><strong style="color:orange">Insurance</strong></p>
<p class="left" style="font-size:18px;font-family:cursive;line-height:2;color:#3CB371"><strong style="color:orange">Stock Market</strong> Intrinsic analysis of the stock market scenario for guiding
clients</p>
<p class="left" style="font-size:18px;font-family:cursive;line-height:2"><strong style="color:orange">Treasury/Debt portfolios</strong></p>
<p class="left" style="font-size:18px;font-family:cursive;line-height:2"><strong style="color:orange">Tax/Audit Consulting services with professional and ethical transparency</strong></p>
            </div>
            <div class="col-lg-6">
                <br><br><br>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/service/bank.png" class="d-block w-100" alt="..." style="height:300px;width:400px">
    </div>
    <div class="carousel-item">
      <img src="images/service/advisory.png" class="d-block w-100" alt="..." style="height:300px;width:400px">
    </div>
    <div class="carousel-item">
      <img src="images/service/insurance.png" class="d-block w-100" alt="..." style="height:300px;width:400px">
    </div>
    <div class="carousel-item">
      <img src="images/service/Wealthmanagement.png" class="d-block w-100" alt="..." style="height:300px;width:400px">
    </div>
    <div class="carousel-item">
      <img src="images/service/advisory.png" class="d-block w-100" alt="..." style="height:300px;width:400px">
    </div>
    <div class="carousel-item">
      <img src="images/service/Mutual-Funds.png" class="d-block w-100" alt="..." style="height:300px;width:400px">
    </div>
    <div class="carousel-item">
      <img src="images/service/portfolio.png" class="d-block w-100" alt="..." style="height:300px;width:400px">
    </div>
    <div class="carousel-item">
      <img src="images/service/tax.png" class="d-block w-100" alt="..." style="height:300px;width:400px">
    </div>
  </div>
</div>
            </div>
        </div>
    </div>
</section>


 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
 
 
 
    @include('layout.logofooter')  
    
   
    @include('layout.mutualfundfooter')
    @include('layout.footer')
