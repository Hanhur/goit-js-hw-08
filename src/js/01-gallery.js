// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function renderGalleryItems() 
{
    return galleryItems
    .map(
        ({ original, preview, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>
        </div>`
    ).join('');
}

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoomFactor: false,
});