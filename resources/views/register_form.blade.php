{{-- 
<div class="col-lg-3">
    <center>

        <h5 class="mt-3 text-warning">Register your account</h5>
    </center> --}}
    <!-- id="authform" -->
    {{-- <form class="mx-5"  action="{{ route('registersubmit')}}"  method="POST" style="margin-top:20px">
        @csrf
        <div class="mb-3 mt-3">

            <div class="input-container ">
                <i class="fa fa-user icon"></i>
                <input type="text" class="form-control" required id="name" name="name"
                    aria-describedby="emailHelp" style="width:100%" value="{{old('name')}}" placeholder="Name as per PAN" onkeyup="value=value.replace(/[^\a-\z\A-\Z ]/g,'')">

                @error('name')
                   <span class="text-danger">{{ $message }}</span>
                 @enderror
            </div>

        </div>
        <div class="mb-3 mt-3">
            
            <div class="input-container">
                <i class="fa fa-envelope icon"></i>
                <input type="email" class="form-control" required id="email" name="email"
                    aria-describedby="emailHelp" placeholder="Email" value="{{old('email')}}"  style="width:100%">
          

            </div>
        </div>
        <div>
            @error('email')
            <span class="text-danger">{{ $message }}</span>
          @enderror
        </div>
        <div class="mb-3 mt-3">
          
            <div class="input-container">
                <i class="fa fa-key icon"></i>
                <input class="input-field form-control" value="{{old('password')}}"  required type="password"
                    placeholder="Enter the Password" style="width:100%" name="password">

            </div>
            <div>
                @error('password')
                <span class="text-danger">{{ $message }}</span>
              @enderror
            </div>
            <div class="mb-3 mt-3">
    
                <div class="input-container">
                    <i class="fa fa-phone icon"></i>
                    <input type="number" required class="form-control w-100 " id="phone"
                        name="mobile" placeholder="mobile" value="{{old('mobile')}}"  style="width:100%"   onkeyup="if (/\D/g.test(this.value)) this.value = this.value.replace(/\D/g,'')" >
                    <button type="submit"><i class="fa fa-check icon" id=""></i></button>
              

                </div>
                <div>
                    @error('phone')
                    <span class="text-danger">{{ $message }}</span>
                  @enderror
                </div>
            </div>
        </div>

        <div class="mb-3 mt-3">
            <div class="input-container">
                <i class="fa fa-lock icon"></i>
                <input type="text" class="form-control" value="{{old('otp')}}"  name="otp" id="otp"
                    placeholder="Otp" style="width:100%">

            </div>
        </div>
        <div>
            @error('otp')
            <span class="text-danger">{{ $message }}</span>
          @enderror
        </div>


 

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

</div>
@if (Session::has('success'))
<h4 style="color:green">{{Session::get('success')}}</h4>
@endif --}}

<style>
    .center-button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
      width: 20vh;
      margin-left: 15vh;
     
    }
  </style>
<div class="center-button">
<button type="submit" class="btn btn-primary" style="color: white"> <a href="{{ url('client-register')}}"> Client Register Here </a></button>
</div>