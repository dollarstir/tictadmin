<?php
class dashboardController
{
    public function carddisplay()
    {
        $notice = new noticeModel();
        $staff = new staffModel();
        $slider = new sliderModel();

        echo '<div class="row">
        <div class="col-6 col-xl-3">
          <a class="block block-rounded block-link-shadow text-end" href="javascript:void(0)">
            <div class="block-content block-content-full d-sm-flex justify-content-between align-items-center">
              <div class="d-none d-sm-block">
                <i class="fa fa-shopping-bag fa-2x opacity-25"></i>
              </div>
              <div>
                <div class="fs-3 fw-semibold">' . $slider->countSlider() . '</div>
                <div class="fs-sm fw-semibold text-uppercase text-muted">
                  Sliders
                </div>
              </div>
            </div>
          </a>
        </div>
       
        <div class="col-6 col-xl-3">
          <a class="block block-rounded block-link-shadow text-end" href="javascript:void(0)">
            <div class="block-content block-content-full d-sm-flex justify-content-between align-items-center">
              <div class="d-none d-sm-block">
                <i class="fa fa-envelope-open fa-2x opacity-25"></i>
              </div>
              <div>
                <div class="fs-3 fw-semibold">' . $notice->countNotice() . '</div>
                <div class="fs-sm fw-semibold text-uppercase text-muted">
                  Announcements
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-6 col-xl-3">
          <a class="block block-rounded block-link-shadow text-end" href="javascript:void(0)">
            <div class="block-content block-content-full d-sm-flex justify-content-between align-items-center">
              <div class="d-none d-sm-block">
                <i class="fa fa-users fa-2x opacity-25"></i>
              </div>
              <div>
                <div class="fs-3 fw-semibold">' . $staff->countStaff() . '</div>
                <div class="fs-sm fw-semibold text-uppercase text-muted">
                  Staff
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>';
    }
}
