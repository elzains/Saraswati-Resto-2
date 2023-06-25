import favoriteRestoIdb from '../../data/favorite-resto-idb';
import {
    createTemplateResto,
    createSkeletonTemplate,
    createNoFavoriteTemplate,
    loader,
} from '../templates/template-creator';

const favorite = {
    async render() {
        return `
            <div class="load"></div>
            <article class="content-wrapper">
                <h2><span>Favorite</span> Restaurant</h2>
                <div class="card-list" id="card-data">
                    ${createSkeletonTemplate(20)}
                </div>
            </article>
        `;
    },

    async afterRender() {
        const resto = await favoriteRestoIdb.getAllResto();
        const load = document.querySelector('.load');
        const content = document.querySelector('.content-wrapper');
        const restoContainer = document.querySelector('#card-data');
        content.style.display = 'none';
        load.innerHTML = loader();
        if (resto.length === 0) {
            restoContainer.innerHTML = '';
            content.innerHTML += createNoFavoriteTemplate();
            content.style.display = 'block';
            load.style.display = 'none';
        } else {
            try {
                restoContainer.innerHTML = '';
                resto.forEach((newResto) => {
                    restoContainer.innerHTML += createTemplateResto(newResto);
                });
                content.style.display = 'block';
                load.style.display = 'none';
            } catch (error) {
                content.style.display = 'block';
                load.style.display = 'none';
                content.innerHTML = `<b>Error: Please check your connection...</b> ${error}`;
            }
        }
    }
};

export default favorite;
