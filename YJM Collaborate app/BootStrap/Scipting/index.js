//WENNONA WELLS

//FOOTER JS//
function footerDiv() {
    let footer = document.getElementById("yjmFooter");
    footer.style.backgroundColor = "Firebrick";
    footer.style.color = "white";
    footer.style.columnCount = "7";
    footer.classList.add("footer");
    footer.classList.add("footerAlign");

 
 }
 footerDiv();

//LOGIN JS//

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