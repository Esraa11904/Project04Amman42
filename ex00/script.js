const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
    const currentTheme = document.body.getAttribute("data-theme");

    if (currentTheme === "dark") {
        document.body.removeAttribute("data-theme");
    } else {
        document.body.setAttribute("data-theme", "dark");
    }
});

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message!");
    contactForm.reset();
});