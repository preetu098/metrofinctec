@include('layout.calculatorheader')
<link href="https://cdn.usebootstrap.com/bootstrap/5.0.1/css/bootstrap.min.css" rel="stylesheet"/>
<link href="https://cdn.usebootstrap.com/bootstrap/5.0.1/js/bootstrap.min.js" rel="stylesheet"/>
<script src="https://cdn.usebootstrap.com/bootstrap/5.0.1/js/bootstrap.bundle.min.js"></script>

     <div class="container" style="margin-top:100px;">
    <div class="row">
        <div class="col-lg-6">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        function calculateHomeLoanEMI() {
var loanAmount = $("#txtLoanAmount").val();
var numberOfMonths = parseFloat($("#txtLoanTerm").val());
var selectedTermType = $('#ddlTermType').val();
if (selectedTermType == 'years')
{
         var loanTermArray = numberOfMonths.toString().split('.');
         numberOfMonths = Math.floor(numberOfMonths) * 12;
         if (loanTermArray.length > 1)
         {
                var precisionVal = parseInt(loanTermArray[1]);
                if (precisionVal >= 1 && precisionVal <= 12)
                {
                       numberOfMonths += precisionVal;
                }
                else
                {
                       alert('Loan Term entered is incorrect!');
                       $("#txtLoanTerm").val('');
                       return false;
                 }
          }
 }
 if (!numberOfMonths || numberOfMonths > 360)
 {
        alert('Loan Term should not be more than 360 months or 30 years!');
        $("#txtLoanTerm").val('');
        return false;
 }
 else
 {
        $('.home-loan-result-container').show();
        var rateOfInterest = $("#txtInterestRate").val();
        var monthlyInterestRatio = (rateOfInterest / 100) / 12;
        var top = Math.pow((1 + monthlyInterestRatio), numberOfMonths);
        var bottom = top - 1;
        var sp = top / bottom;ade
        var emi = ((loanAmount * monthlyInterestRatio) * sp);
        var full = numberOfMonths * emi;
        var interest = full - loanAmount;
        var int_pge = (interest / full) * 100;
        $("#tbl_int_pge").html(int_pge.toFixed(2) + " %");
        var emi_str = emi.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var loanAmount_str = loanAmount.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var full_str = full.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var int_str = interest.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $("#totalEMIValue").html(emi_str);
        $("#totalLoanAmount").html(loanAmount_str);
        $("#totalLoanTerm").html(numberOfMonths.toString() + ' Months');
        $("#totalInterestRate").html(rateOfInterest);
        $("#totalAmount").html(full_str);
        $("#totalInterestPaid").html(int_str);
}
}
function clear()
{
    $("#txtLoanAmount").val("");
$("#txtLoanTerm").val("");
$('#ddlTermType').val("");
}
    </script>
            <div class="form-group" style="padding: 0px 15px 0px 0px;">
                <label class="d-flex" for="fromValue">Loan Amount</label>
                <input type="text" class="form-control form-control-lg" id="txtLoanAmount">
            </div>
            <div class="form-group" style="padding: 0px 15px 0px 0px;">
                <label class="d-flex" for="toValue">Interest Rate(%)</label>
                <input type="text" class="form-control form-control-lg" id="txtInterestRate" />
            </div>
            <div class="form-group">
                <label class="d-flex" for="toValue">Loan Term</label>
                <div class="row" style="margin:0px;">
                    <div class="col-sm-6 form-group" style="padding-left:0px;">
                        <div class="row" style="margin:0px;">
                            <input type="text" class="col-md-12 form-control form-control-lg" id="txtLoanTerm" />
                        </div>
                    </div>
                    <div class="col-sm-6 form-group" style="padding-left:0px;">
                        <div class="row" style="margin:0px;">
                            <select class="col-md-12 form-control form-control-lg" id="ddlTermType">
                                <option value="years">Years</option>
                                <option value="months">Months</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row" style="margin:0px;">
                    <div class="col-sm-6 form-group" style="padding-left:0px;">
                        <div class="row" style="margin:0px;">
                            <button type="button" class="col-md-12 btn btn-outline-secondary"             id="btnResetHomeLoanEMIForm" onclick="clear()">Reset</button>
                        </div>
                    </div>
                    <div class="col-sm-6  form-group" style="padding-left:0px;">
                        <div class="row" style="margin:0px;">
                            <button type="button" class="col-md-12 btn btn-outline-primary" id="btnCalculateHomeLoanEMI"  onclick="calculateHomeLoanEMI()">Calculate</button>
                        </div>
                    </div>
                </div>
            </div>
