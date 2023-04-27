import $ from "jquery";
import Isotope from 'isotope-layout';

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

if (typeof Drupal === 'undefined') {
    var grid = document.querySelector('.grid');
    var iso = new Isotope( grid, {
        itemSelector: '.card-person',
        percentPosition: true,
        masonry: {
            columnWidth: ".card-person",
            gutter: 20,
        }
    });
}
else {
    (function ($, Drupal) {
        Drupal.behaviors.tiqumModule = {
            attach: function attach() {
                var grid = document.querySelector('.grid');
                if (grid) {
                    var iso = new Isotope( grid, {
                        itemSelector: '.card-person',
                        percentPosition: true,
                        masonry: {
                            columnWidth: ".card-person",
                            gutter: 20,
                        }
                    });
                }
            }
        };
    })(jQuery, Drupal);
}
