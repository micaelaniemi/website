window.onscroll = function() {
    const backToTop = document.getElementById("backToTop");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
};

document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});