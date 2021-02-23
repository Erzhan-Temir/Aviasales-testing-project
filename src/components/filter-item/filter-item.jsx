import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './filter-item.css';

const FilterItem = (props) => {
  const {filterItemData: {value, text, count}, currentFilters, changeFilter} = props;
  const initialState = (currentFilters.indexOf(count) > -1);


  const [valueCheckbox, setValueCheckbox] = useState(initialState);


  const handleInputChange = (evt) => {
    changeFilter(count);
    setValueCheckbox(evt.target.checked);
  };

  return (
    <div className="filter__checkbox-wrapper">
      <input
        type="checkbox"
        className="filter__checkbox"
        id={value}
        name={value}
        checked={valueCheckbox}
        onChange={handleInputChange}
      ></input>
      <label htmlFor={value} className="filter__checkbox-label">{text}</label>
    </div>
  );
};

FilterItem.propTypes = {
  filterItemData: PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }),
  currentFilters: PropTypes.array.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default FilterItem;
