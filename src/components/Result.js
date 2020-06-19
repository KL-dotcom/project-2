import React from 'react'


const Result = ({ updateInfo, getRandom }) => (

  <div className={`results-board ${updateInfo.isHidden ? 'is-hidden' : ''}`}>
    <div className="result-first">
      <div className="result-drink">
        <h4>Your ideal cocktail</h4>
        <img src={updateInfo.singleCocktail.strDrinkThumb} alt={updateInfo.singleCocktail.strDrink} />
        <h2>{updateInfo.singleCocktail.strDrink}</h2>
        <div className="result-text">
          <h3>{updateInfo.cocktailInfo?.drinks[0].strInstructions}</h3>
        </div>
      </div>
      <div className="result-movie">
        <h4>Your perfect movie</h4>
        <img src={updateInfo.singleMovie.Poster} alt={updateInfo.singleMovie.Title} />
        <h2>{updateInfo.singleMovie.Title}</h2>
        <div className="result-text">
          <h3>{updateInfo.movieInfo?.Plot}</h3>
        </div>
      </div>
    </div>
    <div className="separator"></div>
    <div className="result-second">
      <div className="result-book">
        <h4>A pretentious book</h4>
        <img src={updateInfo.singleBook?.volumeInfo.imageLinks.thumbnail} alt={updateInfo.singleBook?.volumeInfo.title} />
        <h2>{updateInfo.singleBook?.volumeInfo.title}</h2>
        <div className="result-text">
          <h3>{updateInfo.singleBook?.volumeInfo.description}</h3>
        </div>
      </div>
      <div className="result-tweet">
        <h4>An obnoxious book tweet</h4>
        <p>Hey guys, just reading {updateInfo.singleBook?.volumeInfo.title}! {updateInfo?.tweets[getRandom()]}<span>{` #${updateInfo.hashtags?.[0].word}  ${updateInfo.readingHashtags?.[getRandom()]} #${updateInfo.hashtags?.[1].word} ${updateInfo.readingHashtags?.[getRandom()]} #${updateInfo.hashtags?.[2].word} ${updateInfo.readingHashtags?.[getRandom()]}`}
        </span></p>
      </div>
    </div>
  </div>
)

export default Result