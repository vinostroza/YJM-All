function login(){
   var x = document.getElementById('houdini');
    if(x.style.display === 'none'){
        x.style.display ='block';
    }else{
        x.style.display = 'none';
    }
    // AFTER BUTTON IS CLICKED, ADMIN USER IS SSO TO ADMIN PAGE FOR LOGIN //
location.href="Admin.html";
} 