@include('layout.header')
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="author" content="Sahil Kumar">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Contact Form Bootstrap</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
</head>

<body class="bg-dark">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4 mt-5 bg-light rounded">
        <h1 class="text-center font-weight-bold text-primary">Contact Us</h1>
        <hr class="bg-light">
        <h5 class="text-center text-success"></h5>
        <form action="" method="post" id="form-box" class="p-2">
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div>
            @foreach ($contact as $contactus )
                <label class="form-control"> <?php echo $contactus->name  ?></label>
           
            
        </div>
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
            </div>
            <label class="form-control"> <?php echo $contactus->email  ?></label>
            {{-- <input type="email" name="email" class="form-control" placeholder="Enter your email" required> --}}
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-at"></i></span>
            </div>
            <label class="form-control" > <?php echo $contactus->phone  ?></label>
            {{-- <input type="text" name="subject" class="form-control" placeholder="Enter subject" required> --}}
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-comment-alt"></i></span>
            </div>
            <label class="form-control" > <?php echo $contactus->designation  ?></label>
            {{-- <textarea name="msg" id="msg" class="form-control" placeholder='' cols="30" rows="4" required></textarea> --}}
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-comment-alt"></i></span>
            </div>
            {{-- <textarea name="msg" id="msg" class="form-control" placeholder='' cols="30" rows="4" required></textarea> --}}
            <label  class="form-control"> <?php echo $contactus->address  ?></label>
          </div>
       
        @endforeach
        </form>
    </div>
</div>
</div>
</body>
</html>
@include('layout.logofooter')
@include('layout.mutualfundfooter')
@include('layout.footer')