import React from 'react';
import Logo from '../logo/logo';
import MainBoard from '../main-board/main-board';
import withErrorBoundary from '../../containers/with-error-boundary';
import './app.css';

const MainBoardWrapped = withErrorBoundary(MainBoard);

function App() {
  return (
    <div className="App">
      <Logo />
      <MainBoardWrapped />
    </div>
  );
}

export default App;
