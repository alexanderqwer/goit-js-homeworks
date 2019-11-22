import './styles.css';
import template from './templates.hbs';
import countryHBS from './country.hbs';
import PNotify from '../node_modules/pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
PNotify.defaults.styling = 'material';

const sectionCountry = document.querySelector('#country');
const input = document.querySelector('.search-form');
const baseUrl = 'https://restcountries.eu/rest/v2/name/';

function fetchCountry(query) {
  if (query) {
    fetch(baseUrl + query)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.length > 10) {
          PNotify.error({
            text: 'Необходимо сделать запрос более специфичным.',
            type: 'notice',
          });
          return;
        }
        if (data.length > 1) {
          const result = data.map(value => countryHBS(value)).join('');
          sectionCountry.insertAdjacentHTML('beforeend', result);
          return
        } else {
          const content = data.map(value => template(value)).join('');
          sectionCountry.insertAdjacentHTML('beforeend', content);

        }
      })
      .catch(e => {
        PNotify.alert({
          text: 'Такой страны не найдено.',
          type: 'notice',
        });
      });
  }

  if (input.value.length === 0) {
    clearList();
  }
}

const inputCountry = () => {
  input.addEventListener(
    'input',
    _.debounce(e => {
      const countryName = e.target.value;
      fetchCountry(countryName);
    }, 700),
  );
};

const clearList = () => {
  if (sectionCountry) {
    sectionCountry.innerHTML = '';
  }
};

inputCountry();
PNotify.defaults.addClass = 'pnoty';
