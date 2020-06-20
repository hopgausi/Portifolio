$(document).ready(function(e) {
    $win = $(window);
    $mheader = $('#main-header');
    var width = $mheader.width();
    $tog = $('.tog');

    toggler_onclick($win, $mheader, width);

    $win.resize(function() {
        toggler_onclick($win, $mheader, width);
    });

    $tog.click(function(e) {
        $mheader.toggleClass('tog-left');
    });


});

function toggler_onclick($win, $mheader, width) {
    if ($win.width() < 768) {
        $mheader.css({ left: `-${width}px` });
    } else {
        $mheader.css({ left: `0px` });
    }
}

//typed'
var typed = new Typed('#type', {
    strings: ['Web Developer', 'Data Scientist'],
    showCursor: true,
    cursorChar: '|',
    loop: true,
    backSpeed: 50,
    typeSpeed: 50,

});