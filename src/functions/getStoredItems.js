import sortColor from './sortColor';

export default function getStoredItems() {
    if (localStorage.getItem('items')) {
        return sortColor(JSON.parse(localStorage.getItem('items')));
    } else return [];
}
