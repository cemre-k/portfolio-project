// Select all sections and navigation buttons for IntersectionObserver
const sections = document.querySelectorAll("section");
const navBtns = document.querySelectorAll(".nav-element");

// Select the theme toggle button and body element
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const bodyEl = document.querySelector("body");

// Retrieve the user's dark mode preference from localStorage
let darkmode = localStorage.getItem("darkmode");

/* 
 * IntersectionObserver: Highlights the active navigation button
 * when the corresponding section is visible in the viewport.
 */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Find the navigation button linked to the visible section
            const activeNav = document.querySelector(`[data-link="${entry.target.id}"]`);
            
            // Remove the "active-nav" class from all buttons
            navBtns.forEach((btn) => btn.classList.remove("active-nav"));
            
            // Add the "active-nav" class to the corresponding button
            if (activeNav) activeNav.classList.add("active-nav");
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the section is visible
});
sections.forEach((section) => observer.observe(section));
/* 
 * Enables dark mode by adding the "dark" class to the body
 * and saving the preference in localStorage.
 */
function enableDarkMode() {
    bodyEl.classList.add("dark");
    localStorage.setItem("darkmode", "active");
}

/* 
 * Disables dark mode by removing the "dark" class from the body
 * and saving the preference in localStorage.
 */
function disableDarkMode() {
    bodyEl.classList.remove("dark");
    localStorage.setItem("darkmode", "not");
}

// Apply the saved dark mode preference on page load
if (darkmode === "active") {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Toggle dark mode when the theme toggle button is clicked
themeToggleBtn.addEventListener("click", () => {
    if (darkmode) {
        if (darkmode !== "active") {
            enableDarkMode(); // Switch to dark mode
            darkmode = "active"; // Update the preference
        } else {
            disableDarkMode(); // Switch to light mode
            darkmode = "not"; // Update the preference
        }
    } else {
        enableDarkMode(); // Default to enabling dark mode
        darkmode = "active"; // Update the preference
    }
});