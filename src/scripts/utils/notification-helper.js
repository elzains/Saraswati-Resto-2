const notificationHelper = {
    sendNotification({ title, option }) {
        const available = this._checkAvailability();
        const permitted = this._checkPermission();

        if (!available) {
            console.info('Notification is not supported...');
            return;
        }

        if (!permitted) {
            console.info('Please allow access to this notification...');
            this._requestPermission();
            return;
        }

        this._showNotification({ title, option });
    },

    _checkAvailability() {
        return Boolean('Notification' in window);
    },

    _checkPermission() {
        return Notification.permission === 'granted';
    },

    async _requestPermission() {
        const status = await Notification.requestPermission();

        if (status === 'denied') {
            console.error('Notification denied...');
        }

        if (status === 'default') {
            console.warn('Permission closed...');
        }
    },

    async _showNotification({ title, option }) {
        const serviceWorkerRegistration = await navigator.serviceWorker.ready;
        serviceWorkerRegistration.showNotification(title, option);
    },
};

export default notificationHelper;
