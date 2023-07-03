<?php

require '../loader/autoloader.php';
$noticecontroller = new noticeController();
$noticemodel = new noticeModel();
$slidemodel = new sliderModel();
$slidercontroller = new sliderController();
$aboutmodel = new aboutModel();
$staffmodel = new staffmodel();
$staffcontroller = new staffController();
$appmodel = new appModel();
$appcontroller  = new appController();

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

            // getting delete dialog for slider

        case 'getdelesliderdailog':

            extract($_POST);

            $slidercontroller->deletenotice($slider_id, $modalid);


            // echo json_encode($slidemodel->deleteslider($slider_id));


            break;


        case 'deleteslider':
            extract($_POST);
            echo json_encode($slidemodel->deleteslider($slider_id));
            break;


            // *******************************END SLIDER MODEL**********************************************************************


            // ************************************************************************************************************************
            // *******************************BEGIN ABOUT MODEL************************************************************************

        case 'editaboutpage':
            extract($_POST);
            $data = $_POST;
            echo json_encode($aboutmodel->updateAboutinfo($data));
            break;

            //*******************************END ABOUT MODEL*************************************************************************** */ 





            // ****************************************************************************************************************************
            // ******************************BEGIN STAFF MODEL*****************************************************************************

        case 'getaddstaffform':
            $staffcontroller->addstaff();
            break;

        case 'addstaff':
            extract($_POST);
            $data = $_POST;
            echo json_encode($staffmodel->addstaff($data));
            break;


        case 'getsinglestaff':
            extract($_POST);
            $staffcontroller->editstafform($staffid);
            break;


        case 'updatestaff':
            extract($_POST);
            $data = $_POST;
            echo json_encode($staffmodel->updatestaff($data));
            break;

        case 'getdelestaffdailog':
            extract($_POST);
            $staffcontroller->deletestaff($staff_id,$modalid);
            break;

        case 'deletestaff':
            extract($_POST);
            echo json_encode($staffmodel->deletestaff($staff_id));
            break;


            // *********************************END STAFF MODEL*****************************************************

            // ****************************************************************************************************************************
            // *********************************BEGIN APP MODEL***************************************************************************

            case 'updateappsettings':
                extract($_POST);
                $data = $_POST;
                echo  json_encode($appmodel->updateappsettings($data));
                break;


                // admin login

            case 'login':
                extract($_POST);
                $data = $_POST;
               echo json_encode($appmodel-> adminauth($data));
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
