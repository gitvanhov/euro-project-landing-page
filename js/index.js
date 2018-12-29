$(document).ready(function(){

    //top menu
    $('.topnav a').click(function(){

        $('a.active').removeClass('active');

        $(this).addClass('active');

    });

        //bottom menu
        $('.bottomnav a').click(function(){

            $('a.active').removeClass('active');

            var topRefId = this.id.replace('bottom', 'top');

            $('#'+topRefId).addClass('active');
    
            console.log(this);
    
        });

});