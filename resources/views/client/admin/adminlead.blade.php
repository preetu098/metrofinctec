<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Modern Tech</title>
  <!-- base:css -->
  <link rel="stylesheet" href="vendors/mdi/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="vendors/css/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- plugin css for this page -->
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="css1/style.css">
  <link rel="stylesheet" type="text/css" href="css1/style1.css">
  <!-- endinject -->
  <link rel="shortcut icon" href="images1/favicon.png" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.24/sweetalert2.min.js" integrity="sha512-dnyteqeKASHjUgi20CTeO5cfd1JwMTNV2ZS+tx5rlPCdWgnd6UKYNLM2EarSU9E6J3lMtMhUkcA6g8f3cAjoQQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.24/sweetalert2.all.js" integrity="sha512-pWCMlLqWPfRQz669NdwWZL243IK+6w+Vkt6pjiyR4TmVMy8isXg8vAvZW0UMZGIJJyoXChig3vMGL+2Xzr0INw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.24/sweetalert2.all.min.js" integrity="sha512-Ty04j+bj8CRJsrPevkfVd05iBcD7Bx1mcLaDG4lBzDSd6aq2xmIHlCYQ31Ejr+JYBPQDjuiwS/NYDKYg5N7XKQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.24/sweetalert2.css" integrity="sha512-gAU9FxrcktP/m5fRrn5P4FmIutdMP/kpVKsPerqffFy9gKQkR4cxrcrK3PtgTAgFiiN7b5+fwRbpCcO1F5cPew==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.24/sweetalert2.js" integrity="sha512-3V3OZLLl4TTqNCwwo5Kkb0KcgAF77CV4peK98VFav66QBKDgi7K60lIgmN5/8ZWctep6PgNeGA3p/HHaoJShww==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.24/sweetalert2.min.css" integrity="sha512-Yn5Z4XxNnXXE8Y+h/H1fwG/2qax2MxG9GeUOWL6CYDCSp4rTFwUpOZ1PS6JOuZaPBawASndfrlWYx8RGKgILhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
  <div class="container-scroller d-flex">

    <!-- partial:./partials/_sidebar.html -->
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item sidebar-category">
          <p>Helios Fintec</p>
          <span></span>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admindashboard">
            <i class="mdi mdi-view-quilt menu-icon"></i>
            <span class="menu-title">Dashboard</span>

          </a>
        </li>
        <li class="nav-item sidebar-category">

          <span></span>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/addemploye">
           
            <i class="mdi mdi-account-outline"></i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            <span class="menu-title">Add Employee</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/addclient">
            <i class="mdi mdi-account-multiple"></i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            <span class="menu-title">Add Client</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/adminlead">
            <i class="mdi mdi-account-multiple"></i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            <span class="menu-title">Add Lead</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
            <i class="mdi mdi-content-save-settings-outline"></i>
            <span class="menu-title">Investment</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="ui-basic">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"> <a class="nav-link" href="">Mutual Funds</a></li>
              <li class="nav-item"> <a class="nav-link" href="">Pre IPO</a></li>

              <li class="nav-item"> <a class="nav-link" href="">PMS & AIF</a></li>
              <li class="nav-item"> <a class="nav-link" href="">Bonds</a></li>
              <li class="nav-item"> <a class="nav-link" href="l">Fixed Deposit</a></li>
              <li class="nav-item"> <a class="nav-link" href="">Equity</a></li>

            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="mdi mdi-view-headline menu-icon"></i>
            <span class="menu-title">Loans</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="mdi mdi-chart-pie menu-icon"></i>
            <span class="menu-title">Insurance</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="mdi mdi-emoticon menu-icon"></i>
            <span class="menu-title">Credit Cards</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="mdi mdi-emoticon menu-icon"></i>
            <span class="menu-title">Reports</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="mdi mdi-emoticon menu-icon"></i>
            <span class="menu-title">File Your Income Tax</span>
          </a>
        </li>




      </ul>
    </nav>
    <!-- partial -->

   
    <div class="container-fluid page-body-wrapper">
      <!-- partial:./partials/_navbar.html -->
      <nav class="navbar col-lg-12 col-12 px-0 py-0 py-lg-4 d-flex flex-row">
        <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span class="mdi mdi-menu"></span>
          </button>


          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item">
              <h4 class="mb-0 font-weight-bold d-none d-xl-block">Mar 12, 2019 - Apr 10, 2019</h4>
            </li>
            <li class="nav-item dropdown me-1">
              <a class="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                id="messageDropdown" href="#" data-bs-toggle="dropdown">
                <i class="mdi mdi-calendar mx-0"></i>
                <span class="count bg-info">2</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="messageDropdown">
                <p class="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="images/faces/face4.jpg" alt="image" class="profile-pic">
                  </div>
                  <div class="preview-item-content flex-grow">
                    <h6 class="preview-subject ellipsis font-weight-normal">user1
                    </h6>
                    <p class="font-weight-light small-text text-muted mb-0">
                    user1
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="images/faces/face2.jpg" alt="image" class="profile-pic">
                  </div>
                  <div class="preview-item-content flex-grow">
                    <h6 class="preview-subject ellipsis font-weight-normal">User2
                    </h6>
                    <p class="font-weight-light small-text text-muted mb-0">
                     User2
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="images/faces/face3.jpg" alt="image" class="profile-pic">
                  </div>
                  <div class="preview-item-content flex-grow">
                    <h6 class="preview-subject ellipsis font-weight-normal"> User3
                    </h6>
                    <p class="font-weight-light small-text text-muted mb-0">
                      User3
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li class="nav-item dropdown me-2">
              <a class="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"
                id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                <i class="mdi mdi-email-open mx-0"></i>
                <span class="count bg-danger">1</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="notificationDropdown">
                <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-success">
                      <i class="mdi mdi-information mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal">Notifications1</h6>
                    <p class="font-weight-light small-text mb-0 text-muted">
                      Notifications2
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-warning">
                      <i class="mdi mdi-settings mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal">Settings</h6>
                    <p class="font-weight-light small-text mb-0 text-muted">
                      Private message
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-info">
                      <i class="mdi mdi-account-box mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal">New user registration</h6>
                    <p class="font-weight-light small-text mb-0 text-muted">
                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
            data-toggle="offcanvas">
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
        <div class="navbar-menu-wrapper navbar-search-wrapper d-none d-lg-flex align-items-center"
          style="border-radius: 20px">
          <ul class="navbar-nav mr-lg-2">
            <li class="nav-item nav-search d-none d-lg-block">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search Here..." aria-label="search"
                  aria-describedby="search">
              </div>
            </li>
          </ul>
          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item nav-profile dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
                <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" alt="profile" />
                <span class="nav-profile-name">Admin</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                <a class="dropdown-item">
                  <i class="mdi mdi-settings text-primary"></i>
                  Settings
                </a>
                <a class="dropdown-item">
                  <i class="mdi mdi-logout text-primary"></i>
                  Logout
                </a>
              </div>
            </li>


          </ul>
        </div>
      </nav>
      <script>
        function adduser()
        {
            Swal.fire({
                title:'Add Lead',
                html:`<html>
                    <form>
                        <input type="text" name="name" placeholder="enter name" class="swal2-input"/>
                        <input type="number" name="number" placeholder="enter Mobile" class="swal2-input"/> 
                        <input type="email" name="email" placeholder="enter Email" class="swal2-input"/>    
                      
                        <select class="swal2-input">
                            <option>Select Product</option>
                            <option>Mutual Funds</option>
                            <option>Pre IPO</option>
                            <option>PMS & AIF</option>
                            <option>BONDS</option> 
                            <option>FIXED DEPOSIT</option>
                            <option>Term Insurance</option>
                            <option>General Insurance</option>
                            <option>Personal Loan</option>
                            <option>Home Loan</option>
                            <option>Business Loan</option>
                        </select>
                        <input type="number" name="number" placeholder="enter Investment Amount" class="swal2-input"/> 
                        <select class="swal2-input">
                            <option>Lead Status</option>
                            <option>Hot</option>
                            <option>Cold</option>
                            <option>Warm</option>
                            <option>Open</option>
                            <option>Closed</option>
                            <option>Disqualified</option>
                        </select>
                    </form>
                </html>`,
                confirmButtonText:'Add Lead'
            })
        }
        function userdelete()
        {
            Swal.fire('Delete Employee succefully')
        }
        function showuser()
        {
                document.getElementById('leads').style.display='block';
                document.getElementById('comments').style.display='none';
        }
        function showcomments()
        {
            document.getElementById('leads').style.display='none';
                document.getElementById('comments').style.display='block';
        }
        function addcomment()
        {
            Swal.fire('Comment Added succefully') 
        }
        function showcomment()
        {
            Swal.fire('please Wait is in Loading. . . . . . ')
        }
      </script>
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
         <div class="card">
            <div class="row mt-3">
               <div class="col-md-4">
                <button class="btn btn-info ms-5" onclick="showuser()">Total Leads</button>
               </div>
               <div class="col-md-4">
                <button class="btn btn-info" onclick="adduser()">Add Lead</button>
               </div>
               <div class="col-md-4">
                <button class="btn btn-info" onclick="showcomments()">Comments</button>
               </div>
            </div>
            <style>
                #comments
                {
                    display: none;
                }
            </style>
            <div class="row">
                <div class="col-md-12">
                    <div id="leads">
                       <h5 class="mt-3 ms-3">Leads</h5>
                            <div class="table-responsive">
                                <table class="table">
                                    <tr>
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th>Email</th>
                                        <th>Product</th>
                                        <th>Investment amount</th>
                                        <th>Lead Status</th>
                                    </tr>
                                    <tr>
                                        <td>Pratibha</td>
                                        <td>98797</td>
                                        <td>preetu098@gmail.com</td>
                                        <td>Mutual Fund</td>
                                        <td>17000</td>
                                        <td>warm</td>
                                        <td><button class="btn btn-success">Edit</button><button class="btn btn-danger">Delete</button></td>
                                    </tr>
                                </table>
                            </div>
                    </div>
                    <div id="comments">
                        <table class="table">
                            <tr>
                                <td colspan="2">
                                    <input type="text" class="form-control" placeholder="user name">
                                </td>
                            </tr>
                            <tr>
                                <td><p>Add Follow Date</p></td>
                                <td>
                                 <input type="date" class="form-control me-5"  name="dt">
                                </td>
                                
                            </tr>
                            <tr>
                                <td><p>Add Follow Time</p></td>
                                <td>
                                 <input type="time" class="form-control me-5"  name="time">
                                </td>
                                
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <textarea name="" id="" cols="30" rows="10" class="form-control"placeholder="enter comment"></textarea>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" class="btn btn-info"  onclick="addcomment()" value="Add Comment">
                                    <input type="submit" class="btn btn-info"  onclick="showcomment()" value="Show Comment">
                                </td>
                            </tr>
                        </table>
                    </div>
                  </div>
            </div>
         </div>
       </div>
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->

  <!-- base:js -->
  <script src="vendors/js/vendor.bundle.base.js"></script>
  <!-- endinject -->
  <!-- Plugin js for this page-->
  <script src="vendors/chart.js/Chart.min.js"></script>
  <script src="js1/jquery.cookie.js" type="text/javascript"></script>
  <!-- End plugin js for this page-->
  <!-- inject:js -->
  <script src="js1/off-canvas.js"></script>
  <script src="js1/hoverable-collapse.js"></script>
  <script src="js1/template.js"></script>
  <!-- endinject -->
  <!-- plugin js for this page -->
  <script src="js1/jquery.cookie.js" type="text/javascript"></script>
  <!-- End plugin js for this page -->
  <!-- Custom js for this page-->
  <script src="js1/dashboard.js"></script>
  <!-- End custom js for this page-->
</body>

</html>