import $ from "jquery";

$(document).ready(function (){
    $('.sidebar__burger').on('click',function (){
        event.preventDefault();
        $(this).toggleClass('active');
        $('.sidebar__global').toggleClass('active');
        $('body').toggleClass('active');
    });

    $('.sidebar__menu-item').on('click',function (){
        if (!$(this).hasClass('selected')){
            $(this).addClass('selected').siblings().removeClass('selected');
            getDropdownPositon()
        }
    });

    $('.sidebar__mobile-year').on('click',function (){
        event.preventDefault();
        $('.sidebar__menu').toggleClass('active');
        getDropdownPositon();
    })
});


function getDropdownPositon(){
    if ($(window).width() <= 699) {
        let parent = $('.sidebar__menu-item.selected');
        let element = parent.find('.sidebar__menu-dropdown');
        let menuPadding = parseInt($('.sidebar__menu').css('padding-top'));
        let fromTop = parent.offset().top;
        let fromTopMenu = $('.sidebar__menu').offset().top;
        element.css('top', -1 * (fromTop - fromTopMenu - menuPadding - 1))
    }
}