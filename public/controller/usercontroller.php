<?php

class usercontroller{
   public function userinfo(){
    // session_start();
    $data = customfetch('members',[['member_id','=',$_SESSION['tuceeadmin']['member_id']]])[0];

    return $data;
   }


    


}