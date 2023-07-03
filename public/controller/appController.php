<?php
class AppController
{


  /**
   * app title
   *@param $title
   * @return mixed 
   */
  public function apptitle($title)
  {

    $app = new AppModel();
    $app = $app->appsettings();
    // session_start();

    echo '<!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
            
          <meta name="viewport" content="width=device-width,initial-scale=1.0">
          <title>' . $title . ' - ' . $app['appname'] . '</title>
          <meta name="description" content="' . $app['appname'] . '">
          <meta name="author" content="pixelcave">
         
          <meta property="og:title" content="' . $app['appname'] . '">
          <meta property="og:site_name" content="Codebase">
          <meta property="og:description" content="' . $app['appname'] . '">
          <meta property="og:type" content="website">
          <meta property="og:url" content="">
          <meta property="og:image" content="">
          <link rel="shortcut icon" href="yolkassets/upload/' . $app['favicon'] . '">
          
        <link rel="stylesheet" href="public/view/assets/js/plugins/datatables-bs5/css/dataTables.bootstrap5.min.css">
        <link rel="stylesheet" href="public/view/assets/js/plugins/datatables-buttons-bs5/css/buttons.bootstrap5.min.css">
        <link rel="stylesheet" href="public/view/assets/js/plugins/datatables-responsive-bs5/css/responsive.bootstrap5.min.css">
          <link rel="stylesheet" id="css-main" href="public/view/assets/css/codebase.min-5.5.css">
          <link rel="stylesheet" id="css-main" href="public/view/assets/css/izimodal/izimodal.min.css">
          <link rel="stylesheet" href="public/view/assets/js/plugins/magnific-popup/magnific-popup.css">
            
        </head>';
  }
  public function appfooter()
  {


    $app = new AppModel();
    $app = $app->appsettings();


    echo '    <footer id="page-footer">
        <div class="content py-3">
          <div class="row fs-sm">
            <div class="col-sm-6 order-sm-2 py-1 text-center text-sm-end">
              Crafted with <i class="fa fa-heart text-danger"></i> by
              <a class="fw-semibold" href="https://github.com/dollarstir/" target="_blank">Dollarsoft</a>
            </div>
            <div class="col-sm-6 order-sm-1 py-1 text-center text-sm-start">
              <a class="fw-semibold" href="" target="_blank">' . $app['appname'] . '</a>
              &copy; <span data-toggle="year-copy"></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <script src="public/view/assets/js/codebase.app.min-5.5.js"></script>
    <script src="public/view/assets/js/lib/jquery.min.js"></script>
    <script src="public/view/assets/js/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="public/view/assets/js/plugins/datatables-bs5/js/dataTables.bootstrap5.min.js"></script>
<script src="public/view/assets/js/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="public/view/assets/js/plugins/datatables-responsive-bs5/js/responsive.bootstrap5.min.js"></script>
<script src="public/view/assets/js/plugins/datatables-buttons/dataTables.buttons.min.js"></script>
<script src="public/view/assets/js/plugins/datatables-buttons-bs5/js/buttons.bootstrap5.min.js"></script>
<script src="public/view/assets/js/plugins/datatables-buttons-jszip/jszip.min.js"></script>
<script src="public/view/assets/js/plugins/datatables-buttons-pdfmake/pdfmake.min.js"></script>
<script src="public/view/assets/js/plugins/datatables-buttons-pdfmake/vfs_fonts.js"></script>
<script src="public/view/assets/js/plugins/datatables-buttons/buttons.print.min.js"></script>
<script src="public/view/assets/js/plugins/datatables-buttons/buttons.html5.min.js"></script>
<script src="public/view/assets/js/pages/be_tables_datatables.min.js"></script>
<script src="public/view/assets/js/plugins/izimodal/izimodal.min.js"></script>



<script src="public/view/assets/js/plugins/magnific-popup/jquery.magnific-popup.min.js"></script>
<script>Codebase.helpersOnLoad(["jq-magnific-popup"]);</script>

    <script src="public/view/assets/js/plugins/chart.js/chart.umd.js"></script>
    <script src="public/view/assets/js/pages/be_pages_dashboard.min.js"></script>
    <script src="processor/processor.js"></script>
    <script src="public/view/assets/js/pages/be_ui_progress.min.js"></script>

    <script src="public/view/assets/js/plugins/bootstrap-notify/bootstrap-notify.min.js"></script>
<script>Codebase.helpersOnLoad(["jq-notify"]);</script>
  </body>
  
  </html>';
  }



