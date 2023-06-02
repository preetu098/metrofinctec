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
                            <div class="row">
                            <div class="container">
                            <div class="row">
                                <div class="col-lg-8 mt-5 ">
                                <img src="https://img.freepik.com/free-vector/economy-school-subject-concept-student-studying-economics-money-modern-flat-illustration_566886-1627.jpg?w=740" style="height:300px;width:100%"/>
                                   
                                </div>
                                <div class="col-lg-4 mt-5">
                                    <h3 class="text-primary">Everything You Need to Know About Loans</h3>
                                    <p>There are various kinds of loans as per the financial requirements in question. Banks can give a loan which can be secured or unsecured. People go for secured loans due to lower interest rates and the large sum of money available which can be used forpurchasing a car or house. </p>
                                </div>
</div></div>
                            </div>
                                <!-- <img class="d-block w-100"
                                    src="https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2019/10/Buyers-Guide-FD-min.jpg"
                                    alt="First slide" style="height:300px">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>
                                </div> -->
                            </div>
                            <div class="carousel-item"> 
                                <img class="d-block w-100"
                                    src="https://paytmblogfinal.wpengine.com/wp-content/uploads/2022/04/2_Fixed-Deposit-FD-Vs-Public-Provident-Fund-PPF-Which-is-Better-800x500.png"
                                    alt="Second slide" style="height:300px">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100"
                                    src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?t=st=1656208835~exp=1656209435~hmac=89e658753d7e56b49f8e6e64db5fe5392db8e2320c053b534786134626ef8d69&w=826"
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

                 <div class="col-md-3">
                 <div class="container">
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
            </section>
            </div>


        </div>
</div>
    </div>

</section>
<section class="section-padding  doctors-team-style-2" style="    padding: 0px 0px 22px 0px;">
        <div class="container">
            <div class="section-header">
                <div class="section-heading " style="margin-top:50px">
                   <h3>Explore Loans</h3>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <a href="#homeloan">
                        <div class="card">
                            <img src="https://img.freepik.com/free-vector/real-estate-abstract-concept-vector-illustration-real-estate-agency-residential-industrial-commercial-property-market-investment-portfolio-home-ownership-property-value-abstract-metaphor_335657-1967.jpg?t=st=1656229365~exp=1656229965~hmac=66a758d8f8335586fc24b50eff45773d5b3ea21b9a6102438aa335707c6045aa&w=740" style="height:200px;width:350px"/>
                           <center> <p>Home Laon</p></center>
                        </div>
                        </a>
                    </div>
                    <div class="col-lg-3">
                    <a href="#personalloan">
                        <div class="card">
                            <img src="https://img.freepik.com/free-vector/budget-management-personal-financial-control-cash-flow-tiny-people-planning-personal-budget_501813-277.jpg?w=740" style="height:200px;width:350px"/>
                           <center> <p>Personal Laon</p></center>
                        </div>
</a>
                    </div>
                    <div class="col-lg-3">
                    <a href="#businessloan">
                        <div class="card">
                            <img src="https://img.freepik.com/free-vector/money-lending-abstract-concept-vector-illustration-small-money-lenders-private-individuals-loans-short-term-financing-commercial-industrial-bank-credit-working-capital-abstract-metaphor_335657-2927.jpg?t=st=1656229464~exp=1656230064~hmac=da8d7adcc29bd3348211c28458b928c3f33a91509997c3fc62c45fe5d95afd57&w=740" style="height:200px;width:350px"/>
                           <center> <p>Business Laon</p></center>
                        </div>
</a>
                    </div>
                    <div class="col-lg-3">
                    <a href="#moratgeloan">
                        <div class="card">
                            <img src="https://img.freepik.com/free-vector/money-lending-abstract-concept-vector-illustration-small-money-lenders-private-individuals-loans-short-term-financing-commercial-industrial-bank-credit-working-capital-abstract-metaphor_335657-2927.jpg?t=st=1656229464~exp=1656230064~hmac=da8d7adcc29bd3348211c28458b928c3f33a91509997c3fc62c45fe5d95afd57&w=740" style="height:200px;width:350px"/>
                           <center> <p>Mortage Laon</p></center>
                        </div>
</a>
                    </div>
                </div>
            </div>
        </div>
</section>
<section class="mt-5">
    <div class="container mt-5">
        <div id="homeloan">
            <h4>Home Loan</h4>
               <div class="row">
                        <div class="col-lg-5">
                        <img src="images/homeloan.jpg" />
                        </div>
                        <div class="col-lg-7">
                            <p>A home loan is a secured loan that is obtained to purchase a property by offering it as collateral. Home loans offer high-value funding at economical interest rates and for long tenors. They are repaid through EMIs. After repayment, the property's title is transferred back to the borrower.<p>
                                <p>At the beginning, lenders will assess your eligibility for home loan on the basis of your income and repayment capacity. The other important considerations include age, qualification, financial position, number of dependants, spouse's income and job stability.</p>
                                <div class="row mt-5">
                                    <div class="col-md-3">
                                        <center>
                                        <img src="https://cdn.iconscout.com/icon/free/png-256/home-loan-1795427-1522793.png" style="height:70px;width:70px;"/>
