import galleryItems from './gallery-items.js';


const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', click);
galleryList.addEventListener('keydown', handlePress);


const createGalleryItem = ({
    preview,
    original,
    description
  }) =>
  `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />

      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
  </li>`;

const galleryFull = galleryItems.reduce((previousValue, item) => {
  return previousValue + createGalleryItem(item);
}, '');

galleryList.insertAdjacentHTML('afterbegin', galleryFull);

const back = document.querySelector('.lightbox__content');
back.addEventListener('click', comeBack);

const closeButton = document.querySelector('.lightbox__button');
closeButton.addEventListener('click', closeWindow);

const modalElement = document.querySelector('.lightbox');
const modalImageElem = document.querySelector('.lightbox__image');

function openWindow() {
  modalElement.classList.add('is-open');
}

function closeWindow() {
  modalElement.classList.remove('is-open');
  modalImageElem.setAttribute('src', '');
}

function click(e) {
  if (e.target === e.currentTarget) return;
  e.preventDefault();
  openWindow();

  const imageURL = e.target.getAttribute('data-source');
  const imageALT = e.target.getAttribute('alt');
  modalImageElem.setAttribute('src', imageURL);
  modalImageElem.setAttribute('alt', imageALT);
}

function handlePress(e) {
  if (e.keyCode === 27) {
    closeWindow();
  }
}

function comeBack(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeWindow();
}