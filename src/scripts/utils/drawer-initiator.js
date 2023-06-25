const drawerInitiator = {
    init({ button, drawer, content }) {
        button.addEventListener('click', (event) => {
            this._openDrawer(event, drawer);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });
    },

    _openDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('open');
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('open');
    },
};

export default drawerInitiator;
