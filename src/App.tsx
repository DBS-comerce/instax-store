import React from 'react';
import './App.scss';
import ItemList from './components/ItemList'
import LeftSidebar from './components/LeftSidebar'


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div data-text="DIMABOSS" className="glitch">DIMABOSS</div>
      </header>
      <main>
        <section className="store">
          <section className="sidebar">
              <LeftSidebar/>
          </section>
          <section className="content">
              <ItemList/>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
