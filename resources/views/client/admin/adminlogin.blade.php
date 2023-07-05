<head>
    <title>Login</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <style>
        .login-wrap {
    position: relative;
    color: rgba(80, 76, 76, 0.9);
}
.text-center {
    text-align: center!important;
}
.mb-4, .my-4 {
    margin-bottom: 1.5rem!important;
}
h1, h2, h3, h4, h5, .h1, .h2, .h3, .h4, .h5 {
    line-height: 1.5;
    font-weight: 400;
    font-family: "Lato",Arial,sans-serif;
    color: #000;
}
h3, .h3 {
    font-size: 1.75rem;
}
.form-control {
    background: transparent;
    border: none;
    height: 50px;
  
    border: 1px solid transparent;
    background: rgba(255,255,255,.08);
    border-radius: 40px;
    padding-left: 20px;
    padding-right: 20px;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
  
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    -webkit-transition: border-color .15s ease-in-out , -webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out , -webkit-box-shadow .15s ease-in-out;
    -o-transition: border-color .15s ease-in-out , box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out , box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out , box-shadow .15s ease-in-out , -webkit-box-shadow .15s ease-in-out;
}
input[type="text" i] {
    padding: 1px 2px;
}
user agent stylesheet
input {
    writing-mode: horizontal-tb !important;
    font-style: ;
    font-variant-ligatures: ;
    font-variant-caps: ;
    font-variant-numeric: ;
    font-variant-east-asian: ;
    font-weight: ;
    font-stretch: ;
    font-size: ;
    font-family: ;
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: field;
    margin: 0em;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
.field-icon {
    position: absolute;
    top: 50%;
    right: 15px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    color: rgba(12, 11, 11, 0.9);
}
.fa-fw {
    width: 1.28571429em;
    text-align: center;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
button, input {
    overflow: visible;
}
input, button, select, optgroup, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
.form-group {
    margin-bottom: 1rem;
}
.form-group {
    position: relative;
}
.form-group {
    margin-bottom: 1rem;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
}
h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
}
.card
    {
        /* box-shadow: 1px 1px 1px gray; */
   
        /* width: 60%; */
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    }
.p-0 {
    padding: 0!important;
}
*, *::before, *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.24/sweetalert2.min.js" integrity="sha512-dnyteqeKASHjUgi20CTeO5cfd1JwMTNV2ZS+tx5rlPCdWgnd6UKYNLM2EarSU9E6J3lMtMhUkcA6g8f3cAjoQQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.24/sweetalert2.all.js" integrity="sha512-pWCMlLqWPfRQz669NdwWZL243IK+6w+Vkt6pjiyR4TmVMy8isXg8vAvZW0UMZGIJJyoXChig3vMGL+2Xzr0INw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.24/sweetalert2.all.min.js" integrity="sha512-Ty04j+bj8CRJsrPevkfVd05iBcD7Bx1mcLaDG4lBzDSd6aq2xmIHlCYQ31Ejr+JYBPQDjuiwS/NYDKYg5N7XKQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    
    <script>
        function validate()
        {
            var email=document.form.email.value;
            var password=document.form.pswd.value;
            if(email=='Modern@gmail.com' && password=='1234')
            {
               return true;
            }
            else
            {
                    Swal.fire('Mutual Fund Admin Dashboard','invalid information','warning');
                    return false;
            }
        }
    </script>
        <body>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-6  mt-5">
                        <img src="https://i0.wp.com/actlogica.com/wp-content/uploads/2021/01/landing-app-layout-vector.png?fit=651%2C514&ssl=1" style="width: 80%;margin-top: 70px;" alt="">
                    </div>
                    <div class="col-md-6 " style="margin-top: 120px;">
                        <h3 class="text-warning ms-3">Welcome in Admin Login Form!</h3>
                        <div class="card">
                          
                            <div class="row" >
                                <div class="col-md-12">
                                    <div class="container mt-5">
                                        <form action="/admindashboard" onsubmit="return validate()" name="form">
                                            <div class="mb-3 mt-3">
                                              <label for="email">Email</label>
                                              <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                                            </div>
                                            <div class="mb-3">
                                              <label for="pwd">Password</label>
                                              <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                                            </div>
                                            <div class="form-check mb-3">
                                              <label class="form-check-label">
                                                <input class="form-check-input" type="checkbox" name="remember"> Remember me
                                              </label>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                          </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
    </body>