import type {WeeksType, WeekType, ItemsType} from '../types/Weeks';

export default function copyAllFromThisWeek (weeks: WeeksType, weekDate: string, copyWeek: ItemsType) {
    let currentWeek = weeks.find((needle: { date: string; }) => needle.date === weekDate);
    if (currentWeek === undefined) {
        let newWeek: WeekType = {
            date: weekDate,
            items: [...copyWeek]
        }
        weeks.push(newWeek);
    } else {
        currentWeek.items = [...copyWeek];
    }
    localStorage.setItem('weeks', JSON.stringify(weeks));
    return weeks;
}