<?php

class sliderModel
{
    // counting slider
    public function countSlider()
    {
        $count = new counter();
        return $count->countall('slider');
    }



    public function allsliders()
    {

        $result  = fetchall('slider', ['slider_id' => 'DESC']);

        return $result;
    }




    // adding new slider function 
    public function addslider($data)
    {

        if (empty($_FILES['slider_image']['name'])) {

            return ['type' => 'warning', 'message' => 'Upload image file'];
        } else {

            $record = [

                'url' => $data['url'],
                'button_text' => $data['button_text'],
                'status' => $data['status'],
                'date_created' => date('Y-m-d h:i:s a'),

            ];

            if (insert('slider', $record, $_FILES, '../yolkassets/upload') == 'success') {

                return ['type' => 'success', 'message' => 'Slider added successfully'];
            } else {

                return ['type' => 'error', 'message' => 'failed to add slider'];
            }
        }
    }

    // get single slider
    /**
     * @param $slider_id
     * 
     * @return array
     */

    public function singleslider($slider_id)
    {
        $result = customfetch('slider', [['slider_id', '=', $slider_id]])[0];

        return $result;
    }


    // updating slider
    /**
     * @param $data 
     * @return array
     */

    public function updateslider($data)
    {

        $record = [

            'button_text' => $data['button_text'],
            'url' => $data['url'],
            'status' => $data['status'],

        ];
        if (empty($_FILES['slider_image']['name'])) {

            $query = update('slider', $record, ['slider_id' => $data['slider_id']]);
        } else {

            $query = update('slider', $record, ['slider_id' => $data['slider_id']], $_FILES, '../yolkassets/upload');
        }


        if ($query == 'success') {

            return ['type' => 'success', 'message' => 'Slider Updated successfuly'];
        } else {

            return ['type' => 'success', 'message' => 'Slider Updated successfuly'];
        }
    }
}
