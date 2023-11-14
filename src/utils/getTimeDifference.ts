import dayjs from 'dayjs';

export function getTimeDifference(date1: dayjs.Dayjs, date2 = dayjs()): string {
  const diffInMinutes = date2.diff(date1, 'minute');
  const diffInHours = date2.diff(date1, 'hour');
  const diffInDays = date2.diff(date1, 'day');

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hours`;
  } else {
    return `${diffInDays} days`;
  }
}
