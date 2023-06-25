import myRestoSource from '../data/my-resto-source';
import { createReviewCard } from '../views/templates/template-creator';

const addNewReview = {
    post(url) {
        const submit = document.querySelector('#submit');
        const reviewerName = document.querySelector('#reviewerName');
        const reviewContent = document.querySelector('#reviewContent');

        submit.addEventListener('click', async () => {
            const newReview = {
                id: url.id,
                name: reviewerName.value,
                review: reviewContent.value,
            };

            if (!!newReview.name && !!newReview.review) {
                const reviewerContainer = document.querySelector('.review-detail');
                try {
                    const response = await myRestoSource.restaurantReview(newReview);
                    myRestoSource.restaurantListDetail(url.id);
                    reviewerContainer.innerHTML = createReviewCard(response.customerReviews);
                } catch (error) {
                    reviewerContainer.innerHTML = `<b>Error: Please check your connection...</b> ${error}`;
                }
            }
            this._emptyReview();
        });
    },
    _emptyReview() {
        document.querySelector('#reviewerName').value = '';
        document.querySelector('#reviewContent').value = '';
    },
};

export default addNewReview;