  /**
   * app Sidebar
   *
   * @return mixed 
   * 
   */


  public function sidebar()
  {
    $app = new appModel();
    $app = $app->appsettings();
    $user  = new usercontroller();
    
    mainchecker('tuceeadmin','login');
    $user = $user->userinfo();
    


    echo '<nav id="sidebar">
        <div class="sidebar-content">
          <div class="content-header justify-content-lg-center">
            <div>
              <span class="smini-visible fw-bold tracking-wide fs-lg">
                c<span class="text-primary">b</span>
              </span>
              <a class="link-fx fw-bold tracking-wide mx-auto" href="dashboard">
                <span class="smini-hidden">
                  <i class="fa fa-fire text-warning"></i>
                 <span class="fs-4 text-warning">' . $app['appname'] . '</span>
                </span>
              </a>
            </div>
            <div>
              <button type="button" class="btn btn-sm btn-alt-danger d-lg-none" data-toggle="layout" data-action="sidebar_close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="js-sidebar-scroll">
            <div class="content-side content-side-user px-0 py-0">
              <div class="smini-visible-block animated fadeIn px-3">
                <img class="img-avatar img-avatar32" src="yolkassets/upload/' . $user['picture'] . '" alt="" />
              </div>
              <div class="smini-hidden text-center mx-auto">
                <a class="img-link" href="be_pages_generic_profile.html">
                  <img class="img-avatar" src="yolkassets/upload/' . $user['picture'] . '" alt="" />
                </a>
                <ul class="list-inline mt-3 mb-0">
                  <li class="list-inline-item">
                    <a class="link-fx text-dual fs-sm fw-semibold text-uppercase" href="be_pages_generic_profile.html">' . $user['name'] . '</a>
                  </li>
                  <li class="list-inline-item">
                    <a class="link-fx text-dual" data-toggle="layout" data-action="dark_mode_toggle" href="javascript:void(0)">
                      <i class="fa fa-burn"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="link-fx text-dual" href="signout">
                      <i class="fa fa-sign-out-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="content-side content-side-full">
              <ul class="nav-main">
                <li class="nav-main-item">
                  <a class="nav-main-link " href="dashboard">
                    <i class="nav-main-link-icon fa fa-house-user"></i>
                    <span class="nav-main-link-name">Dashboard</span>
                  </a>
                </li>

                <li class="nav-main-item">
                  <a class="nav-main-link" href="slides">
                    <i class="nav-main-link-icon fa fa-image"></i>
                    <span class="nav-main-link-name">Home Sliders</span>
                  </a>
                </li>


                <li class="nav-main-item">
                  <a class="nav-main-link" href="announcements">
                    <i class="nav-main-link-icon fa fa-envelope"></i>
                    <span class="nav-main-link-name">Anouncements</span>
                  </a>
                </li>

                <li class="nav-main-item">
                  <a class="nav-main-link" href="staff">
                    <i class="nav-main-link-icon fa fa-users"></i>
                    <span class="nav-main-link-name">Staff Members</span>
                  </a>
                </li>



                <li class="nav-main-item">
                  <a class="nav-main-link" href="about">
                    <i class="nav-main-link-icon fa fa-info"></i>
                    <span class="nav-main-link-name">About Page</span>
                  </a>
                </li>

               

                <li class="nav-main-item">
                    <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-cog"></i>
                    <span class="nav-main-link-name">Settings</span>
                    </a>
                    <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                    <a class="nav-main-link" href="app">
                    <span class="nav-main-link-name">App settings</span>
                    </a>
                    </li>
                    <li class="nav-main-item">
                    <a class="nav-main-link" href="profile">
                    <span class="nav-main-link-name">Profile settings</span>
                    </a>
                    </li>
                    
                    </ul>
                </li>
                
                
              </ul>
            </div>
          </div>
        </div>
      </nav>';
  }



