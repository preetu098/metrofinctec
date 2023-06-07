  {{-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<div><div class="container web-align"><div class="container web-align"></div><div class="row col l12"><div class="clearfix pos-rel cp46LeftSide"><h1 class="cp46Title fs28 fw500">Lumpsum Calculator</h1><div class="col l12 sc54Parent"><div class="sc54TabsDiv"><div class="tabs8Container"><div class="tabs8Line mfSelected" style="width:100px;left:80px"></div><div class="valign-wrapper tabs8Parent"><div class="cur-po fs16 fw500 clrSubText valign-wrapper sc54TabsText false">SIP</div><div class="cur-po fs16 fw500 clrSubText valign-wrapper sc54TabsText tabs8TextActive">Lumpsum</div></div></div></div><div class="sc54PageContainer row l12"><div class="col l7 sc54SliderParent"><div class="cis93InputDiv"><div class="valign-wrapper vspace-between"><div class="valign-wrapper">Total investment</div><div class="cis93InputErrorContainer"><div class="c-drBcop c-drBcop-fliLdX-variant-default"><span><span class="fs16 cis93Prefix undefined"><span class="sc54InrSymbol">₹</span></span> </span><input type="number" class="c-fIHTZN c-fIHTZN-fVxJVE-variant-default fw500 fs18" max="1000000" min="-Infinity" id="LUMPSUM_MONTHLY_INVESTMENT" value="25000" placeholder="0" /><span></span></div></div></div><div style="position:relative" class="slider24Wrapper cis93SliderWrapper"><div class="cis93SliderTrack cis93SliderTrack-0" style="position:absolute;will-change:;left:0;right:0"></div><div class="cis93SliderTrack cis93SliderTrack-1" style="position:absolute;will-change:;left:0;right:0"></div><div class="cis93SliderThumb cis93SliderThumb-0 " style="position:absolute;touch-action:none;will-change:;z-index:1;left:0px" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuenow="25000" aria-valuemin="500" aria-valuemax="1000000"></div></div></div><div class="cis93InputDiv"><div class="valign-wrapper vspace-between"><div class="valign-wrapper">Expected return rate (p.a)</div><div class="cis93InputErrorContainer"><div class="c-drBcop c-drBcop-fliLdX-variant-default"><span> </span><input type="number" class="c-fIHTZN c-fIHTZN-fVxJVE-variant-default fw500 fs18" max="30" min="-Infinity" id="RETURN_RATE" value="12" placeholder="0" /><span><span class="fs16 cis93Prefix sc54InputSuffix">%</span></span></div></div></div><div style="position:relative" class="slider24Wrapper cis93SliderWrapper"><div class="cis93SliderTrack cis93SliderTrack-0" style="position:absolute;will-change:;left:0;right:0"></div><div class="cis93SliderTrack cis93SliderTrack-1" style="position:absolute;will-change:;left:0;right:0"></div><div class="cis93SliderThumb cis93SliderThumb-0 " style="position:absolute;touch-action:none;will-change:;z-index:1;left:0px" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuenow="12" aria-valuemin="1" aria-valuemax="30"></div></div></div><div class="cis93InputDiv"><div class="valign-wrapper vspace-between"><div class="valign-wrapper">Time period</div><div class="cis93InputErrorContainer"><div class="c-drBcop c-drBcop-fliLdX-variant-default"><span> </span><input type="number" class="c-fIHTZN c-fIHTZN-fVxJVE-variant-default fw500 fs18" max="40" min="-Infinity" id="TIME_PERIOD" value="10" placeholder="0" /><span><span class="fs16 cis93Prefix sc54InputSuffix">Yr</span></span></div></div></div><div style="position:relative" class="slider24Wrapper cis93SliderWrapper"><div class="cis93SliderTrack cis93SliderTrack-0" style="position:absolute;will-change:;left:0;right:0"></div><div class="cis93SliderTrack cis93SliderTrack-1" style="position:absolute;will-change:;left:0;right:0"></div><div class="cis93SliderThumb cis93SliderThumb-0 " style="position:absolute;touch-action:none;will-change:;z-index:1;left:0px" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuenow="10" aria-valuemin="1" aria-valuemax="40"></div></div></div><div class="valign-wrapper vspace-between pos-rel sc54OutputContainer"><div class="valign-wrapper vspace-between fullWidth sc54OutputText"><div class="fs14 clrSubText">Invested amount</div><div class="fs16 fw500"><span class="sc54InrSymbol">₹<span></span></span></div></div><div class="valign-wrapper vspace-between fullWidth sc54OutputText"><div class="fs14 clrSubText">Est. returns</div><div class="fs16 fw500"><span class="sc54InrSymbol">₹<span></span></span></div></div><div class="valign-wrapper vspace-between fullWidth sc54OutputText"><div class="fs14 clrSubText">Total value</div><div class="fs16 fw500"><span class="sc54InrSymbol">₹<span></span></span></div></div><div class="center-align pos-abs sc54Button"><div class=""><div class="btn51Btn btn51RipplePrimary btn51Primary" style="width:auto;height:45px;font-size:;background-color:;color:;button-text:INVEST NOW;on-click:()=&gt;{ --}}
  @include('layout.header')

  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>calculator</title>
  </head>

  <body>
      <div class="container">
        <div class="col md-5">
          <h3>Lumpsum Calculator</h3>
          <h5>SIP Lumpsum</h5>
          <table>
              <tr>
                  <td>Total investment </td>
                  <td>
                      <input type="text" id="p" name="p">
                  </td>
              </tr>
              <tr>
                  <td>Expected return rate (p.a)</td>
                  <td>
                      <input type="text" id="r" name="r">
                  </td>
              </tr>
              <tr>
                  <td>Time period</td>
                  <td>
                      <input type="text" id="t" name="t">
                  </td>
              </tr>
          </table>
          <div id="invest_amount"> <p>Invested amount ₹ - </p></div>
          <div id="est_amount"> <p>Est. returns ₹ - </p></div>
          <div id="total_value"> <p>Total value ₹ - </p></div>
          <div class="d-flex justify-content-center" style="margin-left:120px">
              <button onclick="cal()" class="btn btn-primary">
                  Invest Now
              </button>
              <div ></div>
          </div>

      </div>
    </div>
  </body>

  </html>
  <script>
      function cal() {
          var p = document.getElementById('p').value;
          var r = document.getElementById('r').value;
          var t = document.getElementById('t').value;
          var amount = p * (Math.pow(1 + r / 100, t));
         var est_return = amount-p;
        //   alert(ci);


          document.getElementById('invest_amount').innerHTML = "Invested amount ₹ : " + p;
          document.getElementById('est_amount').innerHTML = "Est. returns ₹ : " + est_return.toFixed(2);
          document.getElementById('total_value').innerHTML = "Total value ₹ : " + amount.toFixed(2);
          
      }
  </script>
