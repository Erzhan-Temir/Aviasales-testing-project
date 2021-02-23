import React from 'react';
import PropTypes from 'prop-types';
import {tabsButtonValues} from '../../utils/const';
import './tabs.css';

const Tabs = (props) => {
  const {changeSorting, currentSorting} = props;
  const activeButtonClass = `tabs__button--active`;

  const handleSortingChange = (val) => {
    if (val === currentSorting) {
      return;
    }

    changeSorting(val);
  };

  return (
    <div className="tabs">
      {
        tabsButtonValues.map((button) => {

          const {value, text} = button;

          return (
            <button
              onClick={() => handleSortingChange(value)}
              key={value}
              className={`tabs__button ${value === currentSorting ? activeButtonClass : ``}`}
            >{text}</button>
          );
        })
      }
    </div>
  );
};

Tabs.propTypes = {
  changeSorting: PropTypes.func.isRequired,
  currentSorting: PropTypes.string.isRequired,
};

export default Tabs;
