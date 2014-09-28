/**
 * Juan Luis García Borrego
 * @JuanluGarciaB
 */
$(document).ready(function(){
    $('.icoMenuMovil img').click(function(e){
        e.preventDefault();
        $(".menuPortada ul").toggle();
    });
});