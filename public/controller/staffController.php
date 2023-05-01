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
                        <button type="button" class="btn btn-sm btn-alt-primary me-1 js-bs-tooltip-enabled" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Add to group" data-bs-original-title="Edit Detail">
                            <i class="fa fa-fw fa-pencil-alt"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-alt-primary me-1 js-bs-tooltip-enabled" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Remove from group" data-bs-original-title="Delete Record">
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
}
