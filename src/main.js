// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.

import axios from 'axios';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');
const API_KEY = '50801128-9bde19728bc3e6666ae5ca17b';
const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query',
    });
    return;
  }

  clearGallery();
  getImagesByQuery(query);
}

showLoader();

function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  axios(`https://pixabay.com/api/?${params}`)
    .then(({ data }) => {
      if (data.hits.length > 0) {
        createGallery(data.hits);
      } else {
        iziToast.info({
          message: 'Sorry, there are no images matching your search query.',
        });
      }
      //   console.log(data);
    })
    .catch(error => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      //   console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
}

function createGallery(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
      <a href="${image.largeImageURL}">
      <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div>
      <p>Likes ${image.likes}</p>
      <p>Views ${image.views}</p>
      <p>Comments ${image.comments}</p>
      <p>Downloads ${image.downloads}</p>
      </div>
      </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
