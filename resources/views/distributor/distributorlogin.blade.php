@extends('layout.header')
@section('content')


<section class="login-content">
  <div class="container h-100">
     <div class="row align-items-center justify-content-center h-100">
        <div class="col-md-5">
           <div class="card p-3">
              <div class="card-body">
                 <div class="auth-logo" style="display: flex; justify-content: center;">>
                 
                    <img style="height: 200px;width: 200px;" src="http://metrofintech.com/images/logoupd.png" class="img-fluid rounded-normal light-logo" alt="logo">
                 </div>
                 <h3 class=" font-weight-bold text-center" style="margin-top: -50px;">Distributor Sign In</h3>
                 <p class="text-center text-secondary mb-4">Log in to your account to continue</p>
                 <div class="social-btn d-flex justify-content-around align-items-center mb-4">
                   
                    
                 </div>
                 <div class="mb-5">
                     <p class="line-around text-secondary mb-0"><span class="line-around-1">or login with email</span></p>
                 </div>
                 <form action="{{route('distributorlogin')}}" method="POST">
                  @csrf
                    <div class="row">
                       <div class="col-lg-12">
                          <div class="form-group">
                             <label class="text-secondary">Email</label>
                             <input class="form-control" type="email" name="email" value="" placeholder="Enter Email">
                          </div>
                       </div>
                       <div class="col-lg-12 mt-2">
                          <div class="form-group">
                              <div class="d-flex justify-content-between align-items-center">
                                  <label class="text-secondary">Password</label>
                                  <label><a href="auth-recover-pwd.html">Forgot Password?</a></label>
                              </div>
                             <input class="form-control" type="password" name="password" value="" placeholder="Enter Password">
                          </div>
                          {{session('error')}}
                       </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mt-2">Log In</button>
                   
                <p class="text-center text-muted mt-5 mb-0">For New account? <a href="{{ url('distributor-register')}}"
                  class="fw-bold text-body"><u>Regiater Here</u></a></p>
                 </form>
              </div>
           </div>
        </div>
     </div>
  </div>
</section>

{{-- <section class="vh-100 bg-image">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Distributor Login</h2>

              <form action="{{route('distributorlogin')}}" method="POST">
              @csrf
           

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" name="email" value="" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example3cg"> Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" name="password" value="" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>
                  {{session('error')}}
           

          

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Log in</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">For New account? <a href="{{ url('distributor-register')}}"
                    class="fw-bold text-body"><u>Regiater Here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> --}}

@endsection
