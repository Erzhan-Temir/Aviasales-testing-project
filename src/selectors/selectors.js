import {createSelector} from 'reselect';
import {tabsButtonValues} from '../utils/const';

const getFilter = (state) => state.currentFilters;
const getRenderCount = (state) => state.renderCount;
const getSorting = (state) => state.currentSorting;
const getTickets = (state) => state.tickets;

const getMaxTransferCount = (ticket) => {
  const roundTransfers = [];
  ticket.segments.forEach((round) => {
    roundTransfers.push(round.stops.length);
  });
  return Math.max(...roundTransfers);
};

const filterByTransfer = (initialArr, result) => (count) => {
  initialArr
    .filter((ticket) => getMaxTransferCount(ticket) === count)
    .forEach((ticket) => result.push(ticket));
};

const filterTickets = (tickets, filters) => {
  let filteredTickets = [];
  const filterByTransferCount = filterByTransfer(tickets, filteredTickets);

  if (Math.min(filters) === -1 || filters.length === 0) {
    return tickets;
  }

  filters.forEach((filterCount) => {
    filterByTransferCount(filterCount);
  });

  return filteredTickets;
};

const getTotalFlightTime = (ticket) => {
  let timeCount = 0;

  ticket.segments.forEach((round) => {
    timeCount += round.duration;
  });

  return timeCount;
};


const filterSelector = createSelector(
    [getTickets, getFilter],
    (tickets, currentFilters) => {
      return filterTickets(tickets, currentFilters);
    }
);

const sortingSelector = createSelector(
    [filterSelector, getSorting],
    (tickets, currentSorting) => {
      switch (currentSorting) {
        case tabsButtonValues[0].value:
          return tickets.slice().sort((a, b) => a.price - b.price);
        case tabsButtonValues[1].value:
          return tickets.slice().sort((a, b) => getTotalFlightTime(a) - getTotalFlightTime(b));
        default:
          return tickets;
      }
    }
);

const totalSelector = createSelector(
    [sortingSelector, getRenderCount],
    (tickets, renderTicketsCount) => {
      return tickets.slice(0, renderTicketsCount);
    }
);

export default totalSelector;
