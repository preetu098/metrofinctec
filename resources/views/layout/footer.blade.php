<div class="copyright">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">  </div>
            <div class="col-lg-6">
                <p class="text-custom-white no-margin">© Helois - 2020 | All Right Reserved. <a href=""
                    target="_blank" class="text-custom-white"></a>
                </p>
            </div>
        </div>
    </div>
</div>

<!-- <script type="text/javascript" src="https://www.tatacapital.com/n7-base.min.js"></script> -->
<script src="{{ asset('js/main.js') }}"></script>

<script src="{{ 'assets1/js/jquery.min.js' }}"></script>
<!-- Popper -->
<script src="{{ 'assets1/js/popper.min.js' }}"></script>
<!-- Bootstrap -->
<script src="{{ 'assets1/js/bootstrap.min.js' }}"></script>
<!-- Range Slider -->
<script src="{{ 'assets1/js/ion.rangeSlider.min.js' }}"></script>
<!-- Slick Slider -->
<script src="{{ 'assets1/js/slick.min.js' }}"></script>
<!-- Datepicker -->
<script src="{{ 'assets1/js/datepicker.js' }}"></script>
<script src="{{ 'assets1/js/datepicker.en.js' }}"></script>
<!-- Nice Select -->
<script src="{{ 'assets1/js/jquery.nice-select.js' }}"></script>
<!-- Steps -->
<script src="{{ 'assets1/js/jquery-steps.js' }}"></script>
<!-- Nice Select -->
<script src="{{ 'assets1/js/particles.js' }}"></script>
<!-- Magnific Popup -->
<script src="{{ 'assets1/js/jquery.magnific-popup.min.js' }}"></script>
<!-- Google Map -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnd9JwZvXty-1gHZihMoFhJtCXmHfeRQg"></script>
<!-- Isotope Gallery -->
<script src="{{ 'assets1/js/isotope.pkgd.min.js' }}"></script>
<!-- Wow js -->
<script src="{{ 'assets1/js/wow.min.js' }}"></script>
<!-- Custom Js -->
<script src="{{ 'assets1/js/custom.js' }}"></script>
@yield('footer')
<script>
    $(document).ready(function() {

        // $(document).click('#loginsubmit')
        //  $(document).click('#loginsubmit', function(e) {
        //     // $('#loginexampleModal').hide();
        //     data-dismiss="modal"

        //  });

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $('#modalform').submit(function(e) {
            e.preventDefault();

            var name = $('#name').val();
            var email = $('#email').val();
            var password = $('#password').val();
            var phone = $('#phone').val();

            var form = new FormData();
            form.append('name', name);
            form.append('email', email);
            form.append('phone', phone);
            form.append('password', password);

            $.ajax({
                url: "{{ url('registersubmit') }}",
                type: "POST",
                contentType: false,
                processData: false,
                data: form,

                dataType: 'json',
                success: function(data) {
                    if (data.message == "success") {

                        $('#otpModal').modal('show');
                        $('#exampleModal').modal('hide');

                    }

                },

            });
        });

        $('#loginmodalform').submit(function(e) {
            e.preventDefault();

            var email = $('#email').val();
            var password = $('#pwd').val();

            var form = new FormData();
            form.append('email', email);
            form.append('password', password);
            $.ajax({
                url: "{{ url('loginsubmit') }}",
                type: "POST",
                contentType: false,
                processData: false,
                data: form,
                dataType: 'json',
                success: function(data) {
               
                    if(data.type == "success"){
                        $('#sucessMessage').modal('show');
                        $('#loginformpopupopen').hide();
                    }
                    else{
                    alert("Incurrect Password");                  
                    }

                },

            });
        });

        $('#otpModal').submit(function(e) {
            e.preventDefault();

            var otp = $('#otp').val();
            var form = new FormData();

            form.append('otp', otp);

            // alert(form);
            $.ajax({
                url: "{{ url('verifyotp') }}",
                type: "POST",
                contentType: false,
                processData: false,
                data: form,

                dataType: 'json',
                success: function(data) {
                    if (data.type == "success") {
                        alert(data.message);
                        // swal("Good job!", "You clicked the button!", "success");
                        // $('#otpModal').modal('show');
                        // $('#exampleModal').modal('hide');

                    } else {
                        alert("OTP Incorrect");

                    }

                },

            });
        });
    });
</script>
