import 'regenerator-runtime'; /* for async await transpile */

// import CSS
import '../styles/config.css';
import '../styles/main.css';
import '../styles/header.css';
import '../styles/hamburger.css';
import '../styles/jumbotron.css';
import '../styles/detail.css';
import '../styles/favorite.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import '../styles/lazyload.css';
import '../styles/jumpcontent.css';
import '../styles/pushnotif.css';

// import JS
import App from './views/app';
import Typed from 'typed.js';
import swRegister from './utils/sw-register';
import CONFIG from './globals/config';
import { webSocketInitiator } from './utils/web-socket-initiator';

// import components
import './components/navbar';
import './components/jumbotron';
import './components/footer';

const app = new App({
    button: document.querySelector('#icon-mobile'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#main-content'),
});

// hash change
window.addEventListener('hashchange', () => {
    app.renderPage();
});

// // load
window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
    webSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

const typed = new Typed('#typing', {
    strings: ['<b>Cicipi Kreativitas</b>', '<b>Sentuhan Rasa Lokal</b>', '<b>Ruang Rasa Yang Aman</b>', '<b>Gaya Hidup Kuliner</b>', '<b>Makanan Sehat Senyum Bahagia</b>'],
    typeSpeed: 100,
    loop: true,
});
