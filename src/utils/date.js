import dayjs from 'dayjs';

export function formatDate(date) {
    const formatedDate = dayjs(date);
    return formatedDate.format('YYYY-MM-DDTHH:mm:ss[Z]');
}