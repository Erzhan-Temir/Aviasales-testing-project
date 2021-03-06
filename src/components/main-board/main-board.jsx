import React from 'react';
import Filter from '../filter/filter';
import TicketsBoard from '../tickets-board/tickets-board';
import "./main-board.css";


const MainBoard = () => {
  return (
    <main className="main-board">
      <h1 className="main-board__heading">Каталог билетов Aviasales</h1>
      <Filter />
      <TicketsBoard />
    </main>
  );
};

export default MainBoard;
