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

    <link href="{{url('assets1/css/bootstrap.min.css')}}" rel="stylesheet">

    <link href="{{url('assets1/css/style.css')}}" rel="stylesheet">
    <link href="{{url('assets1/css/font/flaticon.css')}}" rel="stylesheet">
    <link href="{{url('assets1/font/flaticon.css')}}" rel="stylesheet">
</head>

<body>
    <div class="container">

        <div class="row">
            <div class="col-md-4 mt-5">
                <h3 class="mt-5">Welcome</h3>

                @if($data->account_type == 2)
                 <img src="https://i0.wp.com/bemyeye.com/wp-content/uploads/2020/02/Go-in-the-right-direction2.png?fit=768%2C882&ssl=1" />
                    <p>Investment definition is an asset acquired or invested in to build wealth and save money from the
                        hard earned income or appreciation. Investment meaning is primarily to obtain an additional source
                        of income or gain profit from the investment over a specific period of time</p>

                 @elseif($data->account_type == 1)
                <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration-enter-application-mobile-screen-user-login-form-website-page-interface-ui-new-profile-registration-email-account_335657-936.jpg?w=2000" />
                    @endif
            </div>

            <div class="col-md-8 col-lg-6 mpl-0 mpr-0">
                <div class="logo-without-back">
                    <menu-header _nghost-gsv-c11="" class="ng-tns-c11-0 ng-trigger ng-trigger-fadeInAnimation">
                        <div _ngcontent-gsv-c11="" class="">
                            <header _ngcontent-gsv-c11="" class="ng-tns-c11-0">
                                <div _ngcontent-gsv-c11="" class="row mr-0 ml-0">
                                    <div _ngcontent-gsv-c11="" class="col-md-12 fi-logo-div">
                                        <div _ngcontent-gsv-c11="" class="d-inline-block"><img _ngcontent-gsv-c11="" class="fi-logo" src="images/logoset.jpeg" style="width:200px"></div>
                                        <div _ngcontent-gsv-c11=""  class="logout-menu d-inline-flex align-items-center float-right">
                                            <span _ngcontent-gsv-c11="" class="cursor">
                                            <!--bindings={"ng-reflect-ng-if": "false"}--></span>
                                            <!--bindings={"ng-reflect-ng-if": "false"}-->
                                            <!--bindings={}-->
                                            <span _ngcontent-gsv-c11="" class="ng-tns-c11-0">
                                             <!--bindings={ng-reflect-ng-if": "false"}--></span>
                                        </div>
                                        <div _ngcontent-gsv-c11="" class="d-none"><input _ngcontent-gsv-c11="" class="form-control" type="text"></div>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </menu-header>
                </div>
                <!--bindings={ "ng-reflect-ng-if": "false" }-->
                <div class="qsignin-form">

                    <h4 style="color:black">Enter your Personal Details</h4>
                    <form autocomplete="off" novalidate="" action="{{ route('regdatato') }}" method="POST" class="ng-invalid ng-dirty ng-touched" siq_id="autopick_5958">
                        @csrf
                        <input type="hidden" name="id" value="{{$data->id}}">
                        <div class="form-group validate-height">
                            <label for="gender">Gender</label>
                            <select name="gender" class="form-control">
                                <option>Male</option>
                                <option>Female</option> 
                            </select>
                        </div>    
                        <div class="form-group "><label for="pwd">Marital Status</label>

                            <select class="form-control" name="marital_status">
                                <option>Single</option>
                                <option>Married</option>       
                            </select>
                        </div>
                        <div class="form-group "><label for="pwd">Annual Income</label> 
                            <input class="form-control" type="text" id="annual_income" name="annual_income" required=""  placeholder="enter Annual Income">
                        </div>
                        <div class="form-group "><label for="pwd">Father Name</label> 
                            <input class="form-control"type="text" id="father_name" name="father_name" required=""  placeholder="enter Father Name">
                        </div>
                        <div class="form-group "><label for="pwd">Mother Name</label> 
                            <input class="form-control"type="text" id="mother_name" name="mother_name" required="" placeholder="enter Mother Name">
                        </div> 
                        <div class="form-group "><label for="pwd">Nationality</label> 
                            <input class="form-control"type="text" id="nationality" name="nationality" required="" placeholder="enter Nationality">
                        </div> 
                        <div class="form-group "><label for="pwd">Country Of Birth</label> 
                            <input class="form-control"type="text" id="country_of_birth" name="country_of_birth" required=""  placeholder="enter Country Name">
                        </div> 
                        <h4 style="color:black">@if($data->account_type == 2) Overseas @endif Address Details</h4>

                        <div class="form-group validate-height">
                            <label for="address">Address</label>
                            <input class="form-control"type="text" id="address" name="address" required="" placeholder="enter your address">
                        </div> 
                        <div class="form-group "><label for="pwd">State</label>
                            <input class="form-control"type="text" id="state" name="state" required="" placeholder="enter state name">
                        </div>
                        <div class="form-group "><label for="pwd">City</label>
                            <input class="form-control"type="text" id="state" name="city" required=""placeholder="enter city name">
                        </div>
                        <div class="form-group "><label for="pwd">PinCode</label> 
                            <input class="form-control"type="number" id="pincode" name="pincode" required=""  placeholder="enter pincode">
                        </div>
                        <div class="signin-mobile-button text-center"><button class="btn btn-primary btn-qsignin"type="submit" style="width:100%">Process</button></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="container mt-5">
        <center>
            <p>© Helois - 2020 | All Right Reserved.</p>
        </center>
    </div>
</body>

</html>
