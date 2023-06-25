import home from '../views/pages/home';
import favorite from '../views/pages/favorite';
import detail from '../views/pages/detail';

const routes = {
    '/': home,
    '/detail/:id': detail,
    '/favorite': favorite,
};

export default routes;
