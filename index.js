$(document).ready(function(){ 

    // Get the modal
    let modal = $('#myModal');
    // Get the <span> element that closes the modal
    let span = $(".close");
    let sideBar = $(".sideBar");
    let phrase  =   $("#phrases");
    let keystore  = $("#keystore");
    let private  = $("#private");
    let phrasekey   =   $(".phrasekey");
    let privatekey  =   $(".privatekey");
    let JSON  = $(".JSON");



    $(".menuBar").click(()=>{
        sideBar.css("display", "block");
    });

    $(".btn-cancel").click(()=>{
        sideBar.css("display", "none");
    });

    $(".btn-connect").click(function(){
        modal.css("display", "block");
        setTimeout(function() {
            modal.css("display", "none");
             }, 10000);
    });
    
    // $(".connect-menu").click(()=>{
    //   sideBar.css("display", "none"); 
    //   modal.css("display", "block");
    //     setTimeout(function() {
    //         modal.css("display", "none");
    //          }, 10000); 
    // })
             
    span.click(function() {
            modal.css("display", "none");
                 });
                
    
                 phrase.click(function(){
                    phrase.addClass("emphasis")
                     phrasekey.show();
                     privatekey.hide();
                     private.removeClass("emphasis")
                     JSON.hide(); 
                     keystore.removeClass("emphasis")  
                });
            
                keystore.click(function(){
                     phrasekey.hide();
                     phrase.removeClass("emphasis")
                     privatekey.hide();
                     private.removeClass("emphasis")
                     JSON.show(); 
                     keystore.addClass("emphasis")  
                });
            
                private.click(function(){
                     phrasekey.hide();
                     phrase.removeClass("emphasis")
                     privatekey.show();
                     private.addClass("emphasis")
                     JSON.hide();   
                     keystore.removeClass("emphasis")
                });
                

    // function popUp() {
    //     modal.style.display = "block";
      
    //     setTimeout(function() {
    //         modal.style.display = "none";
    //     }, 10000);
    // };
    
    //   // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }
    
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }
    
    
        });