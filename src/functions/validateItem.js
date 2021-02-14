export default function validateItem(item) {
    if (item.text.length > 0 && item.text.length < 12 && item.number > 0) {
        if (item.type && item.number < 8) return true;
        if (!item.type && item.number < 100001) return true;
    } else return false;
}
