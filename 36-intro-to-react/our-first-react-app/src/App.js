import React from 'react';
import './App.css';

import RandomAdder from './components/RandomAdder'
import CityInfo from './components/CityInfo'
import GroceryList from './components/GroceryList'
import FunctionalComponent from './components/FunctionalComponent'
import ClickCounter from './components/ClickCounter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickCounter />
        <ClickCounter />
        <ClickCounter />
        <ClickCounter />

        <FunctionalComponent superhero="Superman" normal_name="Clark Kent" />

        <GroceryList />

        <CityInfo name="Seattle" population="780,000" description="A fine city by the Puget Sound. Excellent moderate weather."/>
        <CityInfo name="Portland" population="600,000" description="A terrible city. Can't pump your own gas. Total waste of time. Too hip." />
        <CityInfo name="New York" population="6,000,000" description="Just who cares." />

        <RandomAdder />
        <RandomAdder />
        <RandomAdder />
      </header>
    </div>
  );
}

export default App;
