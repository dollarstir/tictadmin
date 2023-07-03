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
            <div class="bg-image bg-image-bottom" style="background-image: url('assets/media/photos/photo13@2x.jpg');">
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
            </div>
            <div class="content">
                <div class="block block-rounded">
                    <div class="block-header block-header-default">
                        <h3 class="block-title">
                            <i class="fa fa-user-circle me-1 text-muted"></i> User Profile
                        </h3>
                    </div>
                    <div class="block-content">
                        <form action="https://demo.pixelcave.com/codebase/be_pages_generic_profile.edit.html" method="POST" enctype="multipart/form-data" onsubmit="return false;">
                            <div class="row items-push">
                                <div class="col-lg-3">
                                    <p class="text-muted">
                                        Your account’s vital info. Your username will be publicly visible.
                                    </p>
                                </div>
                                <div class="col-lg-7 offset-lg-1">
                                    <div class="mb-4">
                                        <label class="form-label" for="profile-settings-username">Username</label>
                                        <input type="text" class="form-control form-control-lg" id="profile-settings-username" name="profile-settings-username" placeholder="Enter your username.." value="john.doe">
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label" for="profile-settings-name">Name</label>
                                        <input type="text" class="form-control form-control-lg" id="profile-settings-name" name="profile-settings-name" placeholder="Enter your name.." value="John Doe">
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label" for="profile-settings-email">Email Address</label>
                                        <input type="email" class="form-control form-control-lg" id="profile-settings-email" name="profile-settings-email" placeholder="Enter your email.." value="john.doe@example.com">
                                    </div>
                                    <div class="row mb-4">
                                        <div class="col-md-10 col-xl-6">
                                            <div class="push">
                                                <img class="img-avatar" src="public/view/assets/media/avatars/avatar15.jpg" alt="">
                                            </div>
                                            <div class="mb-4">
                                                <label class="form-label" for="profile-settings-avatar" class="form-label">Choose new avatar</label>
                                                <input class="form-control" type="file" id="profile-settings-avatar" name="profile-settings-avatar">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <button type="submit" class="btn btn-alt-primary">Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                
                
                <div class="block block-rounded">
                    <div class="block-header block-header-default">
                        <h3 class="block-title">
                            <i class="fa fa-asterisk me-1 text-muted"></i> Change Password
                        </h3>
                    </div>
                    <div class="block-content">
                        <form action="https://demo.pixelcave.com/codebase/be_pages_generic_profile.edit.html" method="POST" onsubmit="return false;">
                            <div class="row items-push">
                                <div class="col-lg-3">
                                    <p class="text-muted">
                                        Changing your sign in password is an easy way to keep your account secure.
                                    </p>
                                </div>
                                <div class="col-lg-7 offset-lg-1">
                                    <div class="mb-4">
                                        <label class="form-label" for="profile-settings-password">Current Password</label>
                                        <input type="password" class="form-control form-control-lg" id="profile-settings-password" name="profile-settings-password">
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label" for="profile-settings-password-new">New Password</label>
                                        <input type="password" class="form-control form-control-lg" id="profile-settings-password-new" name="profile-settings-password-new">
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label" for="profile-settings-password-new-confirm">Confirm New Password</label>
                                        <input type="password" class="form-control form-control-lg" id="profile-settings-password-new-confirm" name="profile-settings-password-new-confirm">
                                    </div>
                                    <div class="mb-4">
                                        <button type="submit" class="btn btn-alt-primary">Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </main>
        <?= $app->appfooter() ?>