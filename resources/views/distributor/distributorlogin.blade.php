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
                {{-- <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cdg">Confirm password</label>
                </div> --}}

          

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
</section>

@endsection