  // App topbar

  public function appTopbar()
  {

    echo '<header id="page-header">
        <div class="content-header">
          <div class="space-x-1">
            <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="sidebar_toggle">
              <i class="fa fa-fw fa-bars"></i>
            </button>
            <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="header_search_on">
              <i class="fa fa-fw fa-search"></i>
            </button>
            <div class="dropdown d-inline-block">
              <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-themes-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-fw fa-wrench"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-lg p-0" aria-labelledby="page-header-themes-dropdown">
                <div class="p-3 bg-body-light rounded-top">
                  <h5 class="h6 text-center mb-0">Color Themes</h5>
                </div>
                <div class="p-3">
                  <div class="row g-0 text-center">
                    <div class="col-2">
                      <a class="text-default" data-toggle="theme" data-theme="default" href="javascript:void(0)">
                        <i class="fa fa-2x fa-circle"></i>
                      </a>
                    </div>
                    <div class="col-2">
                      <a class="text-elegance" data-toggle="theme" data-theme="assets/css/themes/elegance.min-5.5.css" href="javascript:void(0)">
                        <i class="fa fa-2x fa-circle"></i>
                      </a>
                    </div>
                    <div class="col-2">
                      <a class="text-pulse" data-toggle="theme" data-theme="assets/css/themes/pulse.min-5.5.css" href="javascript:void(0)">
                        <i class="fa fa-2x fa-circle"></i>
                      </a>
                    </div>
                    <div class="col-2">
                      <a class="text-flat" data-toggle="theme" data-theme="assets/css/themes/flat.min-5.5.css" href="javascript:void(0)">
                        <i class="fa fa-2x fa-circle"></i>
                      </a>
                    </div>
                    <div class="col-2">
                      <a class="text-corporate" data-toggle="theme" data-theme="assets/css/themes/corporate.min-5.5.css" href="javascript:void(0)">
                        <i class="fa fa-2x fa-circle"></i>
                      </a>
                    </div>
                    <div class="col-2">
                      <a class="text-earth" data-toggle="theme" data-theme="assets/css/themes/earth.min-5.5.css" href="javascript:void(0)">
                        <i class="fa fa-2x fa-circle"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-3 bg-body-light rounded-bottom">
                  <div class="row g-sm text-center">
                    <div class="col-6">
                      <a class="dropdown-item fs-sm fw-medium mb-0" href="be_layout_api.html">
                        <i class="fa fa-flask opacity-50 me-1"></i> Layout API
                      </a>
                    </div>
                    <div class="col-6">
                      <a class="dropdown-item fs-sm fw-medium mb-0" href="be_ui_color_themes.html">
                        <i class="fa fa-paint-brush opacity-50 me-1"></i> Themes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="space-x-1">
            <div class="dropdown d-inline-block">
              <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-user d-sm-none"></i>
                <span class="d-none d-sm-inline-block fw-semibold">J. Smith</span>
                <i class="fa fa-angle-down opacity-50 ms-1"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0" aria-labelledby="page-header-user-dropdown">
                <div class="px-2 py-3 bg-body-light rounded-top">
                  <h5 class="h6 text-center mb-0">John Smith</h5>
                </div>
                <div class="p-2">
                  <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="profile">
                    <span>Profile</span>
                    <i class="fa fa-fw fa-user opacity-25"></i>
                  </a>
                 
                 
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="app">
                    <span>Settings</span>
                    <i class="fa fa-fw fa-wrench opacity-25"></i>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1 btnsignout" href="javascript:void(0)" >
                    <span>Sign Out</span>
                    <i class="fa fa-fw fa-sign-out-alt opacity-25"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="dropdown d-inline-block">
              <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-notifications" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-flag"></i>
                <span class="text-primary">&bull;</span>
              </button>
              <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications">
                <div class="px-2 py-3 bg-body-light rounded-top">
                  <h5 class="h6 text-center mb-0">Notifications</h5>
                </div>
                <ul class="nav-items my-2 fs-sm">
                  <li>
                    <a class="text-dark d-flex py-2" href="javascript:void(0)">
                      <div class="flex-shrink-0 me-2 ms-3">
                        <i class="fa fa-fw fa-check text-success"></i>
                      </div>
                      <div class="flex-grow-1 pe-2">
                        <p class="fw-medium mb-1">
                          You’ve upgraded to a VIP account successfully!
                        </p>
                        <div class="text-muted">15 min ago</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="text-dark d-flex py-2" href="javascript:void(0)">
                      <div class="flex-shrink-0 me-2 ms-3">
                        <i class="fa fa-fw fa-exclamation-triangle text-warning"></i>
                      </div>
                      <div class="flex-grow-1 pe-2">
                        <p class="fw-medium mb-1">
                          Please check your payment info since we can’t validate
                          them!
                        </p>
                        <div class="text-muted">50 min ago</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="text-dark d-flex py-2" href="javascript:void(0)">
                      <div class="flex-shrink-0 me-2 ms-3">
                        <i class="fa fa-fw fa-times text-danger"></i>
                      </div>
                      <div class="flex-grow-1 pe-2">
                        <p class="fw-medium mb-1">
                          Web server stopped responding and it was automatically
                          restarted!
                        </p>
                        <div class="text-muted">4 hours ago</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="text-dark d-flex py-2" href="javascript:void(0)">
                      <div class="flex-shrink-0 me-2 ms-3">
                        <i class="fa fa-fw fa-exclamation-triangle text-warning"></i>
                      </div>
                      <div class="flex-grow-1 pe-2">
                        <p class="fw-medium mb-1">
                          Please consider upgrading your plan. You are running
                          out of space.
                        </p>
                        <div class="text-muted">16 hours ago</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="text-dark d-flex py-2" href="javascript:void(0)">
                      <div class="flex-shrink-0 me-2 ms-3">
                        <i class="fa fa-fw fa-plus text-primary"></i>
                      </div>
                      <div class="flex-grow-1 pe-2">
                        <p class="fw-medium mb-1">New purchases! +$250</p>
                        <div class="text-muted">1 day ago</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <div class="p-2 bg-body-light rounded-bottom">
                  <a class="dropdown-item text-center mb-0" href="javascript:void(0)">
                    <i class="fa fa-fw fa-flag opacity-50 me-1"></i> View All
                  </a>
                </div>
              </div>
            </div>
            <!--<button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="side_overlay_toggle">
              <i class="fa fa-fw fa-stream"></i>
            </button>-->
          </div>
        </div>
        <div id="page-header-search" class="overlay-header bg-body-extra-light">
          <div class="content-header">
            <form class="w-100" action="be_pages_generic_search.html" method="POST">
              <div class="input-group">
                <button type="button" class="btn btn-secondary" data-toggle="layout" data-action="header_search_off">
                  <i class="fa fa-fw fa-times"></i>
                </button>
                <input type="text" class="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input" />
                <button type="submit" class="btn btn-secondary">
                  <i class="fa fa-fw fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div id="page-header-loader" class="overlay-header bg-primary">
          <div class="content-header">
            <div class="w-100 text-center">
              <i class="far fa-sun fa-spin text-white"></i>
            </div>
          </div>
        </div>
      </header>';
  }



