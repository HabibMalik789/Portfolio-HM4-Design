let scrollTopBtn = document.querySelector(".scroll-top-button");

window.addEventListener("scroll", () => {
if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("show");
} else {
    scrollTopBtn.classList.remove("show");
}
});

var loader = document.querySelector("#preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});

const typed = new Typed('.multiple-text',{
    strings:['Frontened Developer','YouTuber','Blogger'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

//animated text
