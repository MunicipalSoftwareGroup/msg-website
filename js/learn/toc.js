$(document).on('click', '.dropdown', function() {

        if (!$(this).children('.chevron').hasClass('rotate90chevron')) {
            console.log("rotate1");
            $(this).children('.chevron').addClass('rotate90chevron');
        } else {
            console.log("rotate2");
            $(this).children('.chevron').removeClass('rotate90chevron');
        }

        $(this).parent().children('ul').toggle();
    });