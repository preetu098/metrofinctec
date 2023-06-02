<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

    
</head>
<style>
    #t1
    {
        height:50px ;
        width: 70%;
        background-color: rgb(191, 247, 228);
        border-radius: 10px;
    }
    h3::first-letter
        {
        
        color:orange;
        }
        h3::after
        {
           color: orange;
        }
        
        
        
        
    
</style>
<body>
    <div class="container-fluid">
        <div class="container-fluid mt-1">
            <div class="row">
                <div class="col-lg-6">
                    <img src="C:\Users\DELL\Downloads\logochange.jpeg" alt="" style="height: 60px;">
                </div>
                <div class="col-lg-6"></div>
            </div>
        </div>
    </div>
    <hr>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                <img src="https://www.esure.com/sites/esure/files/inline-images/homeInsurance.png" alt="" style="width: 100%;margin-top: 100px;">
              
            </div>
            <div class="col-lg-6">
               <div class="row">
               
                <div class="col-md-10">
                    <div class="container">
                        <h3 class="mt-4 " style="">₹1 Crore life cover at ₹490/month+</h3>
                            <div style="margin-left:45px ;">
                                <div class="row">
                                   
                                    <div class="col-md-12">
                                        <style>
                                                #h::before
                                                {
                                                        content: url('https://static.pbcdn.in/term-cdn/images/images/discount-2.svg');
                                                }
                                        </style>
                                        <h5 class="mt-2" id="h">Get an online discount of upto 10%#</h5>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <form class="ms-5">
                                <div class="form-check form-check-inline mt-4 ">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                      value="option1" checked />
                                    <label class="form-check-label " for="femaleGender" style="font-size: 16x;color:#253858;">Female</label>
                                  </div>
                
                                  <div class="form-check form-check-inline mt-4">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                      value="option2" />
                                    <label class="form-check-label  " for="maleGender" style="font-size: 16x;color:#253858;">Male</label>
        
                                  </div><br>
                                  <label class="form-label fs-6 mt-4" for="form3Example1c ">Your Name</label><br>
                                  <input type="text" class="form-control-lg col-xs-5 " id="form3Example1c"  style="border-radius: 8px;font-size: 16px;width: 100%;border: 1px solid #5e6c84;;" placeholder="Enter Your Name" /><br>
        
                                  <label class="fiedlabel deskdob fs-6 mt-4" for="dob">Date of Birth</label><br>
                                  <input type="dobsec" class="form-control-lg"  style="border-radius: 8px;font-size: 16px;width: 100%;border: 1px solid #5e6c84;;" placeholder="DD/MM/YYYY"/><br>
        
                                  <label class="fiedlabel  fs-6 mt-4" for="mobileNo">Mobile Number</label><br>
                                  <input type="mob" class="form-control-lg "  style="border-radius: 8px;font-size: 16px;width: 100%;border: 1px solid #5e6c84;;" placeholder="Enter Mobile"/><br><br>
                                   
                                  <button class="btn btn-primary mt-4 form-control" style="height: 54px;    font-size: 16px;    font-weight: 400;" >View Free Quotes</button>
        
                        </form>
                    </div>
                </div>
                <div class="col-md-2"></div>
              
        </div>
        </div>
        </div>
    </div>
    @include('layout.logofooter')


    @include('layout.mutualfundfooter')
    @include('layout.footer')
