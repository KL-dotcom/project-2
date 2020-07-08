# Stay Home Stay Safe

This project was developed as part of General Assembly's Software Engineering Immersive. This was a Hackathon project, built with React and third-party APIs completed with a partner over 2 days.

Some additional bugs were fixed after the project was handed in.

## Brief

Stay Home Stay Safe is a project for helping people decide how to spend their lockdowns at home, and also providing them with pretentious literary tweets for their socials. All you need to do is pick a spirit and a word in order to generate your results.

## Technologies Used

* React.js
* JavaScript (ES6) / HTML5
* CSS
* Yarn package manager
* Axios
* Git
* GitHub
* Netlify

## Process

* In order to get the idea to work as a web application, we needed to use multiple third party APIs for all the information. The following is a list of our resources: 
    * www.thecocktaildb.com
    * www.omdbapi.com
    * developers.google.com/books
    * www.datamuse.com/api

* My partner and I worked collaboratively by pair coding using VSCode Live Share. This worked well, as we could easily communicate and solve bugs together.

* The API calls require the user to pick a spirit and a random word, and this is used to generate the data needed. If there is any issue with the information the user provides, then they are redirected to an error page.

* Out of the information received, a randomised drink, movie, book are chosen and then set into state. From this the user can get the name of each of their results and a description if available along with the relevant tweet. The tweet is also composed of hashtags that are generated related to the word the user chose.

### Examples

The movie and drink the user will be recommended plus the descriptions for both:

![movie and drink example image](/assets/movie-drink.png)
<br />
<br />

Plus the book the user can pretend to have read instead:

![book tweet example image](/assets/book-tweet.png)
Sometimes the books will come with a description as well, however this depends on the data received from the Google Book API.
<br />
<br/>

If there is an issue with the inputs they are redirected to an error page which will give the user the option of starting over:

![error page example image](/assets/error-page.png)


## Key learnings

This project was a great opportunity to learn to pair code, and how to effectively communicate about bugs and issues. This enabled us to better collaborate and reinforce each other's learnings, especially with newly introduced technologies like React.js.

## Challenges and Wins

The biggest challenge of the project was that we had a number of asynchronous API calls, data did not always load in fast enough and then would cause the application to crash. 

In completing this project, I felt like my understanding of how data is passed between different components in React.js.

## Future Improvements

* It would be great to add in more information (such as the ingredient list for the drinks).

* If we added in a backend with a user model, then the users could favourite the results they get and keep them for reference.

## Deployment 

This project was deployed using Netlify:
https://dreamy-hoover-1fdd87.netlify.app/

