document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".main");
    const prevBtn = document.getElementById("left-btn");
    const nextBtn = document.getElementById("right-btn");
    const circles = document.querySelectorAll(".circles .circle"); // Corrected selector
    let currentTheme = 1;
    const totalThemes = 3;

    function changeTheme(theme) {
        section.className = "main"; // Remove all existing theme classes
        section.classList.add(`theme${theme}`); // Add new theme class

        circles.forEach((circle, index) => {
            if (index + 1 === theme) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
    }

    prevBtn.addEventListener("click", function () {
        currentTheme = currentTheme === 1 ? totalThemes : currentTheme - 1;
        changeTheme(currentTheme);
    });

    nextBtn.addEventListener("click", function () {
        currentTheme = currentTheme === totalThemes ? 1 : currentTheme + 1;
        changeTheme(currentTheme);
    });

    // Initially set the first theme
    changeTheme(currentTheme);
});
