/*global document, $ */

(function () {
    'use strict';

    $(document).ready(function () {

        /* ----- Begin writing your JavaScript here  ------*/

        var slideDuration = 500; // milliseconds

        function readMore() {
            console.log('readMore');
            $('#posts .readmore').hide();
            $('#show-this-on-click').slideDown(slideDuration);
            $('#posts .readless').show();
        }

        function readLess() {
            console.log('readLess');
            $('#posts .readless').hide();
            $('#show-this-on-click').slideUp(slideDuration);
            $('#posts .readmore').show();
        }

        function learnMore() {
            console.log('learnMore');
            $('#sidebar .learnmore').hide();
            $('#learnmoretext').slideDown(slideDuration);
        }

        $('#posts .readmore').click(readMore);
        $('.readless').click(readLess);
        $('#sidebar .learnmore').click(learnMore);

        /* ----- Finish writing your JavaScript here  -----*/

    });
}());