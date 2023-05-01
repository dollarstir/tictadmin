<?php

require '../loader/autoloader.php';
$noticecontroller = new noticecontroller();
$noticemodel = new noticemodel();
$slidemodel = new sliderModel();
$slidercontroller = new sliderController();

if (isset($_GET['action'])) {
    switch ($_GET['action']) {


            // *********************************************************************************************************************************
            // ***********NOTICE****************************************************************************************************************

        case 'getsignlenotice':

            extract($_POST);
            $noticecontroller->editnotice($notice_id);


            break;


        case 'editnotice':

            extract($_POST);
            $data = $_POST;

            echo json_encode($noticemodel->saveeditnotice($data));

            break;

        case 'getaddnoticeform':

            $noticecontroller->addnotice();
            break;


        case 'addnotice':

            extract($_POST);
            $data = $_POST;
            echo json_encode($noticemodel->addnotice($data));
            break;

        case 'getdelenoticedailog':

            extract($_POST);

            $noticecontroller->deletenotice($notice_id, $modalid);


            break;

        case 'deletenotice':
            extract($_POST);


            echo json_encode($noticemodel->deletenotice($notice_id));
            break;




            // *******************************END NOTICE***********************************************************************************





            // *******************************************************************************************************************************
            // ******************************BEGIN SLIDER *************************************************************************************



            // geetting slider form
        case 'getaddsliderform':

            $slidercontroller->addslider();
            break;

            // submitting new slider 
        case 'addslider':
            extract($_POST);
            $data = $_POST;

            echo json_encode($slidemodel->addslider($data));
            break;


            // getting single slider info for editing

        case 'getsingleslider':
            extract($_POST);
            $slidercontroller->editsingleslider($slider_id);
            break;

            // updating slider

        case 'updateslider':

            extract($_POST);
            $data = $_POST;
            echo json_encode($slidemodel->updateslider($data));
            break;






            // ***********************************************************************************************************************************
            // ********Refresh Content************************************************************************************************************


        case 'refresh':
            extract($_GET);
            $class =  new $class();
            $class->$function();
            break;




        default:

            break;
    }
}
