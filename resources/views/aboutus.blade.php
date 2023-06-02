@include('layout.header')
<style>

.reveals25{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.reveals25.active{
  transform: translateY(0);
  opacity: 1;
}









        .reveals2{
  position: relative;
  transform: translateY(-150px);
  opacity: 0;
  transition: 1s all ease;
}

.reveals2.active{
  transform: translateY(0);
  opacity: 1;
}
.reveal1{
  position: relative;
  transform: translateX(-150px);
  opacity: 0;
  transition: 1s all ease;
}

.reveal1.active{
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
      

function reveals2() {
  var reveals2 = document.querySelectorAll(".reveals2");

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

window.addEventListener("scroll", reveals2);

function reveal1() {
  var reveal1 = document.querySelectorAll(".reveal1");

  for (var i = 0; i < reveal1.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveal1[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
        reveal1[i].classList.add("active");
    } else {
        reveal1[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal1);
       
       

 
function reveals25() {
  var reveals25 = document.querySelectorAll(".reveals25");

  for (var i = 0; i < reveals25.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals25[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
        reveals25[i].classList.add("active");
    } else {
        reveals25[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveals25);      
</script>
            <div class="container">
            <h1 style="margin-top:100px" class="reveal1"><font color='orange'>Ab</font>out Us</h1>
                    <div class="row">
                    <div class="col-lg-5 mt-5">
                                <br><br><br><br><br>
                                        <img src="images/rajeshsir.jfif"  style="height:300px;border-bottom-left-radius:20px;border:10px solid orange;margin-top:50px"/>
                                </div>
                                <div class="col-lg-7">
                                       
                                        <p  style="font-size:18px;font-family:cursive;line-height:2">Mr. Rajesh is a strategic sales & marketing professional. He has significant expertise
                                                in Global and Domestic financial Products. Due to his focused relentless dedication,
                                                he has been able to develop international markets like GCC, UK and USA. This has
                                                brought about investment opportunities in Equities, Mutual Funds, Real Estate Funds
                                                and Fixed Assets</p>
        <p style="font-size:18px;font-family:cursive;line-height:2">As a far-sighted finance professional, he did remarkable work in his last assignment
        when he was based in Kuwait with Moashk Securities & Investments. Prior to this he
        has also worked with Tata Consultancy Services and Funds India.</p>
                                </div>
                                
                        </div>
                </div>

        <section>
                <div class="container">
                        <div class="row">
                        <div class="col-lg-6">
                   <h4 style="font-family:Cursive;color:#3CB371" class="reveal2">HIS UNIQUE CAPABILITIES & COMPETENCE</h4>
                        <p style="font-family:Cursive;font-size:18px;color:#3CB371" class="reveal2">Mr. Rajesh has been the most sought sales professional not only for his
competence in financial products but also due to certain unique capabilities like: 
<li style="font-size:18px;font-family:cursive;line-height:2" class="reveal1"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspConcern for the welfare of his clients</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal1"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspStrong analytical skills
</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal1"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspAuthentic and reasonable guidance.</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal1"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspEthical Professional.</li>

            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal1"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspVery ardent and enthusiastic.</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal1"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspSerenity and calmness.</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal1"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspVery meticulous and industrious</li>
            <li style="font-size:18px;font-family:cursive;line-height:2" class="reveal1"><i class="fa fa-spinner" aria-hidden="true" style="color:#3CB371"></i>&nbsp&nbspAmiable and understanding for all those who approach him</li>
      
</p>
                </div>
                <div class="col-lg-6">
                        <br><br><br><br>
                       <img class="reveal21" src="https://d24uab5gycr2uz.cloudfront.net/uploads/other_pic/IOMZgKUBCr.png"/>
                </div>
                </div>
        </div>
</section>



<section>
        <div class="container mt-5">
                <div class="text-center">
                        <h3 class="reveals25">OUTSTANDING SKILLS</h3>
                </div>
                <div class="row">
                        <div class="col-md-3">
                                <div class="card reveals25">
                                        <div class="card-body">
                                        <img src="images/about/f4.png" alt="" style="height:200px;width:200px">
                                        </div>
                                        <div class="card-header bg-white">
                                                <p style="font-family:Cursive;font-size:18px;color:#3CB371">Conversational abilities</p>
                                        </div>
                                </div>
                        </div>
                        <div class="col-md-3">
                        <div class="card reveals25">
                                        <div class="card-body">
                                        <img src="images/about/f5.png" alt="" style="height:200px;width:200px">
                                        </div>
                                        <div class="card-header bg-white">
                                                <p style="font-family:Cursive;font-size:18px;color:#3CB371">Adroit in calculations.</p>
                                        </div>
                                </div>
                        </div>
                        <div class="col-md-3">
                        <div class="card reveals25">
                                        <div class="card-body">
                                        <img src="images/about/f3.png" alt="" style="height:200px;width:200px">
                                        </div>
                                        <div class="card-header bg-white">
                                       
                                                <p style="font-family:Cursive;font-size:18px;color:#3CB371">Planning skills
                                       </p>
                                        </div>
                                </div>
                        </div>
                        <div class="col-md-3">
                        <div class="card reveals25">
                                        <div class="card-body">
                                        <img src="images/about/f6.png" alt="" style="height:200px;width:200px">
                                        </div>
                                        <div class="card-header bg-white">
                                                <p style="font-family:Cursive;font-size:18px;color:#3CB371">Time management</p>
                                        </div>
                                </div>
                        </div>
                </div>
                
                <div class="row mt-5">
                        <div class="col-md-3">
                                <div class="card reveals25">
                                        <div class="card-body">
                                        <img src="images/about/f1.png" alt="" style="height:200px;width:200px">
                                        </div>
                                        <div class="card-header bg-white">
                                                <p style="font-family:Cursive;font-size:18px;color:#3CB371">Expert in dealing with issues and complications</p>
                                        </div>
                                </div>
                        </div>
                        <div class="col-md-3">
                        <div class="card reveals25">
                                        <div class="card-body">
                                        <img src="images/about/f22.png" alt="" style="height:200px;width:200px">
                                        </div>
                                        <div class="card-header bg-white">
                                                <p style="font-family:Cursive;font-size:18px;color:#3CB371">In depth cognizance of commercial ambiance</p>
                                        </div>
                                </div>
                        </div>
                        <div class="col-md-3">
                        <div class="card reveals25">
                                        <div class="card-body">
                                        <img src="images/about/f7.png" alt="" style="height:200px;width:200px">
                                        </div>
                                        <div class="card-header bg-white">
                                       
                                                <p style="font-family:Cursive;font-size:18px;color:#3CB371">Rational and methodical thinking
                                    </p>
                                        </div>
                                </div>
                        </div>
                        <div class="col-md-3">
                        <div class="card reveals25">
                                        <div class="card-body">
                                        <img src="images/about/f8.png" alt="" style="height:200px;width:200px">
                                        </div>
                                        <div class="card-header bg-white">
                                                <br>
                                                <p style="font-family:Cursive;font-size:18px;color:#3CB371;margin-top:8px">Documentation skills.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</section>







    @include('layout.logofooter')  
    
   
    @include('layout.mutualfundfooter')
    @include('layout.footer')
