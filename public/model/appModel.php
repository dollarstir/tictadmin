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

    // update appsettings

    public function updateappsettings($data){
     

            if(update('settings',$data,[],$_FILES,'../yolkassets/upload')  == 'success'){
    
                return ['type' => 'success', 'message' => 'App updated successfully'];
            }
            else{
                return ['type' => 'error', 'message' => 'Failed to add  staff'];
            }
            
        
    
    }
    // admin login
    public function adminauth($data){
        if(authenticate('members',[['email','=',$data['email']]])=='success'){
            if(loginauth('members','tuceeadmin',[['email','=',$data['email']],['password','=',md5($data['password'])]],'AND')  =='success'){

                return ['type' => 'success', 'message' => 'Login successful'];

            }
            else{
                return ['type' => 'error', 'message' => 'Failed to login / incorrect password'];
            }
        }
        else{
            return ['type' => 'error', 'message' => 'Record not found'];
        }
    }
}
