import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks: [],
      displayedStocks: [],
      portfolio: [],
    }

    this.sortBy = this.sortBy.bind(this)
    this.filter = this.filter.bind(this)
    this.buyStock = this.buyStock.bind(this)
    this.sellStock = this.sellStock.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(json => {
      this.setState({
        stocks: json,
        displayedStocks: json
      })
    })
  }

  buyStock(stock) {
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    })
  }

  sellStock(stock) {
    let isOneSold = false
    let portfolio = this.state.portfolio.filter(ss => {
      if (!isOneSold && ss === stock) {
        isOneSold = true
        return false
      }
      return true
    })
    this.setState({portfolio})
  }

  sortBy(type) {
    if (type === 'Alphabetically') {
      this.sortByName()
    } else if (type === 'Price') {
      this.sortByPrice()
    }
  }

  sortByName() {
    console.log('name sort')
    // copy the entire displayed arrays first, then sort them
    let sorted = [...this.state.displayedStocks]
    sorted.sort((stock1, stock2) => {
      if (stock1.name === stock2.name) {
        return 0
      }
      if (stock1.name < stock2.name) {
        return -1
      } else {
        return 1
      }
    })
    this.setState({displayedStocks: sorted})
  }

  sortByPrice() {
    console.log('price sort')
  }

  filter(fff) {
    let displayedStocks = this.state.stocks.filter(stock => {
      return stock.type === fff
    })
    this.setState({displayedStocks})
  }

  render() {
    return (
      <div>
        <SearchBar
          sortBy={this.sortBy}
          filter={this.filter}
        />

          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.displayedStocks} buyStock={this.buyStock} />
            </div>
            <div className="col-4">
              <PortfolioContainer portfolio={this.state.portfolio} sellStock={this.sellStock} />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
