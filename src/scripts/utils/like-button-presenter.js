import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const likeButtonPresenter = {
    async init({ likeButtonContainer, favoriteRestaurant, restaurant }) {
        this._likeButtonContainer = likeButtonContainer;
        this._favoriteRestaurant = favoriteRestaurant;
        this._restaurant = restaurant;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestaurantExist(id) {
        const resto = await this._favoriteRestaurant.getResto(id);
        return !!resto;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurant.putResto(this._restaurant);
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurant.deleteResto(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default likeButtonPresenter;
