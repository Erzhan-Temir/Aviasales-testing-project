import React from 'react';
import './filter.css';

const Filter = () => {
  return (
    <aside className="filter">
      <form>
        <p className="filter__heading">Количество пересадок</p>

        <div className="filter__checkbox-wrapper">
          <input type="checkbox" className="filter__checkbox" id="all"></input>
          <label htmlFor="all" className="filter__checkbox-label">Все</label>
        </div>

        <div className="filter__checkbox-wrapper">
          <input type="checkbox" className="filter__checkbox" id="no-transfer"></input>
          <label htmlFor="no-transfer" className="filter__checkbox-label">Без пересадок</label>
        </div>

        <div className="filter__checkbox-wrapper">
          <input type="checkbox" className="filter__checkbox" id="one-transfer"></input>
          <label htmlFor="one-transfer" className="filter__checkbox-label">1 пересадка</label>
        </div>

        <div className="filter__checkbox-wrapper">
          <input type="checkbox" className="filter__checkbox" id="two-transfer"></input>
          <label htmlFor="two-transfer" className="filter__checkbox-label">2 пересадки</label>
        </div>

        <div className="filter__checkbox-wrapper">
          <input type="checkbox" className="filter__checkbox" id="three-transfer"></input>
          <label htmlFor="three-transfer" className="filter__checkbox-label">3 пересадки</label>
        </div>
      </form>
    </aside>
  );
};

export default Filter;
