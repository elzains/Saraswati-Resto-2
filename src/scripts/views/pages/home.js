import myRestoSource from '../../data/my-resto-source';
import {
    createTemplateResto,
    loader,
    createSkeletonTemplate,
} from '../templates/template-creator';

const home = {
    async render() {
        return `
            <div class="load"></div>
            <section class="content-wrapper">
                <h2><span>Explore</span> Restaurant</h2>
                <div class="card-list" id="card-data">
                    <!-- Card Fill -->
                    ${createSkeletonTemplate(20)}
                </div>
            </section>
        `;
    },

    async afterRender() {
        const load = document.querySelector('.load');
        const content = document.querySelector('.content-wrapper');
        const restoContainer = document.querySelector('#card-data');
        content.style.display = 'none';
        load.innerHTML = loader();

        try {
            const restaurant = await myRestoSource.restaurantList();
            restoContainer.innerHTML = '';
            restaurant.forEach((resto) => {
                restoContainer.innerHTML += createTemplateResto(resto);
            });
            content.style.display = 'block';
            load.style.display = 'none';
        } catch (error) {
            content.style.display = 'block';
            load.style.display = 'none';
            content.innerHTML = `<b>Error: Please check your connection...</b> ${error}`;
        }
    },
};

export default home;
