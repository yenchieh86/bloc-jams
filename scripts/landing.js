var animatePoints = function() {
    var revealPoint = function() {
        $(this).css({
            opacity: 1,
            transform: 'scaleX(1) translateY(0)'
        });
    };
    $.each($('.point'), revealPoint);
};

$(window).ready(function() {
    if ($(window).height() > 950) {
        animatePoints();
    }

    var scrollDistance = $('.selling-Points').offset().top - $(window).height() + 200;

    $(window).scroll(function(event){
        if ($(window).scrollTop() >= scrollDistance) {
            animatePoints();
        }
    });
});