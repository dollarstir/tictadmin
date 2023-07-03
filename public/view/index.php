<?php

$app = new appController();

$staff = new staffController();
$dashboard = new dashboardController();
$app->apptitle('Dashboard');

?>

<body>
  <div id="page-container" class="sidebar-o enable-page-overlay side-scroll  page-header-modern main-content-boxed">

    <?= $app->sidebar(); ?>
    <?= $app->appTopbar(); ?>
    <main id="main-container">
      <div class="content">

        <?= $dashboard->carddisplay() ?>

      








      </div>

      
    </main>
    <?= $app->appfooter() ?>