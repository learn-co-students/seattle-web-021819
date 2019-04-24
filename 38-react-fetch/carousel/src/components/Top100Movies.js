import React, {Component} from 'react';
import MovieCarousel from './MovieCarousel'

class Top100Movies extends Component {
  constructor() {
    super()

    this.state = {
      movies: [],
      loading: true
    }
  }

  componentDidMount() {
    console.log('mounted')
    this.getMovies()
  }

  componentWillUnmount() {
    console.log('will unmount')
  }
  
  getMovies() {
    this.setState({loading: true})

    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(movies => {
      console.log('movies fetch:', movies)
      // this is a syntax-sugar for the next line
      // if the key and value-variable have the same
      // name then you can just write the variable
      // this.setState({movies})
      this.setState({movies: movies, loading: false})
    })
  }

  render() {
    return <div>
      <h1>Top 100 Movies</h1>
      {this.state.loading ?
        <div>Loading...</div>
      :
        <>
          <button onClick={() => this.getMovies()}>reload</button>
          <MovieCarousel movies={this.state.movies} />
        </>
      }
    </div>
  }
}

export default Top100Movies;
