import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const openIdb = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
});

const favoriteRestoIdb = {
    async getResto(id) {
        if (!id) {
            return;
        }

        return (await openIdb).get(OBJECT_STORE_NAME, id);
    },

    async getAllResto() {
        return (await openIdb).getAll(OBJECT_STORE_NAME);
    },

    async putResto(resto) {
        if (!resto.hasOwnProperty('id')) {
            return;
        }

        return (await openIdb).put(OBJECT_STORE_NAME, resto);
    },

    async deleteResto(id) {
        return (await openIdb).delete(OBJECT_STORE_NAME, id);
    },
};

export default favoriteRestoIdb;
