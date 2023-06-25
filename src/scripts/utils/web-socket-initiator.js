import notificationHelper from './notification-helper';

let socket = null;

const webSocketInitiator = {
    init(url) {
        socket = new WebSocket(url);
        console.log('Web Socket connected to => ', socket.url);

        socket.onmessage = this._onMessageInitiate;
    },

    _onMessageInitiate(message) {
        console.log('Web Socket on message initiator => ', message);

        const reviewData = JSON.parse(message.data);

        notificationHelper.sendNotification({
            title: reviewData.name,
            option: {
                body: reviewData.review,
                icon: 'images/icons/icon-192x192.png',
                image: reviewData.image,
                vibrate: [200, 100, 200],
            },
        });
    },
};

const sendDataToWebSocket = (reviewData) => {
    const data = JSON.stringify(reviewData);

    socket.send(data);
};

export { webSocketInitiator, sendDataToWebSocket };
