let themeToggler = document.getElementById("theme-toggler");
let currentTheme = "dark";
                
themeToggler.addEventListener("click", () => {
let targetTheme;
  
if (currentTheme == "light") {
    targetTheme = "dark";
    currentTheme = "dark";
}
else {
    targetTheme = "light";
    currentTheme = "light";
}
document.body.setAttribute("data-theme", targetTheme);

});
