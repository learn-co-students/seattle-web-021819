import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'

import TriviaHomepage from './pages/TriviaHomepage'
import NewContestantNameForm from './pages/NewContestantNameForm'
import NewContestantZipForm from './pages/NewContestantZipForm'
import NewContestantGuessForm from './pages/NewContestantGuessForm'
import ContestantList from './pages/ContestantList'
import Winner from './pages/Winner'

class App extends Component {
  state = {
    clicks: 0,
    formName: '',
    formZip: '',
    formGuess: '',
    contestants: [
      {name: 'Jeromy', zip: 23442, guess: 'Paris'},
      {name: 'Margeret', zip: 88823, guess: 'Paris'},
      {name: 'Anthony', zip: 98103, guess: 'Houston'}
    ]
  }

  handleChange = (ev) => {
    let value = ev.target.value
    let key = ev.target.name

    let reverseLookup = {'name': 'formName', 'zip': 'formZip', 'guess': 'formGuess'}
    key = reverseLookup[key]

    let newState = {}
    newState[key] = value

    this.setState(newState)
  }

  addContestant = () => {
    console.log('adding')
    this.setState({
      formName: '',
      formZip: '',
      formGuess: '',
      contestants: [
        ...this.state.contestants,
        {
          name: this.state.formName,
          zip: this.state.formZip,
          guess: this.state.formGuess,
        }
      ]
    })
  }

  incrementClicks = () => {
    this.setState({clicks: this.state.clicks + 1})
  }

  render() {
    return <div className="App">
      <div>
        name: {this.state.formName}
        zip: {this.state.formZip}
        guess: {this.state.formGuess}
      </div>
      <Router>
        <nav>
          <NavLink activeClassName="active" exact to="/">Home</NavLink>{' '}
          <NavLink activeClassName="active" to="/enter-01">Enter to Win!</NavLink>{' '}
          <NavLink activeClassName="active" to="/contestants">Contestants</NavLink>{' '}
          <NavLink activeClassName="active" to="/Winner">Choose Winner</NavLink>
        </nav>
        {/* <Route exact path="/" component={<TriviaHomepage />} /> */}
        {/* <Route exact path="/" component={() => <TriviaHomepage />} /> */}
        <Route exact path="/" render={() => <TriviaHomepage />} />
        <Route path="/contestants" component={() => <ContestantList contestants={this.state.contestants}/>} />
        <Route path="/winner" component={Winner} />

        <Route path="/enter-01" component={() => {
          return <NewContestantNameForm
            value={this.state.formName}
            handleChange={this.handleChange}
          />
        }} />
        <Route path="/enter-02" component={() => {
          return <NewContestantZipForm
            value={this.state.formZip}
            handleChange={this.handleChange}
          />
        }} />
        <Route path="/enter-03" component={() => {
          return <NewContestantGuessForm
            value={this.state.formGuess}
            handleChange={this.handleChange}
            addContestant={this.addContestant}
          />
        }} />
      </Router>

      <div>clicks: {this.state.clicks}</div>
    </div>
  }
}

export default App;
