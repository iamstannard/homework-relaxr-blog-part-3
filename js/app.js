/*global document, $, console*/

(function () {
    'use strict';

    $(document).ready(function () {

        /* ----- Begin writing your JavaScript here  ------*/

        var slideDuration = 500; // milliseconds

        function readMore(e) {
            //console.log('readMore');
            e.preventDefault();
            $('#posts .readmore').hide();
            $('#show-this-on-click').slideDown(slideDuration);
            $('#posts .readless').show();
        }

        function readLess(e) {
            //console.log('readLess');
            e.preventDefault();
            $('#posts .readless').hide();
            $('#show-this-on-click').slideUp(slideDuration);
            $('#posts .readmore').show();
        }

        function learnMore(e) {
            //console.log('learnMore');
            e.preventDefault();
            $('#sidebar .learnmore').hide();
            $('#learnmoretext').slideDown(slideDuration);
        }

        $('#posts .readmore').click(readMore);
        $('.readless').click(readLess);
        $('#sidebar .learnmore').click(learnMore);

        /* ----- Finish writing your JavaScript here  -----*/

    });
}());