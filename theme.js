// 1. Check if the user has selected a theme by default
// 2. If we have a theme, we apply that
// 3. Create a function to change the theme and store to localstorage
function checkTheme() {
  const themeFromLocalStorage = localStorage.getItem("theme");
  if (themeFromLocalStorage) {
    document.body.setAttribute("data-theme", themeFromLocalStorage);
  } else {
    localStorage.setItem("theme", light);
  }
}

function changeTheme() {
  const theme = document.body.getAttribute("data-theme");
  if (theme === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  checkTheme();
}

checkTheme();
