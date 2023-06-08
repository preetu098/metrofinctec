<!DOCTYPE html>
<html>
    <head>
        <title>Lumpsum Calculator</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Suez+One&display=swap" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style1.css">
    </head>
    <body>
        <section class="sip-calculator">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <h3>Lumpsum Calculator</h3>
                        <div class="range-slider">
                            <span>
                                <label for="customRange3" class="form-label">Total investment</label>
                                <abbr sign-attr="₹">
                                    <input type="number" value="500" id="p" />
                                </abbr>
                            </span>
                         
                        </div>

                        <div class="range-slider">
                            <span>
                                <label for="customRange3" class="form-label">Expected Return Rate (p.a)</label>
                                <abbr sign-attr="%">
                                    <input type="number" value="1" id="r"  />
                                </abbr>
                            </span>
                           
                        </div>

                        <div class="range-slider">
                            <span>
                                <label for="customRange3" class="form-label">Time Period</label>
                                <abbr sign-attr="Yr">
                                    <input type="number" value="1" id="t"  />
                                </abbr>
                            </span>
                          
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="sip-result">
                            <div class="row">
                                <div class="col-md-7 col-6 d-flex align-items-center">
                                    <content>
                                        <p>Total Value</p>
                                        <h2>₹<span id="total_value"></span></h2>
                                    </content>
                                </div>
                                <div class="col-md-5 col-6 sip-result-right">
                                    <span>
                                        <p>Investment Amount</p>
                                        <h2>₹<span id="InvestmentAmount"></span></h2>
                                    </span>
                                    <hr>
                                    <span>
                                        <p>Est. Returns</p>
                                        <h2>₹<span id="est_amount"></span></h2>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-5">
            <div class="container">
                    <div class="row mt-5">
                            <div class="col-lg-6">
                                <button onclick="cal()" class="btn btn-warning">Invest Now  </button>
                                <br>
                                <br>
                                <a href="{{url('/')}}" class="btn btn-warning">Back</a>
                            </div>
                            <div class="col-lg-6">
                                <div class="container">
                                    
                                </div>
                            </div>
                    </div>
            </div>
        </section>
    </body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script >
        function cal() {
    //alert(totalInvestmentVar)
    var p = parseInt(document.getElementById('p').value);
    var r = parseInt(document.getElementById('r').value);
    var t = parseInt(document.getElementById('t').value);
    var amount = p * (Math.pow(1 + r / 100, t));
   var est_return = amount-p;
  //   alert(ci);


    document.getElementById('InvestmentAmount').innerHTML =  p;
    document.getElementById('est_amount').innerHTML = est_return.toFixed(2);
    document.getElementById('total_value').innerHTML = amount.toFixed(2);

}
    </script>
</html>