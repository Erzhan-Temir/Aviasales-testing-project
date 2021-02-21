import dayjs from 'dayjs';

export const numberWithSpaces = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ` `);
};

export const getTransferCount = (stops) => {
  if (stops.length === 0) {
    return `Без пересадок`;
  }

  if (stops.length === 1) {
    return `1 пересадка`;
  }

  return `${stops.length} пересадки`;
};

export const TimeHumanizer = {
  departureTime(time) {
    return dayjs(time).format(`HH:mm`);
  },
  arrivalDate(date, duration) {
    return dayjs(date).add(duration, `minute`).format(`HH:mm`);
  },
  flightTime(duration) {
    return `${Math.round(duration / 60)}ч ${duration % 60}м`;
  },
};


