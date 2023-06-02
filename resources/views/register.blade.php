<!doctype html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <title>Mutual Funds</title>
    <meta name="template" content="home-page-template-v3">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="google-site-verification" content="_yj60lboMNRsMzJQwL8njwu1qkrqubz7SilJDJZOZ_w">
    <!-- NoIndex NoFollow code start -->
    <link rel="icon" href="/content/dam/tata-capital/images/favicon.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="theme-color" content="#ffffff">
    <link rel=apple-touch-icon sizes=180x180 href=/apple-touch-icon.png?x26145>
    <link rel=icon type=image/png sizes=32x32 href=/favicon-32x32.png?x26145>
    <link rel=icon type=image/png sizes=16x16 href=/favicon-16x16.png?x26145>
    <link rel=manifest href=/manifest.json?x26145>
    <link rel=mask-icon href=/safari-pinned-tab.svg?x26145 color=#5bbad5>
    <link rel=alternate type=application/rss+xml title="EMI Calculator Feed" href=https://emicalculator.net/feed/>
    <script async src=//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?x26145></script>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-6020664305604651",
            enable_page_level_ads: true
        });
    </script>
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300&display=swap"rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}" type="text/css">
    <link href="{{url('assets1/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{url('assets1/css/style.css')}}" rel="stylesheet">
    <link href="{{url('assets1/css/font/flaticon.css')}}" rel="stylesheet">
    <link href="{{url('assets1/font/flaticon.css')}}" rel="stylesheet">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12"></div>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-2 col-lg-3"><!--bindings={ "ng-reflect-ng-if": "false"}--></div>
                    <div class="col-md-8 col-lg-6 mpl-0 mpr-0">
                        <div class="logo-without-back">
                            <menu-header _nghost-gsv-c11="" class="ng-tns-c11-0 ng-trigger ng-trigger-fadeInAnimation">
                                <div _ngcontent-gsv-c11="" class="">
                                    <header _ngcontent-gsv-c11="" class="ng-tns-c11-0">
                                        <div _ngcontent-gsv-c11="" class="row mr-0 ml-0">
                                            <div _ngcontent-gsv-c11="" class="col-md-12 fi-logo-div">
                                                <div _ngcontent-gsv-c11="" class="d-inline-block">
                                                    <img _ngcontent-gsv-c11="" class="fi-logo" src="https://i0.wp.com/bemyeye.com/wp-content/uploads/2020/02/Go-in-the-right-direction2.png?fit=768%2C882&ssl=1"style="width:200px"></div>
                                                <div _ngcontent-gsv-c11=""  class="logout-menu d-inline-flex align-items-center float-right">
                                                    <span _ngcontent-gsv-c11="" class="cursor">
                                                        <!--bindings={"ng-reflect-ng-if": "false"}--></span>
                                                    <!--bindings={"ng-reflect-ng-if": "false"}-->
                                                    <!--bindings={}--><span _ngcontent-gsv-c11="" class="ng-tns-c11-0">
                                                        <!--bindings={ "ng-reflect-ng-if": "false"}--></span>
                                                </div>
                                                <div _ngcontent-gsv-c11="" class="d-none"><input _ngcontent-gsv-c11=""class="form-control" type="text"></div>
                                            </div>
                                        </div>
                                    </header>
                                </div>
                            </menu-header>
                        </div>
                        <!--bindings={  "ng-reflect-ng-if": "false"}-->
                        <div class="qsignin-form">
                            <h4 style="color:black">Enter your PAN to start investing</h4>
                            <form autocomplete="off" method="POST" action="{{ route('regdatastore') }}" novalidate="" class="ng-invalid ng-dirty ng-touched" siq_id="autopick_5958">
                                <input type="hidden" name="auth_id" id="auth_id" value="{{$auth_id}}">
                                @csrf
                                <div class="form-group validate-height">
                                    <label for="email">PAN</label>
                                    <input class="form-control" id="pan" name="pan" required=""placeholder="BUNPBXXXXA">
                                </div>
                                <div class="form-group "><label for="pwd">Date of Birth (as per your PAN)</label>
                                    <input class="form-control" id="date_of_birth" name="date_of_birth" required=""placeholder="DD/MM/YYYY">
                                </div>
                                <div class="form-group "><label for="pwd">Account Type</label>
                                    <select name="account_type" class="form-control">
                                        <option value="1">Resident Indian</option>
                                        <option value="2">Non-Resident Indian</option>
                                        <option value="3">Corporate/HUF</option>
                                    </select>
                                    <!-- <input class="form-control" id="name" name="text"  required="" placeholder="enter father name">  -->
                                </div>
                                <div class="signin-mobile-button text-center"><button class="btn btn-primary btn-qsignin" type="submit" style="width:100%">Process</button></div>
                            </form>                        
                      </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid mt-5">
            <div class="jumbotron mt-5">
                <p>Investments in Securities markets are subject to market risks, read all the related documents
                    carefully before investing. Insurance is not an Exchange-traded product and Eliios Fintec Pvt Ltd is
                    just acting as a distributor. All disputes with respect to the distribution activity, would not have
                    access to the Exchange Investor Redressal Forum or Arbitration mechanism. Eliios Fintec Pvt Ltd is a
                    registered Mutual fund distributor with AMFI Reg no. ARN – 126278, *Brokerage will not exceed the
                    SEBI prescribed limit. Mutual fund investments are subject to market risks. Please read the scheme
                    information and other related documents carefully before investing. Past performance is not
                    indicative of future returns. Please consider your specific investment requirements before choosing
                    a fund, or designing a portfolio that suits your needs. Eliios Fintec Pvt Ltd (with ARN code 126278)
                    makes no warranties or representations, express or implied, on products offered through the
                    platform. It accepts no liability for any damages or losses, however, caused, in connection with the
                    use of, or reliance on, its product or related services. Terms and conditions of the website are
                    applicable. Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other
                    countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries.
                    The Android robot is reproduced or modified from work created and shared by Google and used
                    according to terms described in the Creative Commons 3.0 Attribution License. Eliios Fintec Pvt Ltd
                    is registered - | ARN - 126278 AMFI-Registered Mutual Fund Distributor | Check your securities /
                    mutual funds/bonds in the consolidated account statement issued by NSDL/CDSL every month. Eliios
                    Fintec Pvt Ltd CIN: U74999DL2021PTC390267 hasRegd. office:- Plot No. 40, G/F Shop Gali No 06, Mohan
                    Nagar, New Delhi – 110 046. Insurance is subject to market risks and is a subject matter of
                    solicitation. It is the users’ responsibility to understand the restrictions and risks involved in
                    different insurance products/policies. Under no circumstances can/will Wealth India Financial
                    Services Limited take any liability for this. We request users to read and understand the offer and
                    subject documents carefully.</p>
            </div>
        </div>
</body>

</html>
