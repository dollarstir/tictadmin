<?php

class appModel
{

    /**
     *  contains all the app settings 
     */
    public function appsettings()
    {
        $res = fetchall('settings')[0];
        return $res;
    }
}
