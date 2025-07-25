<<<<<<< HEAD
// Set theme based on system preference
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
if (!localStorage.getItem('theme')) {
  root.setAttribute('data-theme', systemTheme);
}
=======
// Set theme based on system preference
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
if (!localStorage.getItem('theme')) {
  root.setAttribute('data-theme', systemTheme);
}
>>>>>>> a3f42fab53aaf35d41a1ccfce2fc4ab9f69aef0c
