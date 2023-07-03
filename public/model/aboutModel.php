<?php
class aboutModel
{

    public function aboutinfo()
    {
        $result = fetchall('about')[0];

        return $result;
    }


    // function to  update the about info

    public function updateAboutinfo($data)
    {
        // $record  = [];
        if (update('about', $data) == 'success') {

            return ['type' => 'success', 'message' => 'Record updated successfully'];
        } else {
            return ['type' => 'error', 'message' => 'Failed to update about info'];
        }
    }
}
