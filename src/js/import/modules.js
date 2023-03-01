import $ from "jquery";

$(document).ready(function (){
    $('.sidebar__burger').on('click',function (){
        event.preventDefault();
        $(this).toggleClass('active');
        $('.sidebar__global').toggleClass('active');
        $('body').toggleClass('active');
    });
});