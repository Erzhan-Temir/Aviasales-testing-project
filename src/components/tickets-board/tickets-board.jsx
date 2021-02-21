import React from 'react';
import './tickets-board.css';

import Tabs from '../tabs/tabs';
import TicketsList from '../tickets-list/tickets-list';
import ShowMoreButton from '../show-more-button/show-more-button';

const TicketsBoard = () => {
  return (
    <section className="tickets-board">
      <h2 className="tickets-board__heading">Список билетов Aviasales</h2>
      <Tabs />
      <TicketsList />
      <ShowMoreButton />
    </section>
  );
};

export default TicketsBoard;