</div>
<div class="col-lg-6">
            <div class="home-loan-result-container">
                <h5 style="background-color: #a09a9a;color: #fff;padding: 10px;margin-bottom:0px;">EMI Result</h5>
                <div class="row home-loan-result-row" style="background-color: #014667;color: #fff;">
                    <div class="col- home-loan-result-left-col">EMI</div>
                    <div class="col- home-loan-result-right-col" id="totalEMIValue"></div>
                </div>
                <div class="row home-loan-result-row">
                    <div class="col- home-loan-result-left-col">Loan Amount</div>
                    <div class="col- home-loan-result-right-col" id="totalLoanAmount"></div>
                </div>
                <div class="row home-loan-result-row">
                    <div class="col- home-loan-result-left-col">Loan Term</div>
                    <div class="col- home-loan-result-right-col" id="totalLoanTerm"></div>
                </div>
                <div class="row home-loan-result-row">
                    <div class="col- home-loan-result-left-col">Interest Rate</div>
                    <div class="col- home-loan-result-right-col" id="totalInterestRate"></div>
                </div>
                <div class="row home-loan-result-row">
                    <div class="col- home-loan-result-left-col">Interest Amount</div>
                    <div class="col- home-loan-result-right-col" id="totalInterestPaid"></div>
                </div>
                    <div class="row home-loan-result-row">
                        <div class="col- home-loan-result-left-col">Total Amount</div>
                        <div class="col- home-loan-result-right-col" id="totalAmount"></div>
                    </div>
            </div>
        </div>
        </div>
     </div>  
</div>  
<div class="container">
    <div class="row">
    <div class="col-lg-12 mt-5">
       <h4>
       What is EMI?
       </h4> 
       <p>Equated Monthly Installment - EMI for short - is the amount payable every month to the bank or any other financial institution until the loan amount is fully paid off. It consists of the interest on loan as well as part of the principal amount to be repaid. The sum of principal amount and interest is divided by the tenure, i.e., number of months, in which the loan has to be repaid. This amount has to be paid monthly. The interest component of the EMI would be larger during the initial months and gradually reduce with each payment. The exact percentage allocated towards payment of the principal depends on the interest rate. Even though your monthly EMI payment won't change, the proportion of principal and interest components will change with time. With each successive payment, you'll pay more towards the principal and less in interest.

Here's the formula to calculate EMI:<p>
  <div class="row">
    <div class="col-lg-4">
    <img src="https://omsmaf.co.za/wp-content/uploads/2019/05/calculator-1-768x614.png"/>
    </div>
    <div class="col-lg-8" style="margin-top:90px" >
        <h3>For example, if you borrow ₹10,00,000 from the bank at 10.5% annual interest for a period of 10 years (i.e., 120 months), then EMI = ₹10,00,000 * 0.00875 * (1 + 0.00875)120 / ((1 + 0.00875)120 - 1) = ₹13,493. i.e., you will have to pay ₹13,493 for 120 months to repay the entire loan amount. The total amount payable will be ₹13,493 * 120 = ₹16,19,220 that includes ₹6,19,220 as interest toward the loan.</h3>
    </div>
  </div>
<h2>How to Use EMI Calculator?</h2>
<div class="row">
    <div class="col-lg-8">
        <h4 class="mt-5">
        With colourful charts and instant results, our EMI Calculator is easy to use, intuitive to understand and is quick to perform. You can calculate EMI for home loan, car loan, personal loan, education loan or any other fully amortizing loan using this calculator.


        </h4>
        <h4 class="mt-5">
        A pie chart depicting the break-up of total payment (i.e., total principal vs. total interest payable) is also displayed. It displays the percentage of total interest versus principal amount in the sum total of all payments made against the loan. The payment schedule table showing payments made every month / year for the entire loan duration is displayed along with a chart showing interest and principal components paid each year. A portion of each payment is for the interest while the remaining amount is applied towards the principal balance. During initial loan period, a large portion of each payment is devoted to interest. With passage of time, larger portions pay down the principal. The payment schedule also shows the intermediate outstanding balance for each year which will be carried over to the next year.


        </h4>
    </div>
    <div class="col-lg-4">
        <img src="https://webstockreview.net/images/collaboration-clipart-organisation-15.png"/>
    </div>
</div>
    </div>
    </div>
</div>