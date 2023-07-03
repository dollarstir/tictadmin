<?php

$app = new appController();

$aboutcontroller  = new aboutController();
$dashboard = new dashboardController();
$notice = new noticeController();
$app->apptitle('Slider');

?>

<body>
    <div id="page-container" class="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">
        <?= $app->sidebar(); ?>
        <?= $app->appTopbar(); ?>
        <main id="main-container">
            <div class="content">

                <h2 class="content-heading">About Page</h2>
                <!-- <div>
                    <button type="button" class="btn btn-success me-1 mb-1 btnaddslider" data-izimodal-open="#slidermodal" data-izimodal-transitionin="fadeInDown">
                        <i class="fa fa-plus opacity-50 me-1"></i> Add New
                    </button>

                </div>
                <hr> -->
                <div class="aboutcont" id="aboutcont">
                    <?= $aboutcontroller->aboutinfo(); ?>
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