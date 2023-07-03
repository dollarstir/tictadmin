<?php
class aboutController
{
    public function aboutinfo()
    {

        $aboutmodel = new  aboutModel();
        $result = $aboutmodel->aboutinfo();

        echo '<div class="block-content">
        <form class="frneditaboutpage">
            

            <div class="mb-4">
                <label class="form-label" for="example-file-input">About US</label>
                <textarea  style="height:200px !important;" class="form-control"  id="example-text-input" name="about_text" >' . $result['about_text'] . '</textarea>

           
            </div>



            <div class="mb-4">
                <label class="form-label" for="example-file-input">Mission</label>
                <textarea  style="height:100px !important;" class="form-control"  id="example-text-input" name="mission" >' . $result['mission'] . '</textarea>

       
            </div>

            <div class="mb-4">
                <label class="form-label" for="example-file-input">Motto</label>
                <textarea  style="height:60px !important;" class="form-control"  id="example-text-input" name="motto" >' . $result['motto'] . '</textarea>

       
            </div>
            <div class="mb-4">
                <label class="form-label" for="example-file-input">Vision</label>
                <textarea  style="height:100px !important;" class="form-control"  id="example-text-input" name="vision" >' . $result['vision'] . '</textarea>

   
            </div>

            <div class="mb-4">
                <label class="form-label" for="example-file-input">Our Collaborators( list them with comma)</label>
                <textarea  style="height:100px !important;" class="form-control"  id="example-text-input" name="collaborators" >' . $result['collaborators'] . '</textarea>


            </div>

            <div class="mb-4">
                <label class="form-label" for="example-file-input">Our Values For Excellence</label>
                <textarea  style="height:100px !important;" class="form-control"  id="example-text-input" name="our_values" >' . $result['our_values'] . '</textarea>


            
            </div>

            <div class="mb-4">
                <label class="form-label" for="example-file-input">Our Beleif</label>
                <textarea  style="height:100px !important;" class="form-control"  id="example-text-input" name="our_beleif" >' . $result['our_beleif'] . '</textarea>


            
            </div>

            <div class="mb-4">
                <label class="form-label" for="example-file-input"> Aims</label>
                <textarea  style="height:100px !important;" class="form-control"  id="example-text-input" name="aims" >' . $result['aims'] . '</textarea>


            
            </div>

            <div class="mb-4">
                <label class="form-label" for="example-file-input"> Our Department(separate with commas)</label>
                <textarea  style="height:100px !important;" class="form-control"  id="example-text-input" name="our_department" >' . $result['our_department'] . '</textarea>


            
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
