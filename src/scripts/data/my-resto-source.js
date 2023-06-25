import API_ENDPOINT from '../globals/api-endpoint';

class myRestoSource {
    static async restaurantList() {
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async restaurantListDetail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    static async restaurantReview(data) {
        const response = await fetch(API_ENDPOINT.POST_REVIEW, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        });

        const responseJson = await response.json();
        return responseJson;
    }
}

export default myRestoSource;
