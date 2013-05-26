$(document).ready(function(){//replaced with deviceready phonegap function

//document.addEventListener("deviceready", function(){


//document.addEventListener("orientationchange", updateLayout);

/*
$('body').on('touchstart mousedown', function(){
    var page_Scroller = $('#pageScroller').position()
    $('#measure').text(page_Scroller.left);
});*/

$('#360sprite2').on('touchstart mousedown', function(){
    myScroll.disable()
});
$('#360sprite2').on('touchend mouseup', function(){
    myScroll.enable()
});

$('#pinch_zoom_pic').on('touchstart mousedown', function(){
    myScroll.disable()
});
$('#pinch_zoom_pic').on('touchend mouseup', function(){
    myScroll.enable()
});

// The wrapperWidth before orientationChange. Used to identify the current page number in updateLayout();
wrapperWidth = 0;

var myScroll = new iScroll('pageWrapper', {
	snap: true,
	momentum: false,
	hScrollbar: false,
	vScrollbar: false,
    lockDirection: true
});
    
updateLayout();

function updateLayout() {

    var currentPage = 0;

    if (wrapperWidth > 0) {
        currentPage = - Math.ceil( $('#pageScroller').position().left / wrapperWidth);
    }//this just works out the current page so that on a layout change the user won't be scrolled somewhere else

    wrapperWidth = $('#pageWrapper').width();

    $('#pageScroller').css('width', wrapperWidth * 7);
    $('.page').css('width', wrapperWidth - 60);//was - 40 // working out the .page width its simply the wrapper width - the padding and margins I think
    myScroll.refresh();
    myScroll.scrollToPage(currentPage, 0, 0);

};

//page2Scroll = new iScroll('wrapper_pg2', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page2Scroll = new iScroll('wrapper_pg2', {zoom: true});
page3aScroll = new iScroll('wrapper_pg3', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page4Scroll = new iScroll('wrapper_pg4', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page5Scroll = new iScroll('wrapper_pg5', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page6Scroll = new iScroll('wrapper_pg6', {hScrollbar: false, vScrollbar: true, lockDirection: true });
//page3Scroll = new iScroll('wrapper', {hScrollbar: false, vScrollbar: true, lockDirection: true });

/*SPRITESPIN*/

$(function(){
      
      $("#360sprite").spritespin({
        width     : 480,
        height    : 327,
        frames    : 34,
        framesX   : 6,
        behavior  : "drag",
        module    : "360",
        sense     : -1,
        source    : "images/bike6x6.jpg",
        animate   : true,
        loop      : false,
        frameWrap : true,
        frameTime : 60,
        enableCanvas : false
      });
      
      $("#360sprite2").spritespin({
        width     : 480,
        height    : 327,
        frames    : 34,
        framesX   : 6,
        behavior  : "drag",
        module    : "360",
        sense     : -1,
        source    : "images/bike6x6.jpg",
        animate   : true,
        loop      : false,
        frameWrap : true,
        frameTime : 60,
        enableCanvas : false,
        preloadCss: "position: relative; display: block;"
      });
      $("#360sprite3").spritespin({
        width     : 480,
        height    : 327,
        frames    : 34,
        framesX   : 6,
        behavior  : "drag",
        module    : "360",
        sense     : -1,
        source    : "images/bike6x6.jpg",
        animate   : true,
        loop      : false,
        frameWrap : true,
        frameTime : 60,
        enableCanvas : false,
        preloadCss: "position: relative; display: block;"
      });

    });

    
});


