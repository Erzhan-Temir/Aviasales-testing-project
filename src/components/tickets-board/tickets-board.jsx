import React from 'react';
import {compose} from 'redux';
import Tabs from '../tabs/tabs';
import TicketsList from '../tickets-list/tickets-list';
import ShowMoreButton from '../show-more-button/show-more-button';

import withReduxTicketsList from '../../containers/with-redux-tickets-list';
import withLoadingStub from '../../containers/with-loading-stub';
import './tickets-board.css';

const TicketsListWrapped = compose(
    withReduxTicketsList,
    withLoadingStub
)(TicketsList);

const TicketsBoard = () => {
  return (
    <section className="tickets-board">
      <h2 className="tickets-board__heading">Список билетов Aviasales</h2>
      <Tabs />
      <TicketsListWrapped />
      <ShowMoreButton />
    </section>
  );
};

export default TicketsBoard;
