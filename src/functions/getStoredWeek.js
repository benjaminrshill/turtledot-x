export default function getStoredWeek(week) {
    if (localStorage.getItem(week)) {
        return JSON.parse(localStorage.getItem(week));
    } else return {};
}
