// $(document).ready(function(){
//     $("mobile").click(function(){
//       $(".sidebar").slideToggle('fast');
//     });
//     window.resize = function(event){
//       if($(window).width() > 320){
//         $(".sidebar").show();
//       }
//     };
//   });

  function footerDiv() {
    let footer = document.getElementById("yjmFooter");
    footer.style.backgroundColor = "Firebrick";
    footer.style.color = "white";
    footer.style.columnCount = "5";
    footer.classList.add("footer");
    footer.classList.add("footerAlign");

 
 }
 footerDiv();