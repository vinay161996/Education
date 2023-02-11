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




