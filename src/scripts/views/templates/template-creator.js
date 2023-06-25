import CONFIG from '../../globals/config';

const createTemplateResto = (create) => `
    <div class="card">
        <img class="card-img" src="${CONFIG.BASE_IMAGE_URL}small/${create.pictureId}" alt="${create.name}" title="${create.name}">
        <div class="card-city">${create.city}</div>
        <div class="card-content">
            <h3 class="card-title"><a tabindex="0" href="${`/#/detail/${create.id}`}">${create.name}</a></h3>
            <p class="card-rating">
                <span class="fa fa-star rating-value"> </span>
                <span class="rating-value" aria-label="rating ${create.rating}">${create.rating}</span>
            </p>
            <div class="card-desc">${create.description.slice(0, 80)}</div>
        </div>
    </div>
`;

const createTemplateDetailResto = (create) => `
    <h2 tabindex="0" class="explore"><span>Detail of</span> ${create.name}</h2>
    <div class="restaurant-profile">
        <div class="restaurant-img-container">
            <img class="restaurant-img-detail" src="${CONFIG.BASE_IMAGE_URL}large/${create.pictureId}" alt="Restaurant ${create.name}">
        </div>
        <div class="restaurant-desc">
            <h2><span>About</span> Us</h2>
            <p>${create.description}</p>
            <div class="address">
                <h3><i class="fa fa-map-marker fa-md desc-icon" aria-hidden="true"></i><span class="short-title" aria-label="address at ${create.address}, ${create.city}"> ${create.address}, ${create.city}</span></h3>
                <h3><i class="fa fa-list-alt fa-md desc-icon" aria-hidden="true"></i><span class="short-title" aria-label="categories"> ${create.categories.map((category) => `<span class=""> ${category.name}</span>`).join('')}</span></h3>
                <h3><i class="fa fa-star fa-md desc-icon"></i><span class="short-title" aria-label="rating"> ${create.rating}</span></h3>
            </div>
        </div>
    </div>

    <div class="restaurant-detail">
        <h2><span>Various</span> Menu</h2>
        <div class="menu-detail">
            <div class="food-detail">
                <h3>Food<span>S</span></h3>
                ${create.menus.foods.map((food) => `<ul><li style="list-style: none;">${food.name}</li></ul>`).join('')}
            </div>
            <div class="drink-detail">
                <h3>Drink<span>S</span></h3>
                ${create.menus.drinks.map((drink) => `<ul><li style="list-style: none;">${drink.name}</li></ul>`).join('')}
            </div>
        </div>

        <h2><span>Our</span> Reviews <span class="count">${create.customerReviews.length}</span></h2>
        <div class="review-detail">
            ${createReviewCard(create.customerReviews)}
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o fa-lg" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
    </button>
`;

const createNoFavoriteTemplate = () => `
    <div class="empty-container">
        <p class="empty-text">You haven't added your favorites list yet</p>
        <a href="/">Add Favorite</a>
    </div>
`;

const createReviewCard = (data) => {
    let customerReview = '';
    data.forEach((review) => {
        customerReview += `
        <div class="detail-review-container">
            <div class="review-header">
                <p class="review-name">${review.name}</p>
                <p class="review-date">${review.date}</p>
            </div>
            <div class="review-body">
                "${review.review}"
            </div>
        </div>
        `;
    });
    return customerReview;
};

const loader = () => `
    <div class="loader"></div>
`;

const createSkeletonTemplate = (count) => {
    let template = '';

    for (let i = 0; i < count; i += 1) {
        template += `
        <div class="card">
            <img class="card-img" alt="skeleton">
            <div class="card-content">
                <h2 class="skeleton">Lorem ipsum dolor sit.</h2>
                <p class="skeleton"></p>
                <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</div>
            </div>
        </div>
        `;
    }
    return template;
};

export {
    createTemplateResto,
    createTemplateDetailResto,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createNoFavoriteTemplate,
    createReviewCard,
    loader,
    createSkeletonTemplate,
};
