// تفعيل الوضع المظلم/الفاتح
document.getElementById("toggle-dark-mode").addEventListener("click", function () {
    const currentTheme = document.body.getAttribute("data-theme");
    if (currentTheme === "dark") {
        document.body.setAttribute("data-theme", "light");
    } else {
        document.body.setAttribute("data-theme", "dark");
    }
});

// إظهار تفاصيل الإنجاز عند النقر
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}
