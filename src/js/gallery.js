import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { createGalleryCard } from './creat';
import { UnsplashAPI } from "./UnsplashAPI";
const list = document.querySelector('.js-gallery');


const options = {
    totalItems: 0,
    itemsPerPage: 12,
    visiblePages: 5,
    page: 1
}

const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container, options);
const page = pagination.getCurrentPage();
const api = new UnsplashAPI();
api.getPopularPhoto(page)
    .then(({ total, results }) => {

        pagination.reset(total);
        console.log(results);
        const markup = createGalleryCard(results);
        list.innerHTML = markup;

    });


pagination.on('afterMove', (event) => {
     const currentPage = event.page;
     api.getPopularPhoto(currentPage)
     .then(({ total, results }) => {
         console.log(results);
         const markup = createGalleryCard(results);
         list.innerHTML = markup;
     });

});


