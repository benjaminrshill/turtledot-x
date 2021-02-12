export default function cutNumber(number) {
    if (number > 99999) {
        return '100k';
    } else if (number > 9999) {
        return number.toString().slice(0,2) + 'k';
    } else if (number > 999) {
        if (number % 7 === 0) return number.toString().slice(0, 2) + 'k';
        return number.toString().slice(0, 1) + '.' + number.toString().slice(1, 2) + 'k';
    } else if (number % 1 !== 0) {
        return Math.ceil(number);
    } else return number;
}
