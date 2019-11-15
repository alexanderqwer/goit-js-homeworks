import './styles.css';
import menu from './menu.json';
import menuItem from './menu_item_template.hbs';
import {
  brotliDecompress
} from 'zlib';

const wrapperMenu = document.querySelector('#menu');

const layoutMenu = menu.reduce((acc, item) => {
  return acc + menuItem(item);
}, '');

wrapperMenu.innerHTML = layoutMenu;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('#body');

const switcher = document.querySelector('#theme-switch-control');
switcher.addEventListener('change', processCLick);

const saveTopic = localStorage.getItem('theme');

if (saveTopic === Theme.LIGHT) {
  addTopicLightClass();
} else {
  addTopicDarkClass();
  switcher.setAttribute('checked', true);
}

function addTopicLightClass() {
  body.classList.add(Theme.LIGHT);
}

function addTopicDarkClass() {
  body.classList.add(Theme.DARK);
}

function removeTopicLightClass() {
  body.classList.remove(Theme.LIGHT);
}

function processCLick() {
  body.classList.toggle(Theme.DARK);

  if (body.classList.contains(Theme.DARK)) {
    removeTopicLightClass();
    installToLocalStorageDarkTopic();
  } else {
    addTopicLightClass();
    installToLocalStorageLightTopic();
  }
}

function installToLocalStorageLightTopic() {
  localStorage.setItem('theme', Theme.LIGHT);
}

function installToLocalStorageDarkTopic() {
  localStorage.setItem('theme', Theme.DARK);
}
