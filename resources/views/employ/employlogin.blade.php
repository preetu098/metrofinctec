@extends('layout.header')
@section('content')

    

<section class="vh-100 bg-image"
  style="background-image: url('https://c4.wallpaperflare.com/wallpaper/514/981/272/smoky-white-bw-black-wallpaper-preview.jpg');">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Employ Login</h2>

              <form action="{{route('employlogin')}}" method="POST">
              @csrf
           

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example3cg"> Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>

                {{-- <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cdg">Confirm password</label>
                </div> --}}

          

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Log in</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">For New account? <a href="{{ url('employ-register')}}"
                    class="fw-bold text-body"><u>Regiater Here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

@endsection

{{-- <div class="container">
    <div class="container-xxl flex-grow-1 container-p-y">
        <div>
            <h4>Employ Login</h4>
        </div>
        <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Sign In</button>
            <button type="submit"  ><a  style="color:blue" class="text-blue" href="{{ url('employregister')}}">Create Account</a> </button>
        </form>
          
</div>
</div>
@endsection --}}