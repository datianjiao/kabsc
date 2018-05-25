// document ready event
$(document).ready(function () {
    // Show-hide footer for mobile version
    $('#footer_openclose_button').on('click', function (event) {
        if ($('#footer').hasClass('closed')) {
            $('#footer').removeClass('closed');
            $('#footer_openclose_button').removeClass('closed');
            $('#footer').animate({height: '160px'}, 250);
        }
        else {
            $('#footer').addClass('closed');
            $('#footer_openclose_button').addClass('closed');
            $('#footer').animate({height: '50px'}, 250);
        }
    });

    // Show download
    $('#footer_screensaver').on('click', function (event) {
        $("#header, #footer, #content").addClass("blured");
        $('#screensaver_download_popup').show();
        return false;
    });

    $('#screensaver_download_popup .popclose').on('click', function (event) {
        $('#screensaver_download_popup').hide();
        $("#header, #footer, #content").removeClass("blured");
        return false;
    });
});

$(window).resize(function() {
if (!$('#footer').hasClass('closed')) {
    $('#footer').addClass('closed');
    $('#footer_openclose_button').addClass('closed');
    $('#footer').animate({height: '50px'}, 250);
}});