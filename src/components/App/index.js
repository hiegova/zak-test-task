import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';
import Content from '../Content';
import ShoppingCart from '../ShoppingCart';

const App = ({ store }) => {
  return (
    <React.Fragment>
      <div className="page">
        <header className="header">
          <a className="header__logo" href="/">
            zakaz.ua
          </a>
          <ShoppingCart store={store} />
        </header>
        <main className="main">
          <Sidebar store={store} />
          <Content store={store} />
        </main>
      </div>
    </React.Fragment>
  );
};

export default App;
