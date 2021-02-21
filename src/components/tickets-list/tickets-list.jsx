import React from 'react';
import './tickets-list.css';

import TicketsListItem from '../tickets-list-item/tickets-list-item';

const TicketsList = () => {
  return (
    <ul className="tickets-list">
      <TicketsListItem />
      <TicketsListItem />
    </ul>
  );
};

export default TicketsList;
