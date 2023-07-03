<?php

$app = new appController();

$staff = new staffController();
$dashboard = new dashboardController();
$app->apptitle('Login');
loginpagechecker('tuceeadmin','dashboard');

?>
<body>
<div id="page-container" class="main-content-boxed">
    <main id="main-container">

    <?php $app->loginform();?>  
      
    </main>
<?= $app->appfooter() ?>