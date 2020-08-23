import moment from 'moment-timezone';

const dateRangeLabels = {
  s: 'few seconds',
  ss: '%d seconds',
  m: '1 minute',
  mm: '%d minutes',
  h: '1 hour',
  hh: '%d hours',
  d: '1 day',
  dd: '%d days',
  M: '1 month',
  MM: '%d months',
  y: '1 year',
  yy: '%d years',
};

export const formattedDateDifference = (fromDate, toDate = moment.utc()) => {
  moment.updateLocale('en', { relativeTime: dateRangeLabels });
  const fromUTC = moment.utc(fromDate);
  const toUTC = moment.utc(toDate);
  const difference = toUTC.from(fromUTC, true);
  moment.updateLocale('en', null);
  return `${difference} ago`;
};
