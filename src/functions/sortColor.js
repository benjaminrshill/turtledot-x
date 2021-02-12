export default function sortColor(array) {
    return array.sort((a, b) => (a.color > b.color) ? 1 : -1);
}
