import dayjs from 'dayjs';

export const humanizeDateInDayOfTheMonth = (date) => dayjs(date).format('D MMM');

export const humanizeDateInTime = (date) => dayjs(date).format('HH:mm');

const dateInNumber = (date) => dayjs(date).format('YYYYMMDDHHmm');

export const sortByDay = (pointA, pointB) => dateInNumber(pointA.dateFrom) - dateInNumber(pointB.dateFrom);

export const sortByPrice = (pointA, pointB) => pointA.basePrice - pointB.basePrice;
