import urlParser from '../../routes/url-parser';
import myRestoSource from '../../data/my-resto-source';
import { createTemplateDetailResto, loader } from '../templates/template-creator';
import likeButtonPresenter from '../../utils/like-button-presenter';
import favoriteRestoIdb from '../../data/favorite-resto-idb';
import addNewReview from '../../utils/add-new-review';

const detail = {
    async render() {
        return `
        <div class="load"></div>
        <article class="content">
          <div id="result"></div>
          <div id="likeButtonContainer"></div>
          <div class="customer-reviews">
          <h2>Review Box</h2>
            <div class="review-form">
              <div class="input-form">
                <div class="review-form-name">
                    <input type="text" name="nama" id="reviewerName" placeholder="Input your name" required>
                </div>
                <div class="review-form-content">
                    <textarea name="content" id="reviewContent" placeholder="Input your review" required></textarea>
                </div>
              </div>
              <button class="submit-btn" id="submit" aria-label="Submit my review">Submit Review</button>
            </div>
          </div>
        </article>
        `;
    },

    async afterRender() {
        const load = document.querySelector('.load');
        const content = document.querySelector('.content');
        const resultContainer = document.querySelector('#result');
        const url = urlParser.parseActiveUrlWithoutCombiner();
        content.style.display = 'none';
        load.innerHTML = loader();
        try {
            const result = await myRestoSource.restaurantListDetail(url.id);
            resultContainer.innerHTML = createTemplateDetailResto(result.restaurant);
            addNewReview.post(url);
            likeButtonPresenter.init({
                likeButtonContainer: document.querySelector('#likeButtonContainer'),
                favoriteRestaurant: favoriteRestoIdb,
                restaurant: {
                    id: result.restaurant.id,
                    name: result.restaurant.name,
                    address: result.restaurant.address,
                    city: result.restaurant.city,
                    categories: result.restaurant.categories,
                    menus: result.restaurant.menus,
                    rating: result.restaurant.rating,
                    pictureId: result.restaurant.pictureId,
                    description: result.restaurant.description,
                    customerReviews: result.restaurant.customerReviews,
                },
            });
            content.style.display = 'block';
            load.style.display = 'none';
        } catch (error) {
            content.style.display = 'block';
            load.style.display = 'none';
            content.innerHTML = `<b>Error: please check your internet connection...</b> ${error}`;
        }
    },
};

export default detail;
