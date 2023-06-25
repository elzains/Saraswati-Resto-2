import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
    if (!('serviceWorker' in navigator)) {
        console.log('Service Worker no supported in the browser...');
        return;
    }

    const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

    try {
        await wb.register();
        console.log('Service Worker installed successfully...');
    } catch (error) {
        console.log('Service Worker failed to register...', error);
    }
};

export default swRegister;
