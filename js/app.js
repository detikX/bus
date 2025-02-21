$(document).ready(function () {
    AOS.init();
    new WOW().init();
})


gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panelx");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".containerx",
        pin: true,
        scrub: 1,

        end: () => "+=" + document.querySelector(".containerx").offsetWidth
    }
});

$('.datax .small').hide();

$(".sulap").click(function () {
    $('.datax .small').fadeToggle();
    $('.datax li').toggleClass('wihi')
})


// $('.hahaa').slick();

// $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

//     var $status = $('jum');
//     var perPage = 5;
//     var total = slick.$dots[0].children.length;
//     var i = currentSlide > 0 ? currentSlide / perPage : 0;
//     $status.text(i + ' / ' + total);

// })

var $slider = $('.hahaa');

if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');

    var updateSliderCounter = function (slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + '/' + slidesCount)
    };

    $slider.on('init', function (event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick();
}