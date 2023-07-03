<?php

$app = new appController();

$staff = new staffController();
$dashboard = new dashboardController();
$app->apptitle('App Settings');

?>

<body>
    <div id="page-container" class="sidebar-o enable-page-overlay side-scroll main-content-boxed">

        <?= $app->sidebar(); ?>
        <?= $app->appTopbar(); ?>
        <main id="main-container">
            <!-- <div class="bg-image bg-image-bottom" style="background-image: url('assets/media/photos/photo13@2x.jpg');">
                <div class="bg-black-75 py-4">
                    <div class="content content-full text-center">
                        <div class="mb-3">
                            <a class="img-link" href="be_pages_generic_profile.html">
                                <img class="img-avatar img-avatar96 img-avatar-thumb" src="public/view/assets/media/avatars/avatar15.jpg" alt="">
                            </a>
                        </div>
                        <h1 class="h3 text-white fw-bold mb-2">John Smith</h1>
                        <h2 class="h5 text-white-75">
                            Product Manager <a class="text-primary-light" href="javascript:void(0)">@GraphicXspace</a>
                        </h2>
                        <a href="be_pages_generic_profile.html" class="btn btn-primary">
                            <i class="fa fa-arrow-left opacity-50 me-1"></i> Back to Profile
                        </a>
                    </div>
                </div>
            </div> -->
            <div class="content">
                <div class="block block-rounded">
                    <div class="block-header block-header-default">
                        <h3 class="block-title">
                            <i class="fa fa-mobile me-1 text-muted"></i>App Settings
                        </h3>
                    </div>
                    <div class="block-content">
                        <form class="appfrm">
                            <div class="row items-push">
                                <!-- <div class="col-lg-3">
                                    <p class="text-muted">
                                        Your account’s vital info. Your username will be publicly visible.
                                    </p>
                                </div> -->
                                <div class="col-lg-7 offset-lg-1">
                                    <div class="appsettingscont" id="appsettingscont">
                                    <!-- app settings data goes here -->
                                    <?php $app->appsettingsdata(); ?>

                                    </div>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                
                
                
                
            </div>
        </main>
        <?= $app->appfooter() ?>