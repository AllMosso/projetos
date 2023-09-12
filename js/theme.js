let themeToggler = document.getElementById("theme-toggler");
                
themeToggler.addEventListener("click", () => {
let targetTheme = "o";

console.log("ss")

let currentTheme = document.documentElement.getAttribute("data-theme") ? "dark" : document.documentElement.getAttribute("data-theme")
if (currentTheme === "light") {
    targetTheme = "dark";
}
else {
    targetTheme = "light";
}
document.body.setAttribute("data-theme", targetTheme);
});
