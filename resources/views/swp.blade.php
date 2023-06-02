<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SWP Calculator</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        .card1 {
            height: 100px;
            width: 100px;
            background-color: orange;
        }

        .ti {
            height: 30px;
            width: 200px;
            border-radius: 5px;
        }
    </style>
</head>

<body>
    <section class="mt-3">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h5 style="opacity: 0.5;">Are you ready for your investment</h5>
            
                </div>
                <div class="col-md-2">
                    <img src="images/SWP_Icon.svg" alt="">
                </div>
                <div class="col-md-2">
                    <button class="btn btn-success">Invest Now</button>
                </div>
            </div>
        </div>
    </section>
    <hr>
    <section class="mt-3 mb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4 class="mt-1" style="opacity: 0.5;">SWP (Systematic Withdrawal Plan) Calculator</h4>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-4">
                    <img src="images/digital-gold-banner-img.png" alt="" style="width: 300px;">
                    <div class="card">
                        <div class="row mt-3 ms-1">
                            <div class="col-md-6">
                                <p>Total Investment</p>                                
                            </div>
                            <div class="col-md-6">
                                <div id="tii" class="bg-default ti"></div>
                            </div>
                        </div>
                    
                        <div class="row mt-3 ms-1">
                            <div class="col-md-6">
                                <p>Total Withdrawal</p>                                
                            </div>
                            <div class="col-md-6">
                                <div id="tii" class="bg-default ti"></div>
                            </div>
                        </div>
                        <div class="row mt-3 ms-1">
                            <div class="col-md-6">
                                <p>Final Value</p>                                
                            </div>
                            <div class="col-md-6">
                                <div id="tii" class="bg-default ti"></div>
                            </div>
                        </div>
                    </div>
                    <p class="mt-3"><strong class="text-primary">SWP</strong> stands for systematic withdrawal plan. Under SWP, if you invest lump sum in a mutual fund, you can set an amount you’ll withdraw regularly and the frequency at which you’ll withdraw.</p>
                </div>
                <div class="col-md-8">
                    <div class="card">
                        <div class="row mt-5 ms-5">
                            <div class="col-md">
                                <p>Total investment</p>
                            </div>
                            <div class="col-md">
                              
                            </div>
                            <div class="col-md">
                                <div class="row">
                                    <div class="col">
                                        
                                    </div>
                                    <div class="col"></div>
                                </div>
                               
                                <div id="ti" class="bg-warning ti"></div>
                            </div>
                        </div>
                        <div class="row mt-1 ms-3">
                            <div class="col">
                                <div class="container">
                                    <button class="btn btn-default" onclick="addInvest()">
                                        <i class="fa fa-arrow-circle-o-left" style="font-size:30px;color:orange"></i>
                                    </button>
                                    <button class="btn btn-default" onclick="lessInvest()">
                                        <i class="fa fa-arrow-circle-o-right" style="font-size:30px;color:orange"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div class="row mt-3 ms-5">
                            <div class="col-md">
                                <p>Withdrawal Per month</p>
                            </div>
                            <div class="col-md">

                            </div>
                            <div class="col-md">
                                <div id="ti2" class="bg-warning ti"></div>
                            </div>
                        </div>
                        <div class="row mt-1 ms-3">
                            <div class="col">
                                <div class="container">
                                    <button class="btn btn-default" onclick="addWithdrawl()">
                                        <i class="fa fa-arrow-circle-o-left" style="font-size:30px;color:orange"></i>
                                    </button>
                                    <button class="btn btn-default" onclick="lessWithdrawl()">
                                        <i class="fa fa-arrow-circle-o-right" style="font-size:30px;color:orange"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div class="row mt-3 ms-5">
                            <div class="col-md">
                                <p>Expected return rate (p.a)</p>
                            </div>
                            <div class="col-md">

                            </div>
                            <div class="col-md">
                                <div id="ti3" class="bg-warning ti"></div>
                            </div>
                        </div>
                        <div class="row mt-1 ms-3">
                            <div class="col">
                                <div class="container">
                                    <button class="btn btn-default" onclick="addRate()">
                                        <i class="fa fa-arrow-circle-o-left" style="font-size:30px;color:orange"></i>
                                    </button>
                                    <button class="btn btn-default" onclick="lessRate()">
                                        <i class="fa fa-arrow-circle-o-right" style="font-size:30px;color:orange"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div class="row mt-3 ms-5">
                            <div class="col-md">
                                <p>Time period</p>
                            </div>
                            <div class="col-md">

                            </div>
                            <div class="col-md">
                                <div id="ti4" class="bg-warning ti"></div>
                            </div>
                        </div>
                        <div class="row mt-1 ms-3">
                            <div class="col">
                                <div class="container">
                                    <button class="btn btn-default" onclick="addPeriod()">
                                        <i class="fa fa-arrow-circle-o-left" style="font-size:30px;color:orange"></i>
                                    </button>
                                    <button class="btn btn-default" onclick="lessPeriod()">
                                        <i class="fa fa-arrow-circle-o-right" style="font-size:30px;color:orange"></i>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                   <a href="/"><button class="btn btn-primary mt-5">Back Now</button></a>
                </div>
            </div>
        </div>
    </section>
    <script src="js/swpcal.js"></script>



@include('layout.mutualfundfooter')
@include('layout.footer')
