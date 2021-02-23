AOS.init({
    duration: 800,
    delay: 400,
    once: true,
    disable: 'mobile',
});

const btnScrollTop = document.querySelector(".arrow");

btnScrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});

function showBtnScroll() {
    if (window.scrollY > 0) {
        btnScrollTop.classList.add("active");
    }

    else {
        btnScrollTop.classList.remove("active");
    }
}

window.addEventListener("scroll", showBtnScroll);
