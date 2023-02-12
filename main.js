let nav = document.querySelector("nav");
let faq = document.querySelectorAll(".faq");



// navbar setting
window.addEventListener("scroll", () => {
    nav.classList.toggle("window-scroll", window.scrollY > 0);
})

// faq answer
function addAnswer(item) {
    item.classList.toggle("open");
    let icon = item.querySelector('i');
    icon.classList.toggle("uil-plus");
    icon.classList.toggle("uil-minus");
};

faq.forEach(item => {
    item.addEventListener('click', function () {
        addAnswer(item)
    })
})

// navmenu open and close 
const navMenu = document.querySelector('.nav-menu');
const navOpenBtn = document.querySelector('#open-menu');
const navCloseBtn = document.querySelector('#close-menu');

const operateNavMenu = (item) => {
    if (item.id === "open-menu") {
        navMenu.style.display = "flex"
        navOpenBtn.style.display = 'none';
        navCloseBtn.style.display = 'inline-block';
    } else if (item.id === "close-menu") {
        navMenu.style.display = "none"
        navOpenBtn.style.display = 'inline-block';
        navCloseBtn.style.display = 'none';

    }

};
navOpenBtn.addEventListener('click', function () {
    operateNavMenu(navOpenBtn);
})
navCloseBtn.addEventListener('click', function () {
    operateNavMenu(navCloseBtn);
})
