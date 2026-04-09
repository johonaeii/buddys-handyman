(function () {
  const THEME_STORAGE_KEY = "bhs-theme";
  const DARK_THEME = "dark";
  const LIGHT_THEME = "light";

  function normalizeTheme(theme) {
    return theme === DARK_THEME ? DARK_THEME : LIGHT_THEME;
  }

  let theme = LIGHT_THEME;

  try {
    theme = normalizeTheme(window.localStorage.getItem(THEME_STORAGE_KEY));
  } catch (error) {
    theme = LIGHT_THEME;
  }

  document.documentElement.dataset.theme = theme;

  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", theme === LIGHT_THEME ? "#fbf4ea" : "#221613");
  }
})();
