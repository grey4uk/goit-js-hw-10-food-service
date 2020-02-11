import './css/styles.css';
import menu from './js/menu.json.js.js';
import menuIitemTamplate from './templates/menu-item.hbs';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const menuList = document.querySelector('.js-menu');

function createMenuList(menuArrayItems) {
  return menuArrayItems.reduce(
    (acc, menuArrayItem) => (acc += menuIitemTamplate(menuArrayItem)),
    '',
  );
}
menuList.insertAdjacentHTML('beforeend', createMenuList(menu));

const changeThemeBtn = document.querySelector('#theme-switch-control');
const bodyOfDocument = document.querySelector('body');
changeThemeBtn.addEventListener('change', controlOfTheme);
function checkPosOfThemeControl() {
  if (!localStorage.getItem('theme')) {
    bodyOfDocument.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  } else if (localStorage.getItem('theme') == Theme.LIGHT) {
    bodyOfDocument.classList.add(Theme.LIGHT);
  } else {
    bodyOfDocument.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
}
checkPosOfThemeControl();
console.log(localStorage);
function controlOfTheme(e) {
  console.log(e);
  if (e) {
    bodyOfDocument.classList.toggle(Theme.LIGHT);
    bodyOfDocument.classList.toggle(Theme.DARK);
    if (bodyOfDocument.classList.contains(Theme.LIGHT)) {
      localStorage.setItem('theme', Theme.LIGHT);
    } else {
      localStorage.setItem('theme', Theme.DARK);
    }
  }
}
