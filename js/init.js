/*==========Header_slider=========*/
$('.section_slider-box').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

/*============Back_to_top============*/

$(window).scroll(function () {

    if ($(this).scrollTop() > 800) {
        $('.back_to_top').addClass('active');
    }

    else {
        $('.back_to_top').removeClass('active');
    }

});

$('.back_to_top').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});

/*==========Company Slider==========*/

$('.employee_slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 451,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

/*==============Sub_title===========*/
document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault()
});


$('.add_to_favorites').click(function () {
    alert("Нажмите CTRL + D для добавления в закладки.")
});
