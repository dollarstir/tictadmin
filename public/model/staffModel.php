<?php
class staffModel

{


    // counting staff

    public function countStaff()

    {

        $count = new counter();

        return $count->countall('staff');
    }

    // fetching all staff from db
    public function allstaff()
    {

        $staff = fetchall('staff');

        return $staff;
    }
}
