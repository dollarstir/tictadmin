<?php

$app = new AppController();

$staff = new staffController();
$slidercontroller = new SliderController();
$dashboard = new DashboardController();
$notice = new NoticeController();
$app->apptitle('Slider');

?>

<body>
    <div id="page-container" class="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">
        <?= $app->sidebar(); ?>
        <?= $app->appTopbar(); ?>
        <main id="main-container">
            <div class="content">

                <h2 class="content-heading">Home Page Sliders</h2>
                <div>
                    <button type="button" class="btn btn-success me-1 mb-1 btnaddslider" data-izimodal-open="#slidermodal" data-izimodal-transitionin="fadeInDown">
                        <i class="fa fa-plus opacity-50 me-1"></i> Add New
                    </button>

                </div>
                <hr>
                <div class="slidercont" id="slidercont">
                    <?= $slidercontroller->allsliders(); ?>
                </div>
            </div>

            <!-- modals -->
            <div class="slidermodal" id="slidermodal" data-iziModal-title="Slider">

                <div class="block-content slidermodalcontent" id="slidermodalcontent">
                    <!-- modal content goes here     -->
                </div>
            </div>

            <div class="slideroptionmodal" id="slideroptionmodal" data-iziModal-title="Delete Slider">


                <div class="block-content slideroptionmodalcontent" id="slideroptionmodalcontent">
                    <!-- modal content goes here     -->
                </div>
            </div>


        </main>
        <?= $app->appfooter() ?>