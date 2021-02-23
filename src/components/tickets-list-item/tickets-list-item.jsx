import React from 'react';
import PropTypes from 'prop-types';
import {numberWithSpaces} from '../../utils/utils';
import TripInfoTable from '../trip-info-table/trip-info-table';
import './tickets-list-item.css';

const TicketsListItem = (props) => {
  const {ticketInfo} = props;

  const price = numberWithSpaces(ticketInfo.price);
  const carrierLogo = ticketInfo.carrier;
  const routes = ticketInfo.segments;

  return (
    <li className="tickets-list-item">
      <div className="tickets-list-item__heading">
        <h3 className="tickets-list-item__price">{price} P</h3>

        <img
          className="tickets-list-item__carrier"
          src={`http://pics.avs.io/99/36/${carrierLogo}.png`}
        />
      </div>

      {
        routes.map((tripInfo) => {
          return (
            <TripInfoTable key={tripInfo.date} tripInfo={tripInfo} />
          );
        })
      }

    </li>
  );
};

TicketsListItem.propTypes = {
  ticketInfo: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.array.isRequired,
  }),
};

export default TicketsListItem;
