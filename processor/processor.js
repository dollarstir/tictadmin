
$(function(){

    // initializing izimodals **************************************************************************************

    $('#noticemodal').iziModal({

      width:600,
      top: 100,
      bottom:100,
      radius: 20,
      padding:10,
      icon: 'fa fa-message',
      headerColor: '#0284c7',
      
    });

    $('#noticeoptionmodal').iziModal({

      width:350,
      top: 100,
      bottom:100,
      radius: 20,
      padding:10,
      icon: 'fa fa-info',
      headerColor: '#dc2626',
      
    });



    // slider modal

    
    $('#slidermodal').iziModal({

      width:600,
      top: 100,
      bottom:100,
      radius: 20,
      padding:10,
      icon: 'fa fa-image',
      headerColor: '#0284c7',
      
    });


    // slider delete dialog modal

    $('#slideroptionmodal').iziModal({

      width:350,
      top: 100,
      bottom:100,
      radius: 20,
      padding:10,
      icon: 'fa fa-info',
      headerColor: '#dc2626',
      
    });



    // staff modal  

    $('#staffmodal').iziModal({

      width:600,
      top: 100,
      bottom:100,
      radius: 20,
      padding:10,
      icon: 'fa fa-image',
      headerColor: '#0284c7',
      
    });

     // slider delete dialog modal

     $('#staffoptionmodal').iziModal({

      width:350,
      top: 100,
      bottom:100,
      radius: 20,
      padding:10,
      icon: 'fa fa-info',
      headerColor: '#dc2626',
      
    });





    // close modal function 

   $(document).on('click','.btnclosemodal',function(){

    var modalid = $(this).attr('data-modal');

    $('#'+ modalid).iziModal('close');


   });


    // ***************************************************************************************************************




    // modal loading function


    function modalLoading(modalid){

      $('.'+ modalid).html('<i class="far fa-4x fa-sun fa-spin text-info"></i>');

    }


    // close loading function 
    function closeLoading(modalcontentid){

      $('.'+ modalcontentid).html('');
    }


    // function to hide modal


    function hidemodal(modalid){
      $('#'+ modalid).iziModal('close');

    }


    function shownotification(type,message,icon='',align="right",from="top"){

      Codebase.helpers('jq-notify', {
        align: align,           // 'right', 'left', 'center'
        from: from,               // 'top', 'bottom'
        type: type,               // 'info', 'success', 'warning', 'danger'
        icon:icon,    // Icon class
        message: message
    });

    }
    




    // reloading content function 


    function refreshcontent(contentid,classname,functionname){

      $("#" + contentid).load('processor/processor.php?action=refresh&class='+classname + '&function=' +  functionname);

    }



  // response function 

  function resp(res,modalid,contentid,classname,functionname,location=""){


    var res = JSON.parse(res)

          if(res.type == 'success'){

            hidemodal(modalid);
            shownotification('success',res.message,'fa fa-check');
            refreshcontent(contentid,classname,functionname);

            if(location !=""){
              setTimeout(function(){

                window.location=location;

              },3000)
            }
          }

          else if(res.type == 'warning'){

            shownotification('warning',res.message,'fa fa-info');


          }
          else{

            shownotification('danger',res.message,'fa fa-times');

          }


  }



    // ****************************************************************************************************
    // ******************Notice Section********************************************************************
    


    // Get single notice information

    $(document).on('click', '.editnoticebtn', function(){
     
      var notice_id = $(this).attr('id');
   
      var options = {
        url: 'processor/processor.php?action=getsignlenotice',
        type:'POST',
        data: { 'notice_id': notice_id},
        beforeSend: modalLoading('noticemodalcontent'),
        success: function(response){
          closeLoading("noticemodalcontent")

          $('#noticemodalcontent').html(response);

        }
      };

      $.ajax(options);

    });


    // submitting  the edited notice 
    $(document).on('submit','.frmeditnotice',function(e){

    
      e.preventDefault();
      var options = {
        url: 'processor/processor.php?action=editnotice',
        type: 'post',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: modalLoading('loadingbtnspin'),
        success: function(res){
          console.log('thi is the response '+res);
          resp(res,'noticemodal','noticecont','noticeController','allNotice');
        }
  
      };

      $.ajax(options);



    });


    // get add notice form 
    $(document).on('click','.btnaddnotice',function(){


      var notice_id = $(this).attr('id');
   
      var options = {
        url: 'processor/processor.php?action=getaddnoticeform',
        type:'POST',
        data: { },
        beforeSend: modalLoading('noticemodalcontent'),
        success: function(response){
          closeLoading("noticemodalcontent")

          $('#noticemodalcontent').html(response);

        }
      };

      $.ajax(options);
      


    })


     // submitting  the new notice 
     $(document).on('submit','.frmaddnotice',function(e){

    
      e.preventDefault();
      var options = {
        url: 'processor/processor.php?action=addnotice',
        type: 'post',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: modalLoading('loadingbtnspin'),
        success: function(res){
          console.log('thi is the response '+res);
          resp(res,'noticemodal','noticecont','noticeController','allNotice');
        }
  
      };

      $.ajax(options);

    });

    


    // GETTING delete dialog

    $(document).on('click','.btndeletenotice',function(){

      var notice_id = $(this).attr('id');
      var modalid = "noticeoptionmodal";
   
      var options = {
        url: 'processor/processor.php?action=getdelenoticedailog',
        type:'POST',
        data: { 'notice_id':notice_id,'modalid':modalid},
        beforeSend: modalLoading('noticeoptionmodalcontent'),
        success: function(response){
          closeLoading("noticeoptionmodalcontent")

          $('#noticeoptionmodalcontent').html(response);

        }
      };

      $.ajax(options);
    })




    // SUBMITTING DELETE  NOTICE FORM

    $(document).on('submit','.frmdeletenotice',function(e){

      e.preventDefault();
      var options = {
        url: 'processor/processor.php?action=deletenotice',
        type: 'post',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: modalLoading('loadingbtnspin'),
        success: function(res){
          console.log('thi is the response '+res);
          resp(res,'noticeoptionmodal','noticecont','noticeController','allNotice');
        }
  
      };

      $.ajax(options);



    })


    // *********************END OF NOTICE*************************************************************************************************


    // ***********************************************************************************************************************************
    // ************************BENGIN SLIDER FUCTIONS*************************************************************************************


    // show add slider  form
    $(document).on('click','.btnaddslider',function(){


      var notice_id = $(this).attr('id');
   
      var options = {
        url: 'processor/processor.php?action=getaddsliderform',
        type:'POST',
        data: { },
        beforeSend: modalLoading('slidermodalcontent'),
        success: function(response){
          closeLoading("slidermodalcontent")

          $('#slidermodalcontent').html(response);

        }
      };

      $.ajax(options);
      
    })


    // submit add slider form

    $(document).on('submit','.frmaddslider',function(e){

    
      e.preventDefault();
      var options = {
        url: 'processor/processor.php?action=addslider',
        type: 'post',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: modalLoading('loadingbtnspin'),
        success: function(res){
          console.log('thi is the response '+res);
          $('.loadingbtnspin').html('')
          resp(res,'slidermodal','slidercont','sliderController','allsliders');
        }
  
      };

      $.ajax(options);

    });




    // getting edtting form 

    $(document).on('click','.btneditslider',function(){

      var slider_id = $(this).attr('id');

      var options = {
        url: 'processor/processor.php?action=getsingleslider',
        type:'POST',
        data: {'slider_id':slider_id},
        beforeSend: modalLoading('slidermodalcontent'),
        success: function(response){
          closeLoading("slidermodalcontent")

          $('#slidermodalcontent').html(response);

        }
      };

      $.ajax(options);

    });


    // updating slider 

    $(document).on('submit','.frmeditslider',function(e){

      e.preventDefault();
      var options = {
        url: 'processor/processor.php?action=updateslider',
        type: 'post',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: modalLoading('loadingbtnspin'),
        success: function(res){
          console.log('thi is the response '+res);
          $('.loadingbtnspin').html('')
          resp(res,'slidermodal','slidercont','sliderController','allsliders');
        }
  
      };

      $.ajax(options);

    })

     // GETTING delete dialog for slider

     $(document).on('click','.btndeleteslider',function(){

      var slider_id = $(this).attr('id');
      var modalid = "slideroptionmodal";
   
      var options = {
        url: 'processor/processor.php?action=getdelesliderdailog',
        type:'POST',
        data: { 'slider_id':slider_id,'modalid':modalid},
        beforeSend: modalLoading('slideroptionmodalcontent'),
        success: function(response){
          closeLoading("slideroptionmodalcontent")

          $('#slideroptionmodalcontent').html(response);

        }
      };

      $.ajax(options);
    })






      // SUBMITTING DELETE  SLIDER FORM

      $(document).on('submit','.frmdeleteslider',function(e){

        e.preventDefault();
        var options = {
          url: 'processor/processor.php?action=deleteslider',
          type: 'post',
          data: new FormData(this),
          cache: false,
          contentType: false,
          processData: false,
          beforeSend: modalLoading('loadingbtnspin'),
          success: function(res){
            console.log('thi is the response '+res);
            resp(res,'slideroptionmodal','slidercont','sliderController','allsliders');
          }
    
        };
  
        $.ajax(options);
  
  
  
      })


//**************************END OF SLIDER MENU ****************************************************** */


// ********************************************************************************************************************************************************************************************************************************
// ********************BEGIN ABOUT MENU ****************************************************************************************************************************************************************

$(document).on('submit','.frneditaboutpage',function(e){

  e.preventDefault();
  var options = {
    url: 'processor/processor.php?action=editaboutpage',
    type: 'post',
    data: new FormData(this),
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: modalLoading('loadingbtnspin'),
    success: function(res){
      console.log('thi is the response '+res);
      resp(res,'slideroptionmodal','aboutcont','aboutController','aboutinfo');
    }

  };

  $.ajax(options);



})

// **************************END OF ABOUT MODEL***************************************************************


// ************************************************************************************************************
// *************************BEGIN STAFF MODEL******************************************************************

// show add staff  form
$(document).on('click','.btnaddstaff',function(){


  var notice_id = $(this).attr('id');

  var options = {
    url: 'processor/processor.php?action=getaddstaffform',
    type:'POST',
    data: { },
    beforeSend: modalLoading('staffmodalcontent'),
    success: function(response){
      closeLoading("staffmodalcontent")

      $('#staffmodalcontent').html(response);

    }
  };

  $.ajax(options);
  
})

// submit add staff form

$(document).on('submit','.frmaddstaff',function(e){

    
  e.preventDefault();
  var options = {
    url: 'processor/processor.php?action=addstaff',
    type: 'post',
    data: new FormData(this),
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: modalLoading('loadingbtnspin'),
    success: function(res){
      console.log('thi is the response '+res);
      $('.loadingbtnspin').html('')
      resp(res,'staffmodal','staffcont','staffController','liststaff');
    }

  };

  $.ajax(options);

});

    // getting edtting form 

    $(document).on('click','.btneditstaff',function(){

      var staffid = $(this).attr('id');

      var options = {
        url: 'processor/processor.php?action=getsinglestaff',
        type:'POST',
        data: {'staffid':staffid},
        beforeSend: modalLoading('staffmodalcontent'),
        success: function(response){
          closeLoading("staffmodalcontent")

          $('#staffmodalcontent').html(response);

        }
      };
      $.ajax(options);

    });


    // updating staff 

    $(document).on('submit','.frmeditstaff',function(e){

      e.preventDefault();
      var options = {
        url: 'processor/processor.php?action=updatestaff',
        type: 'post',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: modalLoading('loadingbtnspin'),
        success: function(res){
          console.log('thi is the response '+res);
          $('.loadingbtnspin').html('')
          resp(res,'staffmodal','staffcont','staffController','liststaff');
        }
  
      };

      $.ajax(options);

    })


     // GETTING delete dialog for staff

     $(document).on('click','.btndeletestaff',function(){

      var staff_id = $(this).attr('id');
      var modalid = "staffoptionmodal";
   
      var options = {
        url: 'processor/processor.php?action=getdelestaffdailog',
        type:'POST',
        data: { 'staff_id':staff_id,'modalid':modalid},
        beforeSend: modalLoading('staffoptionmodalcontent'),
        success: function(response){
          closeLoading("staffoptionmodalcontent")

          $('#staffoptionmodalcontent').html(response);

        }
      };

      $.ajax(options);
    })




     // SUBMITTING DELETE  staff FORM

     $(document).on('submit','.frmdeletestaff',function(e){

      e.preventDefault();
      var options = {
        url: 'processor/processor.php?action=deletestaff',
        type: 'post',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: modalLoading('loadingbtnspin'),
        success: function(res){
          console.log('thi is the response '+res);
          resp(res,'staffoptionmodal','staffcont','staffController','liststaff');
        }
  
      };

      $.ajax(options);



    })



    // ****************************************************************************************************************
    // *********************Appp  MODEL*******************************************************************************()
    // updating appsettings 

    $(document).on('submit','.appfrm',function(e){

      e.preventDefault();
      var options = {
        url: 'processor/processor.php?action=updateappsettings',
        type: 'post',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: modalLoading('loadingbtnspin'),
        success: function(res){
          console.log('thi is the response '+res);
          $('.loadingbtnspin').html('')
          resp(res,'staffmodal','appsettingscont','appController','appsettingsdata');
        }
  
      };

      $.ajax(options);

    })


    // admin login 

    $(document).on('submit','.frmlogin',function(e){

      e.preventDefault();
      var options = {
        url: 'processor/processor.php?action=login',
        type: 'post',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: modalLoading('loadingbtnspin'),
        success: function(res){
          console.log('thi is the response '+res);
          $('.loadingbtnspin').html('')
          resp(res,'staffmodal','appsettingscont','appController','appsettingsdata','dashboard');
        }
  
      };

      $.ajax(options);

    })








   







    
})