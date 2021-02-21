import React from 'react';
import './tabs.css';

const Tabs = () => {
  return (
    <div className="tabs">
      <button className="tabs__button tabs__button--active">Самый дешевый</button>
      <button className="tabs__button">Самый быстрый</button>
      <button className="tabs__button">Оптимальный</button>
    </div>
  );
};

export default Tabs;
