import React, { useState, useEffect }from 'react';
import './App.scss';
import {Router, Route, Switch  } from 'react-router-dom';
import { createHashHistory } from 'history';
import { connect } from 'react-redux';

import items from './mockData/items'
import ItemList from './components/ItemList'
import LeftSidebar from './components/LeftSidebar'
import About from './components/about'
import {addNewElement} from './actions/items'


const history = createHashHistory({});

const App: React.FC = (props) => {

  const{addNewElement}:any = props
  
  useEffect(() => {
    addNewElement(items)
  })
  
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

const mapDispatchToProps = {
  addNewElement
}

export default  connect(null, mapDispatchToProps)(App);