</center>
                                         </div>
                                    <div class="col-md-3">
                                    <center>
                                    <img src="https://cdn-icons-png.flaticon.com/512/4221/4221696.png" style="height:70px;width:70px;"/>
</center>
                                    </div>
                                    <div class="col-md-3">
                                    <center>
                                    <img src="https://cdn1.iconfinder.com/data/icons/finance-set-1-7/64/01-02-512.png" style="height:70px;width:70px;"/>
</center>
                                    </div>
                                    <div class="col-md-3">
                                    <center>
                                    <img src="https://cdn3.iconfinder.com/data/icons/personal-business-finance-2/380/Home_Loan-512.png" style="height:70px;width:70px;"/>
</center>
                                    </div>
                                </div>
                        </div>
               </div>
               <div class="row mt-5">
                            <div class="col-lg-2">
                                                <div class="card">
                                            <center>
                                        <h4>HDFC Bank</h4>
                                            <p>Starting ROI 6.90%*</p>
                                            <img src="images/hdfc.png" style="height:30px;width:100px"/>
                                            <button class="btn btn-info">Apply for Home Loan</button>
                                            </center>
                                        </div>
                            </div>
                            <div class="col-lg-2">
                                                <div class="card">
                                            <center>
                                        <h4>SBI Bank</h4>
                                            <p>Starting ROI 6.80%*</p>
                                            <img src="https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png" style="height:30px;width:100px"/>
                                            <button class="btn btn-info">Apply for Home Loan</button>
                                            </center>
                                        </div>
                            </div>
                            <div class="col-lg-2">
                                            <div class="card">
                                        <center>
                                    <h4>AXIS Bank</h4>
                                        <p>Starting ROI 6.80%*</p>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png" style="height:30px;width:100px"/>
                                        <button class="btn btn-info">Apply for Home Loan</button>
                                        </center>
                                    </div>
                            </div>
                            <div class="col-lg-2">
                                            <div class="card">
                                        <center>
                                    <h4>AADHAR HSG</h4>
                                        <p>Starting ROI 10.49%*</p>
                                        <img src="https://aadharhousing.com/images/logo/logo-dark.png" style="height:30px;width:100px"/>
                                        <button class="btn btn-info">Apply for Home Loan</button>
                                        </center>
                                    </div>
                            </div>
                            <div class="col-lg-2">
                                            <div class="card">
                                        <center>
                                    <h4>FULLERTON</h4>
                                        <p>Starting ROI 9.25%*</p>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cal-st-fullerton_logo_from_NCAA.svg/2048px-Cal-st-fullerton_logo_from_NCAA.svg.png" style="height:30px;width:100px"/>
                                        <button class="btn btn-info">Apply for Home Loan</button>
                                        </center>
                                    </div>
                            </div>
                            <div class="col-lg-2">
                                            <div class="card">
                                        <center>
                                    <h4>AADHAR HSG</h4>
                                        <p>Starting ROI 10.49%*</p>
                                        <img src="https://aadharhousing.com/images/logo/logo-dark.png" style="height:30px;width:100px"/>
                                        <button class="btn btn-info">Apply for Home Loan</button>
                                        </center>
                                    </div>
                            </div>
               </div>
        </div>
        <div id="personalloan">
            
            <h4 class="mt-5">Personal Loan</h4>
            <div class="row">
                        <div class="col-lg-5">
                        <img src="https://www.gstsuvidhacenters.com/WebsiteAssets/images/Services/PersonalLoan.png" />
                        </div>
                        <div class="col-lg-7">
                            <p>Personal Loan is an unsecured credit provided by financial institutions based on criteria like employment history, repayment capacity, income level, profession and credit history. Personal Loan, which is also known as a consumer loan is a multi-purpose loan, which you can use to meet any of your immediate needs.</p>
                        </div>
            </div>
            <div class="row mt-5">
                    <div class="col-lg-2">
                    <div class="card">
                        <center>
                    <h4>HDFC Bank</h4>
                        <p>Starting ROI 10.49%*</p>
                        <img src="images/hdfc.png" style="height:30px;width:100px"/>
                        <button class="btn btn-info">Apply for Personal Loan</button>
                        </center>
                    </div>
