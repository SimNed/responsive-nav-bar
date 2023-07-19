let toggle = document.querySelector(".nav-toggle");
let body = document.querySelector("body");

toggle.addEventListener('click', () => {
    body.classList.toggle('opened');
})