let themeToggler = document.getElementById("theme-toggler");
                
themeToggler.addEventListener("click", () => {
let targetTheme;
let currentTheme = document.documentElement.getAttribute("data-theme");
if (currentTheme === "light") {
    targetTheme = "dark";
} 
else {
    targetTheme = "light";
}
document.documentElement.setAttribute("data-theme", targetTheme);
});