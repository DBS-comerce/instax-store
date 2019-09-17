import React, { useState, useEffect }from 'react';
import './App.scss';
import {Router, Route, Switch  } from 'react-router-dom';
import { createHashHistory } from 'history';
import { connect } from 'react-redux';

import items from './mockData/items'
import ItemList from './components/Items/ItemList'
import ItemCard from './components/Items/ItemCard'
import LeftSidebar from './components/LeftSidebar'
import About from './components/about'
import Cart from './components/Cart'
import {addNewElement as addNewElementAction} from './store/items/actions'


const history = createHashHistory({});

interface PropsFromDispatch {
  addNewElement: typeof addNewElementAction
}

type AllProps = PropsFromDispatch

const App: React.FC<AllProps> = (props) => {

  const{addNewElement} = props
  
  addNewElement(items)
  
  return (
    <div className="App">
      <header className="App-header">
        <div data-text="INSTAXSTORE" className="glitch">INSTAXSTORE</div>
      </header>
      <main>
        <section className="store">
        <Router history={history}>
          <section className="sidebar">
              <LeftSidebar
                history={history}
              />
          </section>
          <section className="content">
            
              <Switch>
                <Route exact path="/catalog" component={ItemList} />
                <Route exact path="/about" component={About} />
                <Route exact path="/item-card/:id" component={ItemCard} />
                <Route exact path="/cart" component={Cart} />
              </Switch>
          </section>
          </Router>
        </section>
      </main>
    </div>
  );
}

const mapDispatchToProps = {
  addNewElement: addNewElementAction
}

export default  connect(null, mapDispatchToProps)(App);
