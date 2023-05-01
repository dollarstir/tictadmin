<?php

require_once 'loader/autoloader.php';
$router = new Router([
    /* Welcome to Yolk RouteEngine
     ***************************************************************
     * the ('/migration') route should be commented out  in production mode.
     * To avoid destruction of database
     *
     * use it in Development mode to build your database tables
     *************************************************************
     * NB :  ('/') - indicate the default page that loads
     * changet he this rounte destination to your default website homepage file after installation successful
     * eg : new Route(
        '/',
        function ($context) {
            return Viewer::view('mainfiles/index.php', $context);
        }
    ),
    ************************************************************************************
     */

    new Route(
        '/migration',
        function ($context) {
            return Viewer::view('storage/database.php', $context);
        }
    ),

    new Route(
        '/tictadmin',
        function ($context) {
            return Viewer::view('public/view/index.php', $context);
        }
    ),


    new Route(
        '/tictadmin/dashboard',
        function ($context) {
            return Viewer::view('public/view/index.php', $context);
        }
    ),

    new Route(
        '/tictadmin/mysettings',
        function ($context) {
            return Viewer::view('public/view/appsettings.php', $context);
        }
    ),

    new Route(
        '/tictadmin/slides',
        function ($context) {
            return Viewer::view('public/view/slider.php', $context);
        }
    ),

    new Route(
        '/tictadmin/announcements',
        function ($context) {
            return Viewer::view('public/view/noticeboard.php', $context);
        }
    ),



]);
$router->launch();
