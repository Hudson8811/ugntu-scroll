import $ from "jquery";

addEventListener('beforeunload', (event) => { });
onbeforeunload = (event) => {
	window.scrollTo(0, 0);
};

$(window).on('load',function (){

    if ($('.home-page').length > 0)
    {
        require("./years/_y1940");
    }
    else if ($('.y1950').length > 0)
    {
        require("./years/_y1950");
    }



});