</div>
                   
                    <div class="col-lg-2">
                    <div class="card">
         <center>
                    <h4>IDFC First</h4>
                        <p>Starting ROI 11%*</p>
                        <img src="https://www.dqindia.com/wp-content/uploads/2015/12/idfc_new_logo1.jpg" style="height:30px;width:100px"/>
                        <button class="btn btn-info">Apply for Personal Loan</button>
</center>
                    </div>
</div>
<div class="col-lg-2">
                        <div class="card">
         <center>
                        <h4>MoneyView</h4>
                        <p>Starting ROI 16%*</p>
                        <img src="https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2F20160518010638442965_MoneyView+Logo.jpg&h=630&w=1200&q=75&v=20170226&c=1" style="height:30px;width:100px"/>
                        <button class="btn btn-info">Apply for Personal Loan</button>
</center>
</div>
                    </div>
                    <div class="col-lg-2">
                    <div class="card">
         <center>
                    <h4>Ujjivan SFB</h4>
                        <p>Starting ROI 11%*</p>
                        <img src="https://media.glassdoor.com/sqll/352966/ujjivan-squarelogo-1529034980397.png" style="height:30px;width:100px"/>
                        <button class="btn btn-info">Apply for Personal Loan</button>
</center>
                    </div>
</div>
                    <div class="col-lg-2">
                    <div class="card">
<center>
                    <h4>ICICI Bank</h4>
                        <p>Starting ROI 11%*</p>
                        <img src="https://gs-post-images.grdp.co/2020/6/71-718369_download-icici-bank-logo-hd-png-clipart-2-img1592917535563-78.png-rs-high-webp.png" style="height:30px;width:100px"/>
                        <button class="btn btn-info">Apply for Personal Loan</button>
</center>
                    </div>
</div>
                    <div class="col-lg-2">
                    <div class="card">
         <center>
                    <h4>Upwards</h4>
                        <p>Starting ROI 18%*</p>
                        <img src="https://upwards.in/assets/img/upwards_logo.png" style="height:30px;width:100px"/>
                        <button class="btn btn-info">Apply for Personal Loan</button>
</center>
                    </div>
</div>
            </div>
            <div class="row mt-5">
                   
                    <div class="col-lg-2">
                    <div class="card">
         <center>
                    <h4>Incred Fin</h4>
                        <p>Starting ROI 16%*</p>
                        <img src="https://assets.shortpedia.com/uploads/2019/12/17/1576554013.jpg" style="height:30px;width:100px"/>
                        <button class="btn btn-info">Apply for Personal Loan</button>
</center>
                    </div>
</div>
                    <div class="col-lg-2">
                    <div class="card">
         <center>
                    <h4>Fullerton</h4>
                        <p>Starting ROI 16%*</p>
                        <img src="https://dimensionshrd.com/wp-content/uploads/2019/11/Fullerton-India.png" style="height:30px;width:100px"/>
                        <button class="btn btn-info">Apply for Personal Loan</button>
</center>
                    </div>
</div>
                    <div class="col-lg-2">
                    <div class="card">
         <center>
                    <h4>Nira Fin</h4>
                        <p>Starting ROI 22%*</p>
                        <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0006/4670/brand.gif?itok=sBhJyhV_" style="height:30px;width:100px"/>
                        <button class="btn btn-info">Apply for Personal Loan</button>
</center>
                    </div>
</div>
                    <div class="col-lg-2">
                    <div class="card">
         <center>
                    <h4>IndusInd</h4>
                        <p>Starting ROI 12%*</p>
                        <img src="https://www.outlookindia.com/outlookmoney/public/uploads/article/gallery/0764949929ce8893a114c3a094e224c4.jpg" style="height:30px;width:100px"/>
                        <button class="btn btn-info">Apply for Personal Loan</button>
</center>
                    </div>
</div>
                    <div class="col-lg-2">
                    <div class="card">
         <center>
                    <h4>Kotak M</h4>
                        <p>Starting ROI 12%*</p>
                        <img src="https://logos-download.com/wp-content/uploads/2016/06/Kotak_Mahindra_Bank_logo.png" style="height:30px;width:100px"/>
                        <button class="btn btn-info">Apply for Personal Loan</button>
</center>   
                    </div>
</div>
            </div>
        </div>
        
        <div id="businessloan">
            <h4 class="mt-5">Business Loan</h4>
            <div class="row">
                    <div class="col-lg-5">
                        <img src="https://qph.cf2.quoracdn.net/main-qimg-7a8ed0dbacad4e9c5987a7cc4ffc4126-lq"/>
                    </div>
                    <div class="col-lg-7">
                        <p>Business loan means a loan or ex- tension of credit to any corporation, general or limited partnership, busi- ness trust, joint venture, pool, syn- dicate, sole proprietorship, or other business entity.</p>
                        <p>Business Loan ProgramFor veterans interested in starting a new business in Minnesota or reestablishing a business left behind after deployment to active duty, the Minnesota Department of Employment and Economic Development provides several resources including expert business guidance and some targeted business financing options.</p>
                    </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-2">
                <div class="card">
         <center>
                    <h4>HDFC Bank</h4>
                        <p>Starting ROI 16%*</p>
                        <img src="https://play-lh.googleusercontent.com/POGVZhNvSh05yA01H2VTlElv0Mw6r4R7hj9w7DaOvJVgiGoi0Fcawi02yITkyMT1zwqO=w600-h300-pc0xffffff-pd" style="height:30px;width:100px"/>
                        <button class="btn btn-warning">Apply for Busiiness Loan</button>
