<?php
class sliderController
{




    public function  allsliders()
    {



        $sliderModel = new sliderModel();
        $result = $sliderModel->allsliders();
        $output  = '<div class="row">';

        foreach ($result as $row) {

            $output .= '

            <div class="col-md-6 col-xl-3">
                <div class="block block-rounded block-link-pop text-center" href="javascript:void(0)" >
                        <div class="block-content block-content-full" >

                        <img class="img-responsive" src="yolkassets/upload/' . $row['slider_image'] . '" alt="" style="width:100%;height:100%" />
                     
                        </div>

                
                    <div class="block-content block-content-full bg-body-dark">
                        <div class="fw-semibold mb-1"><a class="btn btn-primary btn-sm" href="' . $row['url'] . '" target="blank">' . $row['button_text'] . '</a></div>
                        <div class="fs-sm text-muted"><b>link: </b>  ' . $row['url'] . '</div><br>


                            <button type="button" class="btn btn-sm btn-alt-primary me-1 js-bs-tooltip-enabled btneditslider" id="' . $row['slider_id'] . '" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Add to group" data-bs-original-title="Edit Detail"  data-izimodal-open="#slidermodal" data-izimodal-transitionin="fadeInDown">
                            <i class="fa fa-fw fa-pencil-alt"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-alt-primary me-1 js-bs-tooltip-enabled" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Remove from group" data-bs-original-title="Delete Record">
                            <i class="fa fa-fw fa-trash"></i>
                        </button>
                    </div>

                </div>

               
     


        
            </div>
            
         ';
        }

        $output .= '</div>';

        echo $output;
    }


    // add slider function  
    public function addslider()
    {

        echo '<div class="block-content">
        <form class="frmaddslider">
            <div class="mb-4">
                <label class="form-label" for="example-file-input">Slider Image</label>
                <input class="form-control" type="file" id="example-file-input" name="slider_image">

               
            </div>

            <div class="mb-4">
                <label class="form-label" for="example-file-input">Button Text</label>
                <input class="form-control" type="text" id="example-text-input" name="button_text" placeholder=" button text eg. Apply, Register">

           
            </div>



            <div class="mb-4">
                <label class="form-label" for="example-file-input">Link to Resource</label>
                <input class="form-control" type="text" id="example-text-input" name="url" >

       
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
    // form to edit  single slider 
    /**
     * @param $slider_id
     * @return string
     */

    public function editsingleslider($slider_id)
    {

        $slidermodel = new sliderModel();

        $row = $slidermodel->singleslider($slider_id);

        if ($row['status'] == 1) {


            $status = 'active';
        } else {
            $status = "inactive";
        }

        echo '<div class="block-content">
        <form class="frmeditslider">
            <div class="mb-4">
                <label class="form-label" for="example-file-input"> New Slider Image (Leave it blank to mantain old one)</label>
                <input class="form-control" type="file" id="example-file-input" name="slider_image">

               
            </div>

            <div class="mb-4">
                <label class="form-label" for="example-file-input">Button Text</label>
                <input class="form-control" type="text" id="example-text-input" name="button_text" placeholder=" button text eg. Apply, Register"  value="' . $row['button_text'] . '">
                <input class="form-control" type="hidden" id="example-text-input" name="slider_id" placeholder=" button text eg. Apply, Register"  value="' . $row['slider_id'] . '">

           
            </div>



            <div class="mb-4">
                <label class="form-label" for="example-file-input">Link to Resource</label>
                <input class="form-control" type="text" id="example-text-input" name="url"  value="' . $row['url'] . '">

       
            </div>
            

           

            <div class="mb-4">
            <label class="form-label" for="">Status</label>
            <select class="form-select" id="example-select-floating" name="status" aria-label="Floating label select example">
            <option value="' . $row['status'] . '">' . $status . '</option>
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
}
