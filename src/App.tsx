import React from 'react';
import './App.scss';
import {Router, Route, Switch  } from 'react-router-dom';
import { createHashHistory } from 'history';

import ItemList from './components/ItemList'
import LeftSidebar from './components/LeftSidebar'
import About from './components/about'


const history = createHashHistory({});
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div data-text="DIMABOSS" className="glitch">DIMABOSS</div>
      </header>
      <main>
        <section className="store">
          <section className="sidebar">
              <LeftSidebar
                history={history}
              />
          </section>
          <section className="content">
            <Router history={history}>
              <Switch>
                <Route exact path="/" component={ItemList} />
                <Route exact path="/about" component={About} />
              </Switch>
            </Router>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
