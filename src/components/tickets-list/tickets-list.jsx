import React from 'react';
import PropTypes from 'prop-types';
import TicketsListItem from '../tickets-list-item/tickets-list-item';
import './tickets-list.css';


const TicketsList = (props) => {
  const {tickets} = props;

  return (
    <ul className="tickets-list">
      {
        tickets.map((ticket) => {
          return (
            <TicketsListItem key={`${ticket.price} + ${ticket.carrier}`} ticketInfo={ticket} />
          );
        })
      }
    </ul>
  );
};

TicketsList.propTypes = {
  tickets: PropTypes.array.isRequired,
};

export default TicketsList;