  // app settings data 

  public function appsettingsdata(){

    $appdata = fetchall('settings')[0];



    echo '<div class="mb-4">
    <label class="form-label" for="profile-settings-username">App Name</label>
    <input type="text" class="form-control form-control-lg" id="profile-settings-username" name="appname" placeholder="Enter app name.." value="'.$appdata['appname'].'">
</div>
<div class="mb-4">
    <label class="form-label" for="profile-settings-name">Company Contact</label>
    <input type="text" class="form-control form-control-lg" id="profile-settings-name" name="contact" placeholder="eg +233565565" value="'.$appdata['contact'].'">
</div>

<div class="mb-4">
    <label class="form-label" for="profile-settings-name">Company Contact 2</label>
    <input type="text" class="form-control form-control-lg" id="profile-settings-name" name="contact2" placeholder="eg +233565565" value="'.$appdata['contact2'].'">
</div>

<div class="mb-4">
    <label class="form-label" for="profile-settings-name">Company Contact 3</label>
    <input type="text" class="form-control form-control-lg" id="profile-settings-name" name="contact3" placeholder="eg +233565565" value="'.$appdata['contact3'].'">
</div>
<div class="mb-4">
    <label class="form-label" for="profile-settings-email">Company Email</label>
    <input type="email" class="form-control form-control-lg" id="profile-settings-email" name="email" placeholder="eg example@gmail.com" value="'.$appdata['email'].'">
</div>



<div class="mb-4">
    <label class="form-label" for="profile-settings-name">Company Address</label>
    <textarea  class="form-control form-control-lg" id="profile-settings-name" name="address" placeholder="" >'.$appdata['address'].'</textarea>
</div>
<div class="row mb-4">
    <div class="col-md-10 col-xl-6">
        <div class="push">
            <img class="img-avatar" src="yolkassets/upload/'.$appdata['applogo'].'" alt="">
        </div>
        <div class="mb-4">
            <label class="form-label" for="profile-settings-avatar" class="form-label">Choose new Logo (png)</label>
            <input class="form-control" type="file" id="profile-settings-avatar" name="applogo">
        </div>
    </div>
</div>


<div class="row mb-4">
    <div class="col-md-10 col-xl-6">
        <div class="push">
            <img class="img-avatar" src="yolkassets/upload/'.$appdata['favicon'].'" alt="">
        </div>
        <div class="mb-4">
            <label class="form-label" for="profile-settings-avatar" class="form-label">Choose new Favicon  (png only) </label>
            <input class="form-control" type="file" id="profile-settings-avatar" name="favicon">
        </div>
    </div>
</div>
<div class="mb-4">
    <button type="submit" class="btn btn-alt-primary">Update</button>
</div>';

    

  }



