import React from 'react';
import {compose} from 'redux';
import Tabs from '../tabs/tabs';
import TicketsList from '../tickets-list/tickets-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import withReduxTicketsList from '../../containers/with-redux-tickets-list';
import withLoadingStub from '../../containers/with-loading-stub';
import withReduxTabs from '../../containers/with-redux-tabs';
import withReduxShowMoreButton from '../../containers/with-redux-show-more-button';
import './tickets-board.css';


const TabsWrapped = withReduxTabs(Tabs);
const TicketsListWrapped = compose(withReduxTicketsList, withLoadingStub)(TicketsList);
const ShowMoreButtonWrapped = withReduxShowMoreButton(ShowMoreButton);


const TicketsBoard = () => {
  return (
    <section className="tickets-board">
      <h2 className="tickets-board__heading">Список билетов Aviasales</h2>
      <TabsWrapped />
      <TicketsListWrapped />
      <ShowMoreButtonWrapped />
    </section>
  );
};

export default TicketsBoard;
