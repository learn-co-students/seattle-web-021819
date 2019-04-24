import React, {Component} from 'react';
import Movie from './Movie'

class MovieCarousel extends Component {
  constructor() {
    super()

    this.state = {
      startIndex: 0
    }

    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }

  next() {
    this.setState({startIndex: this.state.startIndex + 5})
  }

  prev() {
    this.setState({startIndex: this.state.startIndex - 5})
  }

  currentMovies() {
    console.log('currentMovies', this.props.movies)
    let movies = []
    for (let i = this.state.startIndex; i < this.state.startIndex + 5; i++) {
      if (i < this.props.movies.length) {
        movies.push(this.props.movies[i])
      }
    }
    return movies
  }

  render() {
    return <div>
      <div>
        <button onClick={() => this.prev()}>prev</button>
        <button onClick={() => this.next()}>next</button>
      </div>
      {this.currentMovies().map((movie, index) => {
        console.log('carousel map:', index, movie)
        return <Movie key={index} movie={movie}/>
      })}
    </div>
  }
}

export default MovieCarousel;
