$(document).ready(function(){
    var starting = true;
    $("button").click(function(){
        if (starting == true) {
            $("img").animate({left: '1700px'});
            starting = false
        } else {
            $("img").animate({left: '458px'});
            starting = true
        }
        
    });
});
