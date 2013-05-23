document.addEventListener("orientationchange", updateLayout);

// The wrapperWidth before orientationChange. Used to identify the current page number in updateLayout();
wrapperWidth = 0;

var myScroll = new iScroll('pageWrapper', {
	snap: true,
	momentum: false,
	hScrollbar: false,
	vScrollbar: false,
    lockDirection: true});

updateLayout();

function updateLayout() {

    var currentPage = 0;

    if (wrapperWidth > 0) {
        currentPage = - Math.ceil( $('#pageScroller').position().left / wrapperWidth);
    }

    wrapperWidth = $('#pageWrapper').width();

    $('#pageScroller').css('width', wrapperWidth * 7);
    $('.page').css('width', wrapperWidth - 40);
    myScroll.refresh();
    myScroll.scrollToPage(currentPage, 0, 0);
}

page2Scroll = new iScroll('wrapper_pg2', {hScrollbar: false, vScrollbar: false, lockDirection: true });
page3aScroll = new iScroll('wrapper_pg3', {hScrollbar: false, vScrollbar: false, lockDirection: true });
page4Scroll = new iScroll('wrapper_pg4', {hScrollbar: false, vScrollbar: false, lockDirection: true });
page5Scroll = new iScroll('wrapper_pg5', {hScrollbar: false, vScrollbar: false, lockDirection: true });
page3Scroll = new iScroll('wrapper', {hScrollbar: false, vScrollbar: false, lockDirection: true });