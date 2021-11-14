window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 150) {
        document.querySelector(".navbar-expand-lg ").classList.add("active");
    } else {
        document.querySelector(".navbar-expand-lg ").classList.remove("active");
    }
});
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




// //Header slider//
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 1500); // Change image every 2 seconds
}

//carusel//
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

//counter//
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





var toggler = document.getElementsByClassName("leftside");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        document.querySelector(".first-tab").style.display = "block";
        document.querySelector(".last-tab").style.display = "none";
        // this.classList.toggle("caret-down");
    });
}
var toggler = document.getElementsByClassName("rightside");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        document.querySelector(".first-tab").style.display = "none";
        document.querySelector(".last-tab").style.display = "block";
        // this.classList.toggle("caret-down");
    });
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}