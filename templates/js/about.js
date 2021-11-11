$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 2
        }
    }
})

let Counter = (element, stepParam, countParam, speed) => {
    let i = 0;

    let CountUp = (step, count) => {
        if (i >= (count - 100)) {
            step = 1;
        }
        i = i + step;

        if (i >= count) {
            i = count;
            clearInterval(counterInterval);
        }

        element.innerHTML = i;
    }

    let counterInterval = window.setInterval(() => {
        CountUp(stepParam, countParam);
    }, speed);
}

let counterElement = document.querySelector(".counter");
Counter(counterElement, 10, 850, 10);

let counterElement2 = document.querySelector(".counter2");
Counter(counterElement2, 10, 850, 10);

let counterElement3 = document.querySelector(".counter3");
Counter(counterElement3, 50, 120, 30);

let counterElement4 = document.querySelector(".counter4");
Counter(counterElement4, 60, 50, 60);