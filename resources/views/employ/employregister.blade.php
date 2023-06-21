@extends('layout.header')
@section('content')
    
<section class="vh-100 bg-image">
<div class="mask d-flex align-items-center h-100 gradient-custom-3">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-9 col-lg-7 col-xl-6">
        <div class="card" style="border-radius: 15px;">
          <div class="card-body p-5">
              @if (Session::has('success'))
              <h4 style="color:green">{{Session::get('success')}}</h4>
               @endif
              <h2 class="text-uppercase text-center mb-5">Employee Register</h2>

              <form action="{{ route('employregister')}}" method="POST">
                 @csrf
                <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example1cg">Name</label>
                  <input type="text" id="" name="name" value="{{old('name')}}" class="form-control form-control-lg" />
                  @error('name')
                  <span class="text-danger">{{ $message }}</span>
                @enderror
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3cg">Email</label>
                  <input type="email" name="email" value="{{old('email')}}" id="form3Example3cg" class="form-control form-control-lg" />
                  @error('email')
                  <span class="text-danger">{{ $message }}</span>
                @enderror
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3cg">Mobile Number</label>
                    <input type="phone" id="" name="phone" value="{{old('phone')}}" class="form-control form-control-lg" />
                    @error('phone')
                    <span class="text-danger">{{ $message }}</span>
                  @enderror
                  </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4cg">Password</label>
                  <input type="password" id=""  name="password" name='password' value="{{old('password')}}" class="form-control form-control-lg" />
                  @error('password')
                  <span class="text-danger">{{ $message }}</span>
                @enderror
                </div>

                {{-- <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4cdg">Confirm password</label>
                  <input type="password" id=""  class="form-control form-control-lg" />
                </div> --}}


                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="{{ url('employ-login')}}"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



@endsection