<?php

$app = new AppController();

$staff = new staffController();
$dashboard = new DashboardController();
$notice = new NoticeController();
$app->apptitle('Announcement');

?>

<body>
    <div id="page-container" class="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">
        <?= $app->sidebar(); ?>
        <?= $app->appTopbar(); ?>
        <main id="main-container">
            <div class="content">

                <h2 class="content-heading">Announcements</h2>
                <div>
                    <button type="button" class="btn btn-success me-1 mb-1 btnaddnotice" data-izimodal-open="#noticemodal" data-izimodal-transitionin="fadeInDown">
                        <i class="fa fa-plus opacity-50 me-1"></i> Add New
                    </button>

                </div>
                <hr>
                <div class="noticecont" id="noticecont">
                    <?= $notice->allNotice() ?>
                </div>
            </div>

            <!-- modals -->
            <div class="noticemodal" id="noticemodal" data-iziModal-title="Announcements">

                <div class="block-content noticemodalcontent" id="noticemodalcontent">
                    <!-- modal content goes here     -->
                </div>
            </div>

            <div class="noticeoptionmodal" id="noticeoptionmodal" data-iziModal-title="Delete notice">


                <div class="block-content noticeoptionmodalcontent" id="noticeoptionmodalcontent">
                    <!-- modal content goes here     -->
                </div>
            </div>


        </main>
        <?= $app->appfooter() ?>