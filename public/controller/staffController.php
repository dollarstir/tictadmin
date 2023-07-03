<?php
class staffController
{

    // list all stuff 
    public function liststaff()
    {
        $staff = new staffModel();
        $result = $staff->allstaff();

        $output  = '<div class="row">';

        foreach ($result as $row) {

            $output .= '

            <div class="col-md-6 col-xl-3">
                <a class="block block-rounded block-link-pop bg-warning text-center" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                    <img class="img-avatar img-avatar-thumb" src="yolkassets/upload/' . $row['picture'] . '" alt="' . $row['staff_name'] . '">
                    </div>
                    <div class="block-content block-content-full bg-black-5">
                    <div class="fw-semibold text-white mb-1">' . $row['staff_name'] . '</div>
                    <div class="fs-sm text-white-75">' . $row['position'] . '</div>
                    </div>
                    <div class="block-content block-content-full">
                        <button type="button" class="btn btn-sm btn-alt-primary me-1 js-bs-tooltip-enabled btneditstaff" id="'.$row['staff_id'].'" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Add to group" data-bs-original-title="Edit Detail"  data-izimodal-open="#staffmodal" data-izimodal-transitionin="fadeInDown">
                            <i class="fa fa-fw fa-pencil-alt"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-alt-primary me-1 js-bs-tooltip-enabled btndeletestaff"  id="'.$row['staff_id'].'" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Remove from group" data-bs-original-title="Delete Record" data-izimodal-open="#staffoptionmodal" data-izimodal-transitionin="fadeInDown" >
                            <i class="fa fa-fw fa-trash"></i>
                        </button>
                    </div>
                </a>
            </div>
            
         ';
        }

        $output .= '</div>';

        echo $output;
    }

    // addd staff form

    public function addstaff()
    {
        echo '<div class="block-content">
        <form class="frmaddstaff">
            <div class="mb-4">
                <label class="form-label" for="login1-username">Staff Name</label>
                <input type="text" class="form-control" name="staff_name" placeholder=""  value="">

               
            </div>

            <div class="mb-4">
                <label class="form-label" for="login1-username">Position</label>
                <input type="text" class="form-control" name="position" placeholder="eg: manager"  value="">

            
            </div>

            <div class="mb-4">
            <label class="form-label" for="login1-username">Upload Picture</label>
            <input type="file" class="form-control" name="picture" >

        
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


    // edit staff form

    public function editstafform($staffid)
    {

        $staffmodel = new staffModel();

       $staff = $staffmodel->singlestaff($staffid);

       $status = ($staff['status'] == 1)? 'Active':'Inactive';



        echo '<div class="block-content">
        <form class="frmeditstaff">
            <div class="mb-4">
                <label class="form-label" for="login1-username">Staff Name</label>
                <input type="text" class="form-control" name="staff_name" placeholder=""  value="'.$staff['staff_name'].'">
                <input type="hidden" class="form-control" name="staff_id" placeholder=""  value="'.$staff['staff_id'].'">


               
            </div>

            <div class="mb-4">
                <label class="form-label" for="login1-username">Position</label>
                <input type="text" class="form-control" name="position" placeholder="eg: manager"  value="'.$staff['position'].'">

            
            </div>

            <img src="yolkassets/upload/'.$staff['picture'].'" style="width:120px;height:120px;" />

            <div class="mb-4">
            <label class="form-label" for="login1-username">Upload New or Leave it Bank to Maintain current</label>
            <input type="file" class="form-control" name="picture" >

        
        </div>

            
           
           

            <div class="mb-4">
            <label class="form-label" for="">Status</label>
            <select class="form-select" id="example-select-floating" name="status" aria-label="Floating label select example">
            <option value="'.$staff['status'].'"> '.$status.'</option>
            <option value="1">Active</option>
            <option value="0">Inactive</option>
            
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



    // deleting stafff dialog box

    public function deletestaff($staff_id, $modalid)
    {

        echo '<form class="frmdeletestaff">
         <div class="mb-4">
             <label class="form-label" for="login1-username">Are you sure you want to delete this Staff</label>
             <input type="hidden" class="form-control" name="staff_id" placeholder="Enter announcement title"  value="' . $staff_id . '">
 
            
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
