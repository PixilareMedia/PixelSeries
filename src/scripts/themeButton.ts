function themeButtonSetup() {
  const themeButton = document.getElementById("themeButton") as HTMLButtonElement;
  const body = document.body;
  const theme = localStorage.getItem('theme');
  let currentTheme = theme;

  if(theme) {
    body.classList.add(theme);
  }

  themeButton.onclick = () => {changeTheme()}
  function changeTheme() {
    if(currentTheme === "light") {
      body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
      currentTheme = 'dark';
    } else {
      body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
      currentTheme = 'light';
    }
  }
}

export { themeButtonSetup }
