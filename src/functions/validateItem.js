export default function validateItem(item) {
    if (item.text.length > 0 && item.text.length < 12 && item.number > 0) {
        console.log(item.number)
        if (item.type && item.number < 8) return true;
        if (!item.type && item.number < 100000) return true;
    } else return false;
}
