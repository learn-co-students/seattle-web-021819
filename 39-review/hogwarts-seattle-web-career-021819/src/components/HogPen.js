import React, { Component } from 'react';
import HogCard from './HogCard'

class HogPen extends Component {
  render() {
    return (
      <div className="ui grid container">
        Hogs: {this.props.hogs.length}
        {this.props.hogs.map((hog, index) => {
          return <HogCard key={index} hog={hog} />
        })}
      </div>
    )
  }
}

export default HogPen;
