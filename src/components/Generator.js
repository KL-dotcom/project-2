import React from 'react'
import axios from 'axios'
import Form from '../components/Form'
import Result from '../components/Result'
class Generator extends React.Component {

  state = {
    allSpirits: ['Rum', 'Gin', 'Vermouth', 'Scotch', 'Vodka', 'Coffee liqueur', 'Bourbon', 'Tequila', 'Kahlua', 'Sambuca', 'Whiskey'],
    movieWord: '',
    selectedSpirit: '',
    allCocktails: {},
    singleCocktail: {},
    cocktailInfo: null,
    allMovies: [],
    singleMovie: {},
    movieInfo: null,
    allBooks: {},
    singleBook: null,
    tweets: ['Best book ever! Check this one out!', 'Great evening with an even greater book', 'Love to read, reading is life!', 'This is on my must-read list guys', 'Time to unwind with a good book!', 'That feeling when a book changes your life :)'],
    hashtags: null,
    readingHashtags: ['#readingisliving', '#bibliophile', '#quarantinereading', '#bookaddict', '#ireadanything', '#epicreads', '#booknerds', '#bookworm', '#bookhoarder', '#currentlyreading', '#bibliobeauty', '#readathon', '#bookaholic', '#bookobsession'],
    isHidden: true
  }

  async findTheCocktail() {
    try {
      const resCocktails = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.selectedSpirit}`)
      this.setState({ allCocktails: resCocktails.data })

      const resMovies = await axios.get(`https://www.omdbapi.com/?s=${this.state.movieWord}&apikey=${process.env.REACT_APP_MOVIE_ONE}`)
      this.setState({ allMovies: resMovies.data })

      const resBooks = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${this.state.movieWord}&key=${process.env.REACT_APP_BOOK_ONE}`)
      this.setState({ allBooks: resBooks.data })


      this.getSingleCocktail()
      this.getSingleMovie()
      this.getSingleBook()
      this.getHashtag()
      const isHidden = false
      this.setState({ isHidden })
    } catch (err) {
      this.props.history.push('./error')
    }
  }

  getHashtag = async () => {
    const resHashtag = await axios.get(`https://api.datamuse.com/words?rel_trg=${this.state.movieWord}`)
    this.setState({ hashtags: resHashtag.data })
  }



  handleSelect = e => {
    const selectedSpirit = e.target.value
    this.setState({ selectedSpirit })
  }

  handleInput = e => {
    const movieWord = e.target.value
    this.setState({ movieWord })
  }

  handleClick = () => {
    this.findTheCocktail()
  }

  getSingleCocktail = () => {
    const singleCocktail = this.state.allCocktails.drinks[Math.floor(Math.random() * this.state.allCocktails.drinks.length)]
    this.setState({ singleCocktail })
    const num = parseInt(this.state.singleCocktail.idDrink)
    this.resCocktailId(singleCocktail, num)
  }

  resCocktailId = async (singleCocktail, num) => {

    const resCocktailId = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${num}`)
    this.setState({ cocktailInfo: resCocktailId.data })
  }


  getSingleMovie = () => {
    const singleMovie = this.state.allMovies.Search[Math.floor(Math.random() * this.state.allMovies.Search.length)]
    this.setState({ singleMovie })
    this.resMovieId()
  }

  resMovieId = async () => {
    const resMovieId = await axios.get(`https://www.omdbapi.com/?i=${this.state.singleMovie.imdbID}&apikey=${process.env.REACT_APP_MOVIE_ONE}`)
    this.setState({ movieInfo: resMovieId.data })


  }


  getSingleBook = () => {
    const singleBook = this.state.allBooks.items[Math.floor(Math.random() * this.state.allBooks.items.length)]

    this.setState({ singleBook })
  }

  getDetailsFromCocktail = ({ singleCocktail }) => {
    return <div>
      <h2>{singleCocktail.strDrink}</h2>
    </div>
  }

  getRandom = () => {
    return Math.floor(Math.random() * this.state.tweets.length)
  }

  render() {
    return (
      <>
        <div className="main">
          <h1>Curate My Night</h1>
          <Form className="form"
            handleSelect={this.handleSelect}
            handleInput={this.handleInput}
            updateInfo={this.state}
            handleClick={this.handleClick}
          />

          <Result className="result-all"
            updateInfo={this.state}
            getRandom={this.getRandom}
          />
        </div>
      </>

    )
  }
}



export default Generator

