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
              <h2 class="text-uppercase text-center mb-5">Client Register</h2>

              <form action="{{route('registersubmit')}}" method="POST">
                 @csrf
                <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example1cg">Name</label>
                  <input type="text" id="" name="name" placeholder="Enter Name" value="{{old('name')}}" class="form-control form-control-lg" />
                  @error('name')
                  <span class="text-danger">{{ $message }}</span>
                @enderror
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3cg">Email</label>
                  <input type="email" name="email" value="{{old('email')}}" placeholder="Enter Email" id="form3Example3cg" class="form-control form-control-lg" />
                  @error('email')
                  <span class="text-danger">{{ $message }}</span>
                @enderror
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3cg">Mobile Number</label>
                    <input type="phone" id="" name="mobile" placeholder="Enter Mobile Number" value="{{old('mobile')}}" class="form-control form-control-lg" />
                    @error('mobile')
                    <span class="text-danger">{{ $message }}</span>
                  @enderror
                  </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4cg">Password</label>
                  <input type="password" id=""  name="password" name='password' placeholder="Enter password" value="{{old('password')}}" class="form-control form-control-lg" />
                  @error('password')
                  <span class="text-danger">{{ $message }}</span>
                @enderror
                </div>

                {{-- <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4cdg">Confirm password</label>
                  <input type="password" id=""  class="form-control form-control-lg" />
                </div> --}}
                <div class="mb-3 mt-3">
                    <div class="input-container">
                        <label for="">Otp</label>
                        <input type="text" class="form-control" value="{{old('otp')}}"  name="otp" 
                            placeholder="Enter Otp" style="width:100%">
                        <!-- <input class="input-field" type="number" placeholder="Otp" name="otp" style="width:100%"> -->
        
                    </div>
                </div>
                <div>
                    @error('otp')
                    <span class="text-danger">{{ $message }}</span>
                  @enderror
                </div>


                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

               
              </form>
              @if (Session::has('error'))
              <p style="color:red">{{Session::get('error')}}</p>
              @endif
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

@endsection