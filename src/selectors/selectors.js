import {createSelector} from 'reselect';

const getFilter = (state) => state.currentFilters;
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

function filterTickets(tickets, filters) {
  let filteredTickets = [];
  const filterByTransferCount = filterByTransfer(tickets, filteredTickets);

  if (Math.min(filters) === -1 || filters.length === 0) {
    return tickets;
  }

  filters.forEach((filterCount) => {
    filterByTransferCount(filterCount);
  });

  return filteredTickets;
}

const filterSelector = createSelector(
    [getTickets, getFilter],
    (tickets, currentFilters) => {
      return filterTickets(tickets, currentFilters);
    }
);

export default filterSelector;
