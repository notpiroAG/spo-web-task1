

function mobileViewHandler  (){

    var screenWidth = window.innerWidth;

     if(screenWidth <= 500){
        $("div").addClass("same-width");
    }
    else{
        $("div").removeClass("same-width");
    }
}
addEventListener('resize',mobileViewHandler);