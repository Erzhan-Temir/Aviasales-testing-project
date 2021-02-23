import React from 'react';
import PropTypes from 'prop-types';
import {getTransferCount, TimeHumanizer} from '../../utils/utils';
import './trip-info-table.css';

const TripInfoTable = (props) => {
  const {tripInfo: {origin, destination, duration, stops, date}} = props;


  const transferString = getTransferCount(stops);
  const transferCities = stops.join(`, `);
  const departureTime = TimeHumanizer.departureTime(date);
  const arrivalTime = TimeHumanizer.arrivalDate(date, duration);
  const flightTime = TimeHumanizer.flightTime(duration);


  return (
    <table>
      <thead>
        <tr>
          <th>{`${origin} - ${destination}`}</th>
          <th>В пути</th>
          <th>{transferString}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{departureTime} - {arrivalTime}</td>
          <td>{flightTime}</td>
          <td>{transferCities}</td>
        </tr>
      </tbody>
    </table>
  );
};

TripInfoTable.propTypes = {
  tripInfo: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    stops: PropTypes.array.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export default TripInfoTable;