</center>   
                    </div>
                </div>
                <div class="col-md-2">
                <div class="card">
         <center>
                    <h4>Lending Kart</h4>
                        <p>Starting ROI 18%*</p>
                        <img src="https://cdn.chappuishalder.com/wp-content/uploads/sites/6/2017/01/Lendingkart-logo-OK-1.png" style="height:30px;width:100px"/>
                        <button class="btn btn-warning">Apply for Business Loan</button>
</center>   
                    </div>
                </div>
                <div class="col-md-2">
                <div class="card">
         <center>
         <h4>IDFC First</h4>
                        <p>Starting ROI 18%*</p>
                        <img src="https://www.dqindia.com/wp-content/uploads/2015/12/idfc_new_logo1.jpg" style="height:30px;width:100px"/>
                        <button class="btn btn-warning">Apply for Business Loan</button>
</center>   
                    </div>
                </div>
                <div class="col-md-2">
                <div class="card">
         <center>
         <h4>ICICI Bank</h4>
                        <p>Starting ROI 16%*</p>
                        <img src="https://gs-post-images.grdp.co/2020/6/71-718369_download-icici-bank-logo-hd-png-clipart-2-img1592917535563-78.png-rs-high-webp.png" style="height:30px;width:100px"/>
                        <button class="btn btn-warning">Apply for Business Loan</button>
</center>   
                    </div>
                </div>
                <div class="col-md-2">
                <div class="card">
         <center>
         <h4>Fullerton</h4>
                        <p>Starting ROI 18%*</p>
                        <img src="https://dimensionshrd.com/wp-content/uploads/2019/11/Fullerton-India.png" style="height:30px;width:100px"/>
                        <button class="btn btn-warning">Apply for Business Loan</button>
</center>   
                    </div>
                </div>
                <div class="col-md-2">
                <div class="card">
         <center>
         <h4>IndusInd</h4>
                        <p>Starting ROI 18%*</p>
                        <img src="https://www.outlookindia.com/outlookmoney/public/uploads/article/gallery/0764949929ce8893a114c3a094e224c4.jpg" style="height:30px;width:100px"/>
                        <button class="btn btn-warning">Apply for Business Loan</button>
</center>   
                    </div>
                </div>
            </div>
        </div>
        <div id="moratgeloan">
            <h4 class="mt-5">Mortgage Loan</h4>
    <div class="row mt-5">
                        <div class="col-lg-5">
                    <img src="https://static.vecteezy.com/system/resources/previews/002/417/916/non_2x/mortgage-loan-web-concept-in-flat-style-vector.jpg"/>
                        </div>
                        <div class="col-lg-7">
                            <p>A mortgage loan is a secured loan that allows you to avail funds by providing an immovable asset, such as a house or commercial property, as collateral to the lender. The lender keeps the asset until you repay the loan.</p>
                            <p>
                A mortgage note is a legal document that sets out all the terms of the mortgage between a borrower and their lending institution. It includes terms such as: The total amount of the home loan. The down payment amount.</p>
                        </div>
    </div>
    
        </div>
    </div>
</section>
<section>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-7 mt-5">
               
                    <p>A loan is a sum of money that one or more individuals or companies borrow from banks or other financial institutions so as to financially manage planned or unplanned events. In doing so, the borrower incurs a debt, which he has to pay back with interest and within a given period of time.</h4>
                    <p>The recipient and the lender must agree on the terms of the loan before any money changes hands. In some cases, the lender requires the borrower to offer an asset up for collateral, which will be outlined in the loan document.</p>
               
            </div>
            <div class="col-md-5">
           
                <img src="https://img.freepik.com/free-vector/bank-credit-finance-management-loan-agreement-signing-mortgage-money-credit_335657-3136.jpg?t=st=1656240946~exp=1656241546~hmac=fee93a159d60b3e0fd9c81f3c2801e932d00e140b94cb038a12d8fe28462446d&w=740"/>
          
            </div>
        </div>
    </div>
</section>
<section>
    <div class="container">
            <div class="row">
                
            </div>
    </div>
</section>

    @include('layout.logofooter')  
    
   
    @include('layout.mutualfundfooter')
    @include('layout.footer')
