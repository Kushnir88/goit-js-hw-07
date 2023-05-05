import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryNextList = document.querySelector(".gallery");

const galleryNextItem = galleryItems
    .map(
        (item) =>
            `<li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>
            </li>`
    )
    .join("");

galleryNextList.insertAdjacentHTML('beforeend', galleryNextItem);


var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250',
    captionPosition: 'bottom'
});