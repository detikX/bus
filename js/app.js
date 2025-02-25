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

// $('.busbus').slick();
// $('.busbus').on('afterChange', function () {
//     AOS.refresh(); // Refresh AOS on slide change
// });
// $('.hahaa').slick();

// $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

//     var $status = $('jum');
//     var perPage = 5;
//     var total = slick.$dots[0].children.length;
//     var i = currentSlide > 0 ? currentSlide / perPage : 0;
//     $status.text(i + ' / ' + total);

// })

var $slider = $('.busbus');
$('.slider-bus .data').attr({ 'data-aos': 'fade-in' })
$('.slider-bus .data-one').attr({ 'data-aos-delay': '1000', 'data-aos-duration': '500' })
$('.slider-bus .data-two').attr({ 'data-aos-delay': '1500', 'data-aos-duration': '500' })
$('.slider-bus .data-three').attr({ 'data-aos-delay': '1700', 'data-aos-duration': '1500' })
$('.slider-bus .data-four').attr({ 'data-aos-delay': '2000', 'data-aos-duration': '1500' })
$('.slider-bus .data-five').attr({ 'data-aos-delay': '2500', 'data-aos-duration': '500' })
$('.slider-bus .data-six').attr({ 'data-aos-delay': '3000', 'data-aos-duration': '500' })
$('.slider-bus .data-zero').attr({ 'data-aos-delay': '3000', 'data-aos-duration': '2000' })
$('.slider-bus .imagex').attr({ 'data-aos': 'fade-up', 'data-aos-delay': '1500', 'data-aos-duration': '1000' })

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

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // $('.slider-bus .data').removeClass('animate__fadeIn'); // Remove previous animation
        // $('.slider-bus .data').removeClass('animate__fadeIn');
    });
    $slider.on('afterChange', function (event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
        // $('.slider-bus .data').addClass('animate__animated animate__fadeIn');
        // $('.slider-bus .data').addClass('animate__animated animate__fadeIn'); // Apply animation to active slide
        AOS.refresh(); // Refresh AOS after slide change
    });

    $slider.slick();
}

// $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//     $('.slick-slide h2').removeClass('animate__fadeIn'); // Remove previous animation
// });

// $('.slider').on('afterChange', function (event, slick, currentSlide) {
//     $('.slick-active h2').addClass('animate__animated animate__fadeIn'); // Apply animation to active slide
//     AOS.refresh(); // Refresh AOS after slide change
// });


//clock

// Function to update the clock hands
function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    // Calculate degrees for each hand
    const hourDeg = (hour * 30) + (minute * 0.5); // 30 degrees per hour + 0.5 degrees per minute
    const minuteDeg = (minute * 6) + (second * 0.1); // 6 degrees per minute + 0.1 degrees per second
    const secondDeg = second * 6; // 6 degrees per second

    // Apply rotation to hands
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock