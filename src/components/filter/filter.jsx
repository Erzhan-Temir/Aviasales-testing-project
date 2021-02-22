import React from 'react';
import {filterValues} from '../../utils/const';
import FilterItem from '../filter-item/filter-item';
import withReduxFilter from '../../containers/with-redux-filter';
import './filter.css';

const FilterItemWrapped = withReduxFilter(FilterItem);

const Filter = () => {
  return (
    <aside className="filter">
      <form>
        <p className="filter__heading">Количество пересадок</p>

        {
          filterValues.map((filterItemData) => {
            return <FilterItemWrapped key={filterItemData.value} filterItemData={filterItemData} />;
          })
        }

      </form>
    </aside>
  );
};

export default Filter;