  // login form 


  public function loginform(){

    echo '<div class="bg-gd-dusk">
    <div class="hero-static content content-full bg-body-extra-light">
      <div class="py-4 px-1 text-center mb-4">
        <a class="link-fx fw-bold" href="">
          <i class="fa fa-fire"></i>
          <span class="fs-4 text-body-color">TICT</span><span class="fs-4">Portal</span>
        </a>
        <h1 class="h3 fw-bold mt-5 mb-2">Welcome Back</h1>
        <h2 class="h5 fw-medium text-muted mb-0">Please sign in</h2>
      </div>
      <div class="row justify-content-center px-1">
        <div class="col-sm-8 col-md-6 col-xl-4">
          <form class="js-validation-signin frmlogin">
            <div class="form-floating mb-4">
              <input type="email" class="form-control" id="email" name="email" placeholder="Enter your Email" required>
              <label class="form-label" for="email">Email</label>
            </div>
            <div class="form-floating mb-4">
              <input type="password" class="form-control" id="login-password" name="password" placeholder="Enter your password" required>
              <label class="form-label" for="login-password">Password</label>
            </div>
            <div class="row g-sm mb-4">
              <div class="col-12 mb-2">
                <button type="submit" class="btn btn-lg btn-alt-primary w-100 py-3 fw-semibold">
                  Sign In
                </button>
              </div>
            
              
              <!-- <div class="col-sm-6 mb-1">
                <a class="btn btn-alt-secondary w-100" href="op_auth_reminder.html">
                  Forgot password
                </a>
              </div>
            </div> -->
          </form>
        </div>
      </div>
    </div>
  </div>';

  }
}
