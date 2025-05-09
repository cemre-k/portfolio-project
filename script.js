// Select all sections and nav buttons
const sections = document.querySelectorAll("section");
const navBtns = document.querySelectorAll(".nav-element");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const bodyEl = document.querySelector("body");

// Create an IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const activeNav = document.querySelector(`[data-link="${entry.target.id}"]`);
            navBtns.forEach((btn) => btn.classList.remove("active-nav"));            
            if (activeNav) activeNav.classList.add("active-nav");
        }
    });
}, {
    threshold: 0.5 
});


sections.forEach((section) => observer.observe(section));

themeToggleBtn.addEventListener("click" , ()=> {
    bodyEl.classList.toggle("dark");
})