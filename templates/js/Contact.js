window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 150) {
        document.querySelector(".navbar-expand-lg ").classList.add("active");
    } else {
        document.querySelector(".navbar-expand-lg ").classList.remove("active");
    }
});

// window.addEventListener("scroll", function() {
//     var header = this.document.querySelector("header");
//     header.classList.toggle("navbar-expand-lg", window.scrollY > 0)
// })


// {
//     const nav = document.querySelector(".navbar-expand-lg-height");

//     let lastScrollY = window.scrollY;
//     window.addEventListener("scroll", () => {
//         if (lastScrollY < window.scrollY) {
//             nav.classList.add("nav--hidden");
//         } else {
//             nav.classList.remove("nav--hidden");
//         }
//         lastScrollY = window.scrollY;
//     });
// }

// let names = document.querySelector("[name='name']").value;
// let emails = document.querySelector("[name='email']").value;
// let phones = document.querySelector("[name='phone_number']").value;
// let subjects = document.querySelector("[name='msg_subject']").value;
// let messages = document.querySelector("[name='message']").value;

// if (names == "") {
//     document.querySelector(".first").style.display = "inline";
// };
// if (emails == "") {
//     document.querySelector(".second").style.display = "inline";
// };
// if (phones == "") {
//     document.querySelector(".third").style.display = "inline";
// };
// if (subjects == "") {
//     document.querySelector(".four").style.display = "inline";
// };
// if (messages == "") {
//     document.querySelector(".five").style.display = "inline";
// };

// if ()


//     if (names == "" || emails == "" || phones == "" || subjects == "" || messages == "") {
//     return;
// }