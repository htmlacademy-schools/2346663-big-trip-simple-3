import dayjs from 'dayjs';

export const humanizeDateInDayOfTheMonth = (date) => dayjs(date).format('D MMM');

export const humanizeDateInTime = (date) => dayjs(date).format('HH:mm');
