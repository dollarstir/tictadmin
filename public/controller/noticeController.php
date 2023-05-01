<?php

class noticeController
{

    // getting  all notice
    public function allNotice()
    {
        $notice = new noticeModel();
        $allnotice = $notice->allNotice();
        $output = '<div class="row">';

        foreach ($allnotice as $row) {

            if ($row['status']  == 1) {

                $status = '<span class="btn btn-success btn-sm">Active</span>';
            } elseif (
                $row['status']  == 0
            ) {
                $status = '<span class="btn btn-warning btn-sm">Inactive</span>';
            }

            $output .= '<div class="col-md-4">
                            <div class="block block-rounded">
                                <div class="block-header block-header-default">
                                    <h3 class="block-title">' . $row['title'] . '</h3>
                                    <div class="block-options">
                                        <button type="button" class="btn btn-sm btn-primary editnoticebtn" data-izimodal-open="#noticemodal" data-izimodal-transitionin="fadeInDown"  id="' . $row['notice_id'] . '">
                                            <i class="fa fa-pencil-alt"></i></button>
                                        <button type=" button" class="btn btn-sm btn-danger btndeletenotice" data-izimodal-open="#noticeoptionmodal" data-izimodal-transitionin="fadeInDown"  id="' . $row['notice_id'] . '"><i class="fa fa-trash"></i></button>
                                    </div>
                                </div>
                                <div class="block-content">
                                    <p>' . $row['description'] . '</p><br>
                                    ' . $status . '</br>
                                </div>
                            </div>
                        </div>

        ';
        }
        $output .= '</div>';
        echo $output;
    }


    // edit announcement content
    /**
     * @param $notice_id  string id of the notice
     * @return string
     */

    public function editnotice($notice_id)
    {

        $noticemodel  = new noticeModel();
        $row = $noticemodel->singleNotice($notice_id);

        if ($row['status'] == 1) {

            $status = 'active';
        } elseif (($row['status'] == 0)) {

            $status = 'inactive';
        }

        echo '<div class="block-content">
         <form class="frmeditnotice">
             <div class="mb-4">
                 <label class="form-label" for="login1-username">Title</label>
                 <input type="text" class="form-control" name="title" placeholder="Enter announcement title"  value="' . $row['title'] . '">

                 <input type="hidden" class="form-control" name="notice_id" placeholder="Enter announcement title"  value="' . $row['notice_id'] . '">
             </div>
             <div class="mb-4">
                 <label class="form-label" for="login1-password">Description</label>
                 <textarea  class="form-control" name="description" placeholder="Enter your anouncement detials..">' . $row['description'] . '</textarea>
             </div>

            
             <div class="mb-4">
             <label class="form-label" for="">Status</label>
             <select class="form-select" id="example-select-floating" name="status" aria-label="Floating label select example">
             <option value="' . $row['status'] . '">' . $status . '</option>
             <option value="1">active</option>
             <option value="2">inactive</option>
             
           </select>
             </div>


             <div class="mb-4">
                 <button type="submit" class="btn btn-primary" >
                     Save <span class="loadingbtnspin" ></span>
                 </button>
             </div>
         </form>
     </div>';
    }



    // adding new notice
    public function addnotice()
    {
        echo '<div class="block-content">
        <form class="frmaddnotice">
            <div class="mb-4">
                <label class="form-label" for="login1-username">Title</label>
                <input type="text" class="form-control" name="title" placeholder="Enter announcement title"  value="">

               
            </div>
            <div class="mb-4">
                <label class="form-label" for="login1-password">Description</label>
                <textarea  class="form-control" name="description" placeholder="Enter your anouncement detials.."></textarea>
            </div>

           

            <div class="mb-4">
            <label class="form-label" for="">Status</label>
            <select class="form-select" id="example-select-floating" name="status" aria-label="Floating label select example">
            
            <option value="1">active</option>
            <option value="0">inactive</option>
            
          </select>
            </div>


            <div class="mb-4">
                <button type="submit" class="btn btn-primary" >
                    Save <span class="loadingbtnspin" ></span>
                </button>
            </div>
        </form>
    </div>';
    }



    // delete notice function 
    /**
     * @param $notice_id id of notice
     * @param $modalid iod  id of the modal to close 
     */


    public function deletenotice($notice_id, $modalid)
    {

        echo '<form class="frmdeletenotice">
        <div class="mb-4">
            <label class="form-label" for="login1-username">Are you sure you want to delete this Notice</label>
            <input type="hidden" class="form-control" name="notice_id" placeholder="Enter announcement title"  value="' . $notice_id . '">

           
        </div>
       

       

       


        <div class="mb-4">
            <div style="margin-left:30%;">

            <button type="button" class="btn btn-danger btnclosemodal" data-modal="' . $modalid . '"   >
                No 
            </button>

            <button type="submit" class="btn btn-success" >
               Yes <span class="loadingbtnspin" ></span>
            </button>
            
            </div>
        </div>
    </form>';
    }
}
