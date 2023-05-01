<?php
class noticeModel
{

    // counting annocement
    public function countNotice()
    {
        $count = new counter();
        return $count->countall('notice');
    }

    // fetching all annocement from db
    public function allNotice()
    {
        $notice = fetchall('notice', ['notice_id' => 'DESC']);
        return $notice;
    }

    // single anouncement 
    /**
     * @param $notice_id 
     * @return array
     */

    public function singleNotice($notice_id)
    {
        $select  = new Sel;
        $result = $select->select('notice', [['notice_id', '=', $notice_id]]);
        return $result[0];
    }

    // submit notification edit

    /**
     * @param $data form data to edit
     * @return array
     */
    public function saveeditnotice($data)
    {
        $record = [
            'title' => $data['title'],
            'description' => $data['description'],
            'status' => $data['status']
        ];

        if (update('notice', $record, ['notice_id' => $data['notice_id']]) == 'success') {


            return ['type' => 'success', 'message' => 'Update successful'];
        } else {

            return ['type' => 'error', 'message' => 'Failed to update '];
        }
    }

    // add new notice  
    /**
     * @param $data to send to database
     * @return mixed 
     * 
     */
    public function addnotice($data)
    {
        if (empty(trim($data['title'])) || empty(trim($data['description']))) {

            return ['type' => 'warning', 'message' => 'all fields are required'];
        } else {

            $record = [
                'title' => $data['title'],
                'description' => $data['description'],
                'status' => $data['status'],
                'date_created' => date('y-m-d h:i:s a'),

            ];

            if (insert('notice', $record) == 'success') {

                return ['type' => 'success', 'message' => 'Record added successfully'];
            } else {

                return ['type' => 'error', 'message' => 'Failed to add notice'];
            }
        }
    }


    // delete notice 
    /**
     * @param $notice_id
     * @return mixed
     */
    public function deletenotice($notice_id)
    {

        if (delete('notice', [['notice_id', '=', $notice_id]]) == 'success') {


            return ['type' => 'success', 'message' => 'Notice deleted successfully'];
        } else {


            return ['type' => 'error', 'message' => 'Failed to delete notice'];
        }
    }
}
