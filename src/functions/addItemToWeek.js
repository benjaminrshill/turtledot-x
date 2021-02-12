export default function addItemToWeek(weeks: Array<any>, id: string, week: object) {
    let currentWeek = weeks.find(needle => needle.date === week);
    if (currentWeek === undefined) {
        let newWeek = {
            date: week,
            items: [[id, [0,0,0,0,0,0,0]]]
        }
        weeks.push(newWeek);
    } else {
        currentWeek.items.push([id, [0,0,0,0,0,0,0]]);
    }
    localStorage.setItem('weeks', JSON.stringify(weeks));
    return weeks;
}
