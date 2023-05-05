import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї//

const galleryList = document.querySelector(".gallery");

const galleryListItem = galleryItems
    .map(
        (item) =>
            `<li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                    />
                </a>
            </li>`
    )
    .join("");

galleryList.insertAdjacentHTML('beforeend', galleryListItem);

// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
galleryList.addEventListener('click', openOriginalImage);
let modalImage;


function openOriginalImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }

    document.addEventListener('keydown', closeModalonEsc);

    const originalImage = event.target.dataset.source;

    modalImage = basicLightbox.create(`
		<img width="1400" height="900" src="${originalImage}">
	`);
    modalImage.show();
};

//==============close on escape=================

    function closeModalonEsc(e) {
        e.preventDefault();
        if (e.key === 'Escape') {
            modalImage.close();
            document.removeEventListener('keydown', closeModalonEsc);
        }
    }
