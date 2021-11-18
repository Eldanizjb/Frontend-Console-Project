window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 150) {
        document.querySelector(".navbar-expand-lg ").classList.add("active");
    } else {
        document.querySelector(".navbar-expand-lg ").classList.remove("active");
    }
});

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


function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


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