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

    // inserting new staff to database
    public function addstaff($data){
        $data['date_created'] =  date('Y-m-d H:i:s');

        if(insert('staff',$data,$_FILES, '../yolkassets/upload') == 'success'){
            return ['type' => 'success', 'message' => 'Staff added successfully'];
        }
        else{
            return ['type' => 'error', 'message' => 'Failed to add  staff'];
        }
        
    }

    // get single staff data 
    public function singlestaff($staffid){

        $record = customfetch('staff',[['staff_id','=',$staffid]]);

        return $record[0];
        

    }

    // updating staff

    public function updatestaff($data){

        if(update('staff',$data,['staff_id'=>$data['staff_id']],$_FILES,'../yolkassets/upload')  == 'success'){

            return ['type' => 'success', 'message' => 'Staff u[dated successfully'];
        }
        else{
            return ['type' => 'error', 'message' => 'Failed to add  staff'];
        }
        
    }

     // delete staff 
    /**
     * @param $staff_id
     * @return mixed
     */
    public function deletestaff($staff_id)
    {

        if (delete('staff', [['staff_id', '=', $staff_id]]) == 'success') {


            return ['type' => 'success', 'message' => 'Staff deleted successfully'];
        } else {


            return ['type' => 'error', 'message' => 'Failed to delete Staff'];
        }
    }




}
