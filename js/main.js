$(document).ready(function(){

    //menu
    $('a').click(function(){

        $('a.active').removeClass('active');

        $(this).addClass('active');

    });

});