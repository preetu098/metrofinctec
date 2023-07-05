<!doctype html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <title>Mutual Funds</title>
    <meta name="template" content="home-page-template-v3">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="google-site-verification" content="_yj60lboMNRsMzJQwL8njwu1qkrqubz7SilJDJZOZ_w">
    <meta name="csrf-token" content="{{ csrf_token() }}">
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
    <link rel=alternate type=application/rss+xml title="EMI Calculator Feed" href=https://emicalculator.net/feed />
    <script async src=//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?x26145></script>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-6020664305604651",
            enable_page_level_ads: true
        });
    </script>
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}" type="text/css">

    <link href="assets1/css/bootstrap.min.css" rel="stylesheet">

    <link href="assets1/css/style.css" rel="stylesheet">
    <link href="assets1/css/font/flaticon.css" rel="stylesheet">
    <link href="assets1/font/flaticon.css" rel="stylesheet">
    @if (Session::has('error'))
    <script>
        alert("{{ Session::get('error') }}");
    </script>
    @endif
</head>
<style>

</style>

<body id="body">
    <div class="root responsivegrid">

        <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
            <div class="o-drop-down-retail-header aem-GridColumn aem-GridColumn--default--12">
                <div class="cm-page-container">
                    <div>
                        <!-- TradingView Widget BEGIN -->
                        <!-- <div class="tradingview-widget-container">
                        <div class="tradingview-widget-container__widget"></div>
                        <div class="tradingview-widget-copyright"><a href="https://in.tradingview.com/markets/"
                                rel="noopener" target="_blank"></div>
                        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
                            {
                                "symbols": [{
                                        "description": "",
                                        "proName": "NSE:WIPRO"
                                    },
                                    {
                                        "description": "",
                                        "proName": "NSE:INFY"
                                    },
                                    {
                                        "description": "hdfcba",
                                        "proName": "NSE:HDFCBANK"
                                    },
                                    {
                                        "description": "",
                                        "proName": "NSE:ITC"
                                    },
                                    {
                                        "description": "",
                                        "proName": "NSE:BAJFINANCE"
                                    },
                                    {
                                        "description": "",
                                        "proName": "NSE:ONGC"
                                    },
                                    {
                                        "description": "",
                                        "proName": "NSE:TECHM"
                                    },
                                    {
                                        "description": "",
                                        "proName": "NSE:ONGC"
                                    },
                                    {
                                        "description": "",
                                        "proName": "NSE:TATAPOWER"
                                    }
                                ],
                                "showSymbolLogo": true,
                                "colorTheme": "light",
                                "isTransparent": true,
                                "displayMode": "adaptive",
                                "locale": "in"
                            }
                        </script>
                    </div> -->
                        <!-- TradingView Widget END -->
                    </div>
                    <header class="header">
                        <div class="header-component">
                            <div class="head-top">
                                <div class="top-bar">
                                    <div class="container">
                                        <div class="top-inner">
                                            <ul class="nav lw-nav-tabs primary-nav">
                                                <li class="sub-headers active-state">
                                                    <a class="nav-link active" href="#pro1"
                                                        data-toggle="tab">Investments</a>
                                                </li>
                                                <li class="sub-headers">
                                                    <a class="nav-link" href="#pro2" data-toggle="tab">INSURANCE</a>
                                                </li>
                                                <!--<li class="sub-headers">-->
                                                <!--    <a class="custom-anchor" href="/wealth.html">TRADITIONAL INVESTMENT</a>-->
                                                <!--</li>-->
                                                <!--  <li class="sub-headers">-->
                                                <!--    <a class="custom-anchor" href="/loan" >LOANS</a>-->
                                                <!--</li>-->
                                                <li class="sub-headers">
                                                    <a class="custom-anchor" href="#pro3" data-toggle="tab">LOANS</a>
                                                </li>
                                                <li class="sub-headers">
                                                    <a class="custom-anchor" href="/creditcards">CREDIT CARDS</a>
                                                </li>
                                            </ul>
                                            <div>

                                            </div>
                                            <div class="right-nav-menu">
                                                <!-- 14/04/2021 -->
                                                <ul>
                                                    <!-- <li class="d-xs-none call-desktop"
                                                    style="height:20px;width:170px">
                                                     <a href="javascript:void(0)" class=""
                                                        data-dropdown="dropdown " style="color:black;font-size:16px" class="btn btn-info"><button class="btn btn-warning">File Income
                                                        Tax</button></a>
                                                </li>
                                                <li class="d-xs-none call-desktop"
                                                    style="height:20px;width:200px;">
                                                    <a href="<?php echo route('family'); ?>" class="btn-bells"
                                                       style="color:black;font-size:16px"><button class="btn btn-warning">Family Know After Me</button></a>
                                                </li>
                                                <li class="d-xs-none call-desktop">
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                                                </li> -->
                                                    <!-- 14/04/2021 -->
                                                    <ul>

                                                        {{-- <li class="d-xs-none call-desktop">



                                                        
                                                        <div class="custom-dropdown">
                                                            <a data-toggle="modal" data-target="#loginexampleModal" style="">
                                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                                <span style="color:blue;font-size:10px!important">Login</span>
                                                            </a>
                                                        </div>

                                                    </li> --}}
                                               
                                                    <form action="{{route('client_login')}}" method="POST">
                                                        @csrf
                                                        <li class="d-xs-none call-desktop" id="loginformpopupopen">
                                                            <div class="new-notification-bell custom-dropdown dropdown">
                                                                <!-- <button class="btn btn-light" style="width:50px;margin-left:-40px"> -->
                                                                    <a href="javascript:void(0)" class="btn-bells"
                                                                    data-dropdown="dropdown"
                                                                    style="color:blue;margin-left:-0px;font-size:10px;">Login</a>
                                                                    <!-- </button> -->
                                                                
                                                                <div class="custom-dropdown-container dropdown-open-menu"
                                                                    id="loginformclose">
                                                                    <div class="notification-bell-box" id="">

                                                                        <div class="notification-bell-top">
                                                                            <h6 style="color: white;">Login Form
                                                                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button
                                                                                    style="color:white"
                                                                                    data-dropdown="dropdown">Close</button>
                                                                            </h6>
                                                                            <a href="javascript:void(0)"
                                                                                class="bell-dropdown-close"
                                                                                data-dropdownclose="close">
                                                                                <span class="icon-close"></span></a>
                                                                        </div>
                                                                        <div class="notification-bell-bottom">
                                                                            <div class="site-bell-dropdown">
                                                                                <ul
                                                                                    class="notification-bell-list notification-bell-icons">

                                                                                    <li>
                                                                                        <div class="row">
                                                                                            <div class="col-md-12">
                                                                                                <div class="row">
                                                                                                    <div
                                                                                                        class="col-md-12 col-lg-12">
                                                                                                    </div>
                                                                                                    <div
                                                                                                        class="col-md-12 col-lg-12 mpl-0 mpr-0">
                                                                                                        <div
                                                                                                            class="logo-without-back">
                                                                                                            <menu-header
                                                                                                                _nghost-gsv-c11=""
                                                                                                                class="ng-tns-c11-0 ng-trigger ng-trigger-fadeInAnimation">
                                                                                                                <div
                                                                                                                    _ngcontent-gsv-c11=""class="">
                                                                                                                    <header
                                                                                                                        _ngcontent-gsv-c11=""
                                                                                                                        class="ng-tns-c11-0">
                                                                                                                        <div
                                                                                                                            _ngcontent-gsv-c11=""class="row mr-0 ml-0">
                                                                                                                            <div _ngcontent-gsv-c11=""
                                                                                                                                class="col-md-12 fi-logo-div">
                                                                                                                                <div _ngcontent-gsv-c11=""
                                                                                                                                    class="logout-menu d-inline-flex align-items-center float-right">
                                                                                                                                    <span
                                                                                                                                        _ngcontent-gsv-c11=""
                                                                                                                                        class="ng-tns-c11-0">
                                                                                                                                    </span>
                                                                                                                                </div>
                                                                                                                                <div _ngcontent-gsv-c11=""
                                                                                                                                    class="d-none">

                                                                                                                                    <input
                                                                                                                                        _ngcontent-gsv-c11=""
                                                                                                                                        class="form-control"
                                                                                                                                        type="text">
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </header>
                                                                                                                </div>
                                                                                                            </menu-header>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            class="qsignin-form">
                                                                                                            <form
                                                                                                                autocomplete="off"
                                                                                                                id="loginmodalform"
                                                                                                                method="post"
                                                                                                                novalidate=""
                                                                                                                class=""
                                                                                                                siq_id="autopick_5958">
                                                                                                                <div
                                                                                                                    class="form-group validate-height">
                                                                                                                    <label
                                                                                                                        for="email">Email
                                                                                                                        Id</label>
                                                                                                                    <input
                                                                                                                        class="form-control ng-untouched ng-pristine ng-invalid"
                                                                                                                        id="email"
                                                                                                                        name="email"
                                                                                                                        placeholder="enter email id"
                                                                                                                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$"
                                                                                                                        required=""
                                                                                                                        value="email"
                                                                                                                        type="email"
                                                                                                                        ng-reflect-required=""
                                                                                                                        ng-reflect-pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-"
                                                                                                                        ng-reflect-name="email">
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="form-group validate-height">
                                                                                                                    <label
                                                                                                                        for="pwd">Password</label>
                                                                                                                    <input
                                                                                                                        class="form-control ng-star-inserted ng-dirty ng-valid ng-touched"
                                                                                                                        maxlength="16"
                                                                                                                        minlength="6"
                                                                                                                        placeholder="enter password"
                                                                                                                        name="password"
                                                                                                                        id="password"
                                                                                                                        value="password"
                                                                                                                        required=""
                                                                                                                        ng-reflect-required=""
                                                                                                                        ng-reflect-minlength="6"
                                                                                                                        ng-reflect-maxlength="16"
                                                                                                                        ng-reflect-name="pwd"
                                                                                                                        ng-reflect-model="240919"
                                                                                                                        type="password">
                                                                                                                    <div
                                                                                                                        class="forgot-password">
                                                                                                                        <span>Forgot
                                                                                                                            Password?</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="signin-mobile-button text-center">


                                                                                                                    <input 
                                                                                                                        class=""
                                                                                                                        type="submit"
                                                                                                                        value="Sign In"
                                                                                                                        class="btn btn-primary text-white"
                                                                                                                        style="background-color: #5b99eb;">
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="v-keyboard-block">
                                                                                                                    <div
                                                                                                                        class="v-keyboard-toggle">
                                                                                                                        <div
                                                                                                                            class="v-keyboard-toggle-text">
                                                                                                                            <div
                                                                                                                                class="d-inline-block">
                                                                                                                                <img class="v-keyboard-switch"
                                                                                                                                    src="https://quickregcdn.fundsindia.com/assets/keyboard-off.svg">
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </form>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        class="col-md-2 col-lg-3 pl-0 pr-0 mpl-10 mpr-10">
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </form>
                                                        {{-- <li class="d-xs-none call-desktop">
                                                        <div class="custom-dropdown dropdown google-dropdown">
                                                            <a href="" data-dropdown="dropdown"
                                                                class="js-login-status">
                                                                <img src="https://clipartcraft.com/images/google-logo-transparent-alphabet-4.png"
                                                                    data-loaded="true" />
                                                                <span style="color:blue">K</span>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li class="d-xs-none call-desktop">
                                                        <div class="custom-dropdown">
                                                            <select>
                                                                <option>Hindi</option>
                                                                <option>English</option>
                                                            </select>
                                                        </div>
                                                    </li> --}}
                                                    </ul>
                                                    <!-- 14/04/2021 -->
                                                    <li class="d-xs-none call-desktop">
                                                        <!-- <a href="javascript:void(0)" class=""
                                                        data-dropdown="dropdown " style="color:black;font-size:16px" class="btn"><button class="btn">File Income
                                                        Tax</button></a> -->
                                                        <button class="btn btn-light">
                                                            <a href="javascript:void(0)" class="btn-bells"
                                                                data-dropdown="dropdown"
                                                                style="color:blue;font-size:10px;">File Income
                                                                Tax</a>
                                                        </button>
                                                    </li>
                                                    <li class="d-xs-none call-desktop">
                                                        <!-- <a href="<?php echo route('family'); ?>" class="btn-bells"
                                                       style="color:black;font-size:5px!important"><button class="btn">Family Know After Me</button></a> -->
                                                        <button class="btn btn-light">
                                                            <a href="javascript:void(0)" class="btn-bells"
                                                                data-dropdown="dropdown"
                                                                style="color:blue;font-size:10px;">Family Know After
                                                                Me</button></a>

                                                    </li>

                                                    <li> <a href="{{ url('employ-login') }}"
                                                            style="color:blue;font-size:10px;"
                                                            class="btn btn-light">Employee Login</a>
                                                    <li> <a href="{{ url('distributor-login') }}"
                                                            style="color:blue;font-size:10px;"
                                                            class="btn btn-light">Distributor Login</a>
                                                    <li class="d-xs-none call-desktop">
                                                        <div class="custom-dropdown dropdown google-dropdown">
                                                            <a href="" data-dropdown="dropdown"
                                                                class="js-login-status">
                                                                <img src="https://clipartcraft.com/images/google-logo-transparent-alphabet-4.png"
                                                                    data-loaded="true" />
                                                                <span style="color:blue">K</span>
                                                            </a>
                                                        </div>
                                                    </li>

                                                    <li class="d-xs-none call-desktop">
                                                        <div class="custom-dropdown">
                                                            <select>
                                                                <option>Hindi</option>
                                                                <option>English</option>
                                                            </select>
                                                        </div>

                                                    </li>

                                                </ul>
                                                <!-- 14/04/2021 -->
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="second-bar">
                                    <div class="container">
                                        <div class="second-inner">
                                            <div class="nav-logo" style="margin-top:-40px">
                                                <a href="#">
                                                    <img src="images/logoupd.png" alt="metrofintec"
                                                        class="logo-desktop">
                                                </a>
                                            </div>
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="pro1">
                                                    <ul class="nav-bar primary-nav-items hidden-xs" id="consumer">
                                                        <li class="nav-item   ">


                                                            <a href="/" class="active">Mutual Funds</a>

                                                        </li>
                                                        <li class="nav-item   ">

                                                            <a href="/preipo">Pre IPO</a>

                                                        </li>
                                                        <li class="nav-item">

                                                            <a href="/pms">PMS & AIF</a>

                                                        </li>

                                                        <li class="nav-item   ">

                                                            <a href="javascript:void(0)">International Funds(NRI
                                                                Only)</a>

                                                        </li>
                                                        <li class="nav-item   ">

                                                            <a href="/bonds">Bonds</a>

                                                        </li>
                                                        <li class="nav-item   ">

                                                            <a href="/fd">Fixed Deposit</a>

                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="tab-pane fade" id="pro2">
                                                    <ul class="nav-bar primary-nav-items hidden-xs" id="consumer">
                                                        <li class="nav-item   ">


                                                            <a href="/insurance">Term Insurance</a>

                                                        </li>
                                                        <li class="nav-item   ">

                                                            <a href="/insurance">General Insurance</a>

                                                        </li>

                                                    </ul>
                                                </div>
                                                <div class="tab-pane fade" id="pro3">
                                                    <ul class="nav-bar primary-nav-items hidden-xs" id="consumer">
                                                        <li class="nav-item   ">


                                                            <a href="/loan">Personal Loan</a>

                                                        </li>
                                                        <li class="nav-item   ">

                                                            <a href="/loan">Home Loan</a>

                                                        </li>
                                                        <li class="nav-item">

                                                            <a href="/loan">Business Loan</a>

                                                        </li>



                                                    </ul>
                                                </div>


                                            </div>




                                            <div class="menu-right">

                                                <!-- start notification 14-4-2021 -->

                                                <div class="new-notification-bell custom-dropdown dropdown">


                                                    <div class="custom-dropdown-container dropdown-open-menu">
                                                        <div class="notification-bell-box">
                                                            <div class="notification-bell-top">
                                                                <h6>Offers &amp; Updates</h6>
                                                                <a href="javascript:void(0)"
                                                                    class="bell-dropdown-close"
                                                                    data-dropdownclose="close"><span
                                                                        class="icon-close"></span></a>
                                                            </div>
                                                            <div class="notification-bell-bottom">
                                                                <div class="site-bell-dropdown">
                                                                    <ul
                                                                        class="notification-bell-list notification-bell-icons">
                                                                        <li>

                                                                            <img data-src="/content/dam/tata-capital/svg-images/Moneyfy.svg"
                                                                                class="notification-icons lozad">

                                                                            <p class="notification-heads">Download
                                                                                the Moneyfy App </p>
                                                                            <p class="notification-text">Be
                                                                                Investment ready in minutes</p>
                                                                            <a href="https://app.adjust.net.in/nytxoi4"
                                                                                target="_blank"
                                                                                class="btn-apply-link">Download
                                                                                Now<span
                                                                                    class="icon-arrow-right"></span></a>
                                                                        </li>

                                                                        <!-- <sly data-sly-use.resourcepath=/conf/tata-capital-website/settings/wcm/policies/tata-capital-website/components/content/v3/o-drop-down-retail-header/policy_1576484087952 data-sly-list=",,,">
                                                                            <sly data-sly-test="false">
                                                                                <sly data-sly-list.navNotificationItem=""> -->
                                                                        <li>

                                                                            <img data-src="/content/dam/tata-capital/svg-images/HL.svg"
                                                                                class="notification-icons lozad">

                                                                            <p class="notification-heads">Take a
                                                                                Tata Capital Home Loan </p>
                                                                            <p class="notification-text">Lowest
                                                                                interest rates starting at 7.15%*
                                                                            </p>
                                                                            <a href="https://www.tatacapital.com/online/loans/home-loans/apply-now-home-loan"
                                                                                class="btn-apply-link">Apply
                                                                                Now<span
                                                                                    class="icon-arrow-right"></span></a>
                                                                        </li>

                                                                        <li>

                                                                            <img data-src="/content/dam/tata-capital/svg-images/Tata Card.svg"
                                                                                class="notification-icons lozad">

                                                                            <p class="notification-heads">Apply for
                                                                                a Tata Card </p>
                                                                            <p class="notification-text">Get
                                                                                benefits worth Rs. 18,000*</p>
                                                                            <a href="https://www.tatacard.com/tata-eapply/campaign.page?path=personal/credit-cards/classic-cards/tata-titanium-card.dcr&amp;GEMID1=dis_tatacap_ban_eapp_acq_Nov20_sbicard_tatacap&amp;GEMID2=tatacap_ban_product"
                                                                                target="_blank"
                                                                                class="btn-apply-link">Apply
                                                                                Now<span
                                                                                    class="icon-arrow-right"></span></a>
                                                                        </li>




                                                                    </ul>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- end notification 14-4-2021 -->

                                            </div>
                                            <div class="hamburger-div">
                                                <div class="hamburger-inner">
                                                    <div class="hamburger-menu">
                                                        <div class="first-sub-bar"></div>
                                                        <div class="second-sub-bar"></div>
                                                        <div class="third-sub-bar"></div>
                                                    </div>
                                                    <div class="nav-logo-mobile">
                                                        <a href="https://www.tatacapital.com"><img
                                                                data-src="/apps/tata-capital-website/clientlibs/main/resources/assets/images/tata-capital-logo.svg"
                                                                alt="" class="logo-mobile lozad"></a>
                                                    </div>
                                                </div>

                                                <div class="menu-right d-inlineflex-xs">
                                                    <div
                                                        class="nav-search-login dropdown custom-dropdown login_dropdown">
                                                        <a href="javascript:void(0)" class="login-btn"
                                                            data-dropdown="dropdown">

                                                            <i class="fa fa-user"></i>

                                                        </a>
                                                        <!--start login code-->
                                                        <div class="custom-dropdown-container dropdown-open-menu">
                                                            <div class="notification-bell-box">
                                                                <div class="notification-bell-top">
                                                                    <h6>Login Form</h6>
                                                                    <a href="javascript:void(0)"
                                                                        class="bell-dropdown-close"
                                                                        data-dropdownclose="close"><span
                                                                            class="icon-close"></span></a>
                                                                </div>
                                                                <div class="notification-bell-bottom">
                                                                    <div class="site-bell-dropdown">
                                                                        <ul
                                                                            class="notification-bell-list notification-bell-icons">

                                                                            <li>

                                                                                <div class="row">

                                                                                    <div class="col-md-12">
                                                                                        <div class="row">
                                                                                            <div
                                                                                                class="col-md-12 col-lg-12">
                                                                                                <!--bindings={
"ng-reflect-ng-if": "false"
}-->
                                                                                            </div>
                                                                                            <div
                                                                                                class="col-md-12 col-lg-12 mpl-0 mpr-0">
                                                                                                <div
                                                                                                    class="logo-without-back">
                                                                                                    <menu-header
                                                                                                        _nghost-gsv-c11=""
                                                                                                        class="ng-tns-c11-0 ng-trigger ng-trigger-fadeInAnimation">
                                                                                                        <div _ngcontent-gsv-c11=""
                                                                                                            class="">
                                                                                                            <header
                                                                                                                _ngcontent-gsv-c11=""
                                                                                                                class="ng-tns-c11-0">
                                                                                                                <div _ngcontent-gsv-c11=""
                                                                                                                    class="row mr-0 ml-0">
                                                                                                                    <div _ngcontent-gsv-c11=""
                                                                                                                        class="col-md-12 fi-logo-div">
                                                                                                                        <div _ngcontent-gsv-c11=""
                                                                                                                            class="logout-menu d-inline-flex align-items-center float-right">
                                                                                                                            <span
                                                                                                                                _ngcontent-gsv-c11=""
                                                                                                                                class="ng-tns-c11-0">
                                                                                                                                <!--bindings={
"ng-reflect-ng-if": "false"
}-->
                                                                                                                            </span>
                                                                                                                        </div>
                                                                                                                        <div _ngcontent-gsv-c11=""
                                                                                                                            class="d-none">
                                                                                                                            <input
                                                                                                                                _ngcontent-gsv-c11=""
                                                                                                                                class="form-control"
                                                                                                                                type="text">
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </header>
                                                                                                        </div>
                                                                                                    </menu-header>
                                                                                                </div>
                                                                                                <!--bindings={
"ng-reflect-ng-if": "false"
}-->
                                                                                                <div
                                                                                                    class="qsignin-form">

                                                                                                    <form
                                                                                                        autocomplete="off"
                                                                                                        novalidate=""
                                                                                                        class=""
                                                                                                        siq_id="autopick_5958">
                                                                                                        <div
                                                                                                            class="form-group validate-height">
                                                                                                            <label
                                                                                                                for="email">Email
                                                                                                                Id</label>
                                                                                                            <input
                                                                                                                class="form-control ng-untouched ng-pristine ng-invalid"
                                                                                                                id="email"
                                                                                                                name="email"
                                                                                                                placeholder="enter email id"
                                                                                                                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$"
                                                                                                                required=""
                                                                                                                type="email"
                                                                                                                ng-reflect-required=""
                                                                                                                ng-reflect-pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-"
                                                                                                                ng-reflect-name="email">

                                                                                                        </div>


                                                                                                        <div
                                                                                                            class="form-group validate-height">
                                                                                                            <label
                                                                                                                for="pwd">Password</label>

                                                                                                            <input
                                                                                                                class="form-control ng-star-inserted ng-dirty ng-valid ng-touched"
                                                                                                                maxlength="16"
                                                                                                                minlength="8"
                                                                                                                placeholder="enter password"
                                                                                                                name="pwd"
                                                                                                                required=""
                                                                                                                ng-reflect-required=""
                                                                                                                ng-reflect-minlength="8"
                                                                                                                ng-reflect-maxlength="16"
                                                                                                                ng-reflect-name="pwd"
                                                                                                                ng-reflect-model="24091993"
                                                                                                                type="password">


                                                                                                            <div
                                                                                                                class="forgot-password">
                                                                                                                <span>Forgot
                                                                                                                    Password?</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            class="signin-mobile-button text-center">
                                                                                                            <button
                                                                                                                class="btn btn-primary btn-qsignin"
                                                                                                                type="submit">Sign
                                                                                                                In</button>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            class="v-keyboard-block">
                                                                                                            <div
                                                                                                                class="v-keyboard-toggle">
                                                                                                                <div
                                                                                                                    class="v-keyboard-toggle-text">
                                                                                                                    <div
                                                                                                                        class="d-inline-block">
                                                                                                                        <img class="v-keyboard-switch"
                                                                                                                            src="https://quickregcdn.fundsindia.com/assets/keyboard-off.svg">
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </form>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                class="col-md-2 col-lg-3 pl-0 pr-0 mpl-10 mpr-10">
                                                                                                <!--bindings={
"ng-reflect-ng-if": ""
}-->
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>



                                                                    </div>

                                                                    <!--end -->
                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 21/04/2021 -->
                                    <div class="nav-overlay"></div>

                                    <!-- 21/04/2021 -->
                                </div>

                                <div class="mob-header">
                                    <div class="mob-mainheader" id="mob-mainmenu">
                                        <!-- blue menu -->
                                        <div class="thirdmenu">
                                            <div class="container">
                                                <ul class="bluemenu js-bluemenu-mob nav nav-tabs" role="tablist">
                                                    <li class="active">
                                                        <a href="#view1"data-toggle="tab">Investment</a>
                                                    </li>
                                                    <li>
                                                        <a href="#view2"data-toggle="tab">Insurance</a>
                                                    </li>
                                                    <li>
                                                        <a href="#view3" data-toggle="tab">Loan</a>
                                                    </li>
                                                    <li>
                                                        <a href="/creditcards">Credit Cards</a>
                                                    </li>
                                                    <sup><span class="new-label js-newanimation animation"
                                                            style="margin-top: -13px; margin-left: -26px">New</span></sup>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="tab-content">
                                            <div class="mob-fixscroll tab-pane active" id="view1">
                                                <!-- Accrodian menu-->
                                                <div class="accordian-mobsubmenu js-mobsubmenu active"
                                                    id="consumerMob">
                                                    <div class="accord-col js-accord-col-mob">
                                                        <a href="/" class="submenu-head">Mutual Funds</a>
                                                    </div>
                                                    <a href="/preipo" class="submenu-head ">Pre IPO</a>

                                                    <a href="/pms" class="submenu-head">PMS & AIF</a>


                                                    <a href="/bonds" class="submenu-head">Bonds</a>

                                                    <a href="/fd" class="submenu-head">Fixed Deposit</a>
                                                </div>
                                            </div>
                                            <div class="mob-fixscroll tab-pane fade" id="view2">
                                                <!-- Accrodian menu-->
                                                <div class="accordian-mobsubmenu js-mobsubmenu active"
                                                    id="consumerMob">
                                                    <div class="accord-col js-accord-col-mob">
                                                        <a href="/insurance" class="submenu-head">Term Insurance</a>
                                                    </div>
                                                    <a href="/insurance" class="submenu-head">General Insurance</a>


                                                </div>
                                            </div>
                                            <div class="mob-fixscroll tab-pane fade" id="view3">
                                                <!-- Accrodian menu-->
                                                <div class="accordian-mobsubmenu js-mobsubmenu active"
                                                    id="consumerMob">
                                                    <div class="accord-col js-accord-col-mob">
                                                        <a href="/loan" class="submenu-head">Personal Loan</a>
                                                    </div>
                                                    <a href="/loan" class="submenu-head">Home Loan</a>

                                                    <a href="/loan" class="submenu-head">Business Loan</a>


                                                </div>
                                            </div>
                                            <!--  <div class="mob-fixscroll tab-pane fade" id="view4">-->
                                            <!-- Accrodian menu-->
                                            <!--    <div class="accordian-mobsubmenu js-mobsubmenu active" id="consumerMob">-->
                                            <!--        <div class="accord-col js-accord-col-mob">-->
                                            <!--            <a href="javascript:void(0)" class="submenu-head">Home Loans</a>-->
                                            <!--        </div>-->
                                            <!--        <a href="javascript:void(0)" class="submenu-head js-showDetail"-->
                                            <!--            data-value="mainNavigation_mob_3">Business Loans</a>-->

                                            <!--        <a href="javascript:void(0)" class="submenu-head js-showDetail"-->
                                            <!--            data-value="mainNavigation_mob_4">Loan Against Property</a>-->

                                            <!--        <div class="accord-col js-accord-col-mob">-->
                                            <!--            <a href="javascript:void(0)" class="submenu-head">Vehicle Loan</a>-->
                                            <!--        </div>-->
                                            <!--        <a href="javascript:void(0)" class="submenu-head js-showDetail"-->
                                            <!--            data-value="mainNavigation_mob_6">Loan Against Securities</a>-->
                                            <!--    </div>-->
                                            <!--</div>-->
                                        </div>


                                        <!-- 14/04/2021 -->
                                        <div class="contactus-box">
                                            <a href="tel:+91 8882073381"><i class="icon-call-center"></i> Contact us
                                                <span>+91 8882073381</span></a>
                                        </div>
                                        <!-- 14/04/2021 -->
                                    </div>
                                    <div id="quickLoader" class="loader loader-default"></div>
                    </header>
                </div>
            </div>
        </div>
        <!-- <div class="info-card" style="margin-top:86px;">
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    </div> -->

        {{-- after login model start --}}
        @yield('content')
        <div class="modal fade" id="sucessMessage" data-backdrop="static" tabindex="-1" role="dialog"
            aria-labelledby="afterloginexampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" style=" background: #ee4710;">
                        <h5 class="modal-title" id="loginexampleModalLabel" style="color: #fff;">LOGIN sucessfully
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body"> </div>
                    <div class="modal-footer">
                        <a href="{{ url('/') }}"><button class="btn  btn-primary">Go To Deshboard</button></a>
                        <a href="{{ url('verifypart2') }}"></a><button class="btn  btn-primary">New Invest</button>
                    </div>
                </div>
            </div>
        </div>
        {{-- after login model end --}}
    </div>

    <body>
        {{-- <script src="http://tanslate.google.com/translate_a/element.js?cb=loadGoogletranslate">
     
           function loadGoogletranslate(){
            new google.translate.TranslateElement("google_element");
           }
    </script> --}}
