$(document).ready(function(){//replaced with deviceready phonegap function

//document.addEventListener("deviceready", function(){


//document.addEventListener("orientationchange", updateLayout);

//Prevent back button from working??
$('.page').on('backbutton',
     function(e){
         e.preventDefault();
});

// handling the cover page
var $cover_img = $('.cover_img');
var $cover_div = $('.cover_div');
    
    $cover_img.css('width', $(window).width());
    // just playing with one images' position
    /*
    $cover_img.css('position', 'relative');
    $cover_img.css('top', '-1200px');
    */
   
    $cover_div.css('width', $(window).width());
    $cover_div.css('height', $(window).height());
    $cover_div.css('overflow', 'hidden');

// Handling a form submission
    $('body').on('tap click', '.button_popup', function (){
        myScroll.disable()
        $('#form_well').show();
        $('#form_popup').show();
    });
    $('body').on('tap click', '#form_close', function (){
        myScroll.enable()
        $('#form_popup').hide();
    });
    
    
    $('#pg_request_form').submit(function(){
        var email = $('#pg_email').val();
        $.ajax({
            type: 'POST',
            data: {email:email},
            url: 'http://e-m-i-l-e.appspot.com/pg_request',
            success: function(data){
                console.log(data);
                alert('Your comment was successfully added');
            },
            error: function(data){
                console.log(data);
                alert('There was an error adding your comment');
            }
        });
        return false;
    });


/*
$('body').on('touchstart mousedown', function(){
    var page_Scroller = $('#pageScroller').position()
    $('#measure').text(page_Scroller.left);
});*/

// handling other touch events within scroller 3D rotator and pinch zoom
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

$('.zoom_container').on('touchstart mousedown', function(){
    page7Scroll.enable()
    myScroll.disable()
});
$('.zoom_container').on('touchend mouseup', function(){
    page7Scroll.disable()
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
page7Scroll = new iScroll('wrapper_pg7', {zoom: true, hScrollbar: false, vScrollbar: false});
page7Scroll.disable()// disable pinch area within scroll area only enable when in use
//page3Scroll = new iScroll('wrapper', {hScrollbar: false, vScrollbar: true, lockDirection: true });

/*SPRITESPIN*/

$(function(){
      
      /*$("#360sprite").spritespin({
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
      });*/
      
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


