
<div class="col-lg-3">
                    <center>
               
                        <h5 class="mt-3 text-warning">Register your account</h5>
                    </center>
                    <!-- id="authform" -->
                    <form class="mx-5"  action="{{ route('registersubmit')}}"  method="POST" style="margin-top:20px">
                        @csrf
                        <!-- <form class="mx-5" style="margin-top:20px"> -->
                        <div class="mb-3 mt-3">
                            <!--<label for="exampleInputEmail1"><font color="white">Name</font></label>-->
                            <!--<input type="text" class="form-control" style="background-color:#203A43;border:1px solid orange;color:white;width:100%"  id="exampleInputEmail1"-->
                            <!--    aria-describedby="emailHelp" placeholder="Enter name">-->

                            <div class="input-container ">
                                <i class="fa fa-user icon"></i>
                                <input type="text" class="form-control" required id="name" name="name"
                                    aria-describedby="emailHelp" style="width:100%" value="{{old('name')}}" placeholder="Name as per PAN" onkeyup="value=value.replace(/[^\a-\z\A-\Z ]/g,'')">
                                <!-- <input class="input-field" type="text" placeholder="as Per PAN" style="width:100%" name="Name as per PAN"> -->
                                @error('name')
                                   <span class="text-danger">{{ $message }}</span>
                                 @enderror
                            </div>

                        </div>
                        <div class="mb-3 mt-3">
                            <!--<label for="exampleInputEmail1"><font color="white">Email address</font></label>-->
                            <!--<input type="email" class="form-control" style="background-color:#203A43;border:1px solid orange;color:white" id="exampleInputEmail1"-->
                            <!--    aria-describedby="emailHelp" placeholder="Enter email">-->
                            <div class="input-container">
                                <i class="fa fa-envelope icon"></i>
                                <input type="email" class="form-control" required id="email" name="email"
                                    aria-describedby="emailHelp" placeholder="Email" value="{{old('email')}}"  style="width:100%">
                                <!-- <input class="input-field" type="text" placeholder="Email" style="width:100%" name="email"> -->
                             
                            </div>
                        </div>
                        <div>
                            @error('email')
                            <span class="text-danger">{{ $message }}</span>
                          @enderror
                        </div>
                        <div class="mb-3 mt-3">
                            <!--<label for="exampleInputPassword1"><font color="white">Mobile number</font></label>-->
                            <!--<input type="number" class="form-control" style="background-color:#203A43;border:1px solid orange;color:white" id="exampleInputPassword1"-->
                            <!--    placeholder="enter number">-->
                            <div class="input-container">
                                <i class="fa fa-key icon"></i>
                                <input class="input-field form-control" value="{{old('password')}}"  required type="password"
                                    placeholder="Password" style="width:100%" name="password">
                                  
                            </div>
                            <div>
                                @error('password')
                                <span class="text-danger">{{ $message }}</span>
                              @enderror
                            </div>
                            <div class="mb-3 mt-3">
                                <!--<label for="exampleInputPassword1"><font color="white">Mobile number</font></label>-->
                                <!--<input type="number" class="form-control" style="background-color:#203A43;border:1px solid orange;color:white" id="exampleInputPassword1"-->
                                <!--    placeholder="enter number">-->
                                <div class="input-container">
                                    <i class="fa fa-phone icon"></i>
                                    <input type="number" required class="form-control w-100 " id="phone"
                                        name="phone" placeholder="Mobile" value="{{old('phone')}}"  style="width:100%"   onkeyup="if (/\D/g.test(this.value)) this.value = this.value.replace(/\D/g,'')" >
                                    <button type="submit"><i class="fa fa-check icon" id=""></i></button>
                                    {{-- <input type="submit" class="btn btn-primary" value="verify"> --}}
                                    <!-- <input class="input-field" type="number" placeholder="Mobile" style="width:100%" name="num"> -->
            
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
                                <!-- <input class="input-field" type="number" placeholder="Otp" name="otp" style="width:100%"> -->
                              
                            </div>
                        </div>
                        <div>
                            @error('otp')
                            <span class="text-danger">{{ $message }}</span>
                          @enderror
                        </div>


                        <!--                      <div class="mb-3 mt-3">-->
                        <!--                          <div class="input-container">-->
                        <!--  <i class="fa fa-lock icon"></i>-->
                        <!--  <input class="input-field" type="number" placeholder="Otp" name="otp" style="width:100%">-->
                        <!--</div>-->
                        <!--                      </div>-->

                        <button type="submit" class="btn btn-primary">Submit</button>
                        <!-- <button type="button" id="verifyotp" class="btn btn-primary">Submit</button> -->
                    </form>
             
                </div>
                @if (Session::has('success'))
               <h4 style="color:green">{{Session::get('success')}}</h4>
                @endif
          