// Set theme based on system preference
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
if (!localStorage.getItem('theme')) {
  root.setAttribute('data-theme', systemTheme);
}
