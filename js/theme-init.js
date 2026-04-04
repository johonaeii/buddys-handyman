(function () {
  const THEME_STORAGE_KEY = "bhs-theme";
  const DARK_THEME = "dark";
  const LIGHT_THEME = "light";

  function normalizeTheme(theme) {
    return theme === LIGHT_THEME ? LIGHT_THEME : DARK_THEME;
  }

  let theme = DARK_THEME;

  try {
    theme = normalizeTheme(window.localStorage.getItem(THEME_STORAGE_KEY));
  } catch (error) {
    theme = DARK_THEME;
  }

  document.documentElement.dataset.theme = theme;

  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", theme === LIGHT_THEME ? "#f3f3f3" : "#000000");
  }
})();
