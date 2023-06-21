<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MutualController;
use App\Models\RegisterModel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/run-migration',function(){

    Artisan::call('migrate');

    dd('ok');
    
});
Route::get('contactUs',[AdminController::class,'contactUs']);

Route::get('logout',[AdminController::class,'logout']);

Route::get('/clear-all',function(){
    
    Artisan::call('optimize');
    dd('optimized');
});

// Route::get('/trial', function () {return view('trail');})->name('trial');

Route::get('/', function () {return view('index');})->name('index');
Route::post('/',[AdminController::class,'registersubmit'])->name('registersubmit');
//employ login
Route::get('/employ-login',function(){
    return view('employ.employlogin');
});
Route::post('/employ-login',[AdminController::class,'employlogin'])->name('employlogin');

//employ register
Route::get('employ-register',function(){
    return view('employ.employregister');
});
Route::group(['middleware'=> ['web','']],function(){
});
Route::get('employ-dashboard',[AdminController::class,'employdashboard']);
Route::post('employ-register',[AdminController::class,'employregister'])->name('employregister');

//client 
Route::post('client_login',[AdminController::class,'client_login'])->name('client_login');
Route::get('/clentdashboard',[AdminController::class,'clentdashboard']);
Route::get('/',[AdminController::class,'loadclient']);

//distributor 
Route::get('/distributor-login',[AdminController::class,'distributor_login']);
Route::post('distributor-login',[AdminController::class,'distributorlogin'])->name('distributorlogin');
Route::get('/distributor-register',[AdminController::class,'distributor_register']);
Route::post('/distributor-register',[AdminController::class,'distributorregister'])->name('distributorregister');


Route::middleware('checkDistributor')->group(function () {
    // Routes that require the middleware
});

Route::group(['middleware'=> ['web','checkDistributor']],function(){
    Route::get('/distributordashboard',[AdminController::class,'distributordashboard']);
});


// Route::get('/login', [MutualController::class, 'login'])->name('login');

// Route::post('/registersubmit', [MutualController::class, 'registersubmit']);

Route::post('/loginsubmit', [MutualController::class, 'loginsubmit']);

Route::get('/logout', [MutualController::class, 'logout']);

Route::post('/verifyotp', [MutualController::class, 'verifyotp']);

Route::post('/authsubmit', [AuthController::class, 'authsubmit']);

Route::post('/authotp', [AuthController::class, 'authotp']);

Route::get('/register/{auth_id}', function ($auth_id) { return view('register',['auth_id' => $auth_id]);})->name('register');

Route::post('/regdatastore', [AuthController::class, 'regdatastore'])->name('regdatastore');

Route::post('/regdatato', [AuthController::class, 'regdatato'])->name('regdatato');

Route::get('/verifypart2/{id}', function ($id) { $data = RegisterModel::find($id); return view('verifypart2', ['data'=>$data]);})->name('verifypart2');

Route::get('afterregister/thank-you',[AuthController::class, 'afterregister']);


  Route::get('/reportPage',function(){
        return view('reportPage');
    });
    
    Route::get('/pms', function () {
        return view('pms');
    });
    
    Route::get('/insurance', function () {
        return view('insurance');
    });
    
 Route::get('/family',function(){
        return view('family');
    })->name('family');
    Route::get('/creditcards', function () {
        return view('creditcards');
    });
    
    Route::get('/bonds', function () {
        return view('bonds');
    });
    
    Route::get('/fd', function () {
        return view('fd');
    });
    
    Route::get('/preipo', function () {
        return view('preipo');
    });

    Route::get('/loan', function () {
        return view('loan');
    });
    Route::get('/sipcalculator', function () {
        return view('sipcalculator');
    });

    Route::get('/swp', function () {
        return view('swp');
    });

    Route::get('/one-time-invest', function () {
        return view('one_time_invest');
    });

    Route::get('/aboutus', function () {
        return view('aboutus');
    });


    Route::get('/service', function () {
        return view('service');
    });

    Route::get('/blog', function () {
        return view('blog');
    });



// =====================================================================================
Route::middleware(['auth','verify'])->group(function () {


    Route::get('/test', function () {
        dd("ok");
    });
    Route::get('/home', function () {
        return view('home');
    });
    
   
    Route::get('/insurancePage',function(){
        return view('insurancePage');
    });



   

    

    Route::get('/homeloan', function () {
        return view('homeloan');
    });


    Route::get('/searchCompany', function () {
        return view('searchcompany');
    });



 
    Route::get('/sbi', function () {
        return view('sbi');
    });
    Route::get('/hdfc', function () {
        return view('hdfc');
    });
    Route::get('/icici', function () {
        return view('icici');
    });
    Route::get('/standardcharted', function () {
        return view('standardcharted');
    });

    
});
