// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

jQuery.fn.exists         = function(){return this.length>0;}
jQuery.fn.centerWidth    = function(){
    var winWidth    = $( window ).width() / 2;
    var elemWidth   = $( this ).width() / 2;
    var elemLeft    = winWidth - elemWidth;

    this.css( 'left', elemLeft + 'px' );
}
jQuery.fn.centerHeight = function(){
    var winHeight = $(window).height() / 2;
    var elemHeight = $( this ).height() / 2;
    var elemTop = winHeight - elemHeight;

    this.css( 'top', elemTop + 'px' );
}
//
//  @codekit-append "vendor/jquery.form.js", "vendor/jquery.validate.js", "vendor/additional-methods.js", "vendor/jquery.tools.custom.min.js", "vendor/jquery.scrollTo-1.4.3.1.js";