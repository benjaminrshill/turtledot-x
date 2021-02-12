import type {WeeksType, WeekType} from '../types/Weeks';

export default function addAllItemsToWeek (weeks: WeeksType, ids: Array<any>, weekDate: string) {
    // @ts-ignore
    let currentWeek: WeekType = weeks.find(needle => needle.date === weekDate);
    if (currentWeek !== undefined) {
        ids.forEach(id => currentWeek.items.push([id, [0,0,0,0,0,0,0]]));
    } else {
        let newWeek: WeekType = {
            date: weekDate,
            items: []
        }
        ids.forEach(id => newWeek.items.push([id, [0,0,0,0,0,0,0]]));
        weeks.push(newWeek);
    }
    localStorage.setItem('weeks', JSON.stringify(weeks));
    return weeks;
}
