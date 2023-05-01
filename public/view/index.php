<?php

$app = new AppController();

$staff = new staffController();
$dashboard = new DashboardController();
$app->apptitle('Dashboard');

?>

<body>
  <div id="page-container" class="sidebar-o enable-page-overlay side-scroll  page-header-modern main-content-boxed">

    <?= $app->sidebar(); ?>
    <?= $app->appTopbar(); ?>
    <main id="main-container">
      <div class="content">

        <?= $dashboard->carddisplay() ?>

        <?= $staff->liststaff() ?>








      </div>
    </main>
    <?= $app->appfooter() ?>