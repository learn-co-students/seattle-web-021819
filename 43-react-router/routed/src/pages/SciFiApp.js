import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'

import Homepage from './Homepage'
import StarTrek from './StarTrek'
import StarWars from './StarWars'
import Dune from './pages/Dune'

class App extends Component {
  state = {
    clicks: 0
  }

  incrementClicks = () => {
    this.setState({clicks: this.state.clicks + 1})
  }

  render() {
    return <div className="App">
      <Router>
        <nav>
          <a href="/">Home</a>{' '}
          <a href="/star-trek">Star Trek</a>{' '}
          <a href="/star-wars">Star Wars</a>{' '}
          <a href="/dune">Dune</a>{' '}
          |{' '}
          <Link to="/">Home</Link>{' '}
          <Link to="/star-trek">Star Trek</Link>{' '}
          <Link to="/star-wars">Star Wars</Link>{' '}
          <Link to="/dune">Dune</Link>
          |{' '}
          <NavLink activeClassName="active" exact to="/">Home</NavLink>{' '}
          <NavLink activeClassName="active" to="/star-trek">Star Trek</NavLink>{' '}
          <NavLink activeClassName="active" to="/star-wars">Star Wars</NavLink>{' '}
          <NavLink activeClassName="active" to="/dune">Dune</NavLink>
        </nav>
        <Route exact path="/" component={Homepage} />
        <Route path="/star-trek" component={() => <StarTrek handleClick={this.incrementClicks} />} />
        <Route path="/star-wars" component={StarWars} />
        <Route path="/dune" component={Dune} />
      </Router>

      <div>clicks: {this.state.clicks}</div>
    </div>
  }
}

export default App;
