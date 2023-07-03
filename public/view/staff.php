<?php

$app = new appController();

$staff = new staffController();
$slidercontroller = new sliderController();
$dashboard = new dashboardController();
$notice = new noticeController();
$app->apptitle('Staff');

?>

<body>
    <div id="page-container" class="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">
        <?= $app->sidebar(); ?>
        <?= $app->appTopbar(); ?>
        <main id="main-container">
            <div class="content">

                <h2 class="content-heading">Staff Members</h2>
                <div>
                    <button type="button" class="btn btn-success me-1 mb-1 btnaddstaff" data-izimodal-open="#staffmodal" data-izimodal-transitionin="fadeInDown">
                        <i class="fa fa-plus opacity-50 me-1"></i> Add New
                    </button>

                </div>
                <hr>
                <div class="staffcont" id="staffcont">
                    <?= $staff->liststaff() ?>
                </div>
            </div>

            <!-- modals -->
            <div class="staffmodal" id="staffmodal" data-iziModal-title="Staff">

                <div class="block-content staffmodalcontent" id="staffmodalcontent">
                    <!-- modal content goes here     -->
                </div>
            </div>

            <div class="staffoptionmodal" id="staffoptionmodal" data-iziModal-title="Delete Staff">


                <div class="block-content staffoptionmodalcontent" id="staffoptionmodalcontent">
                    <!-- modal content goes here     -->
                </div>
            </div>


        </main>
        <?= $app->appfooter() ?>