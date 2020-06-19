import React from 'react'


class Home extends React.Component {

  toGenerator = () => {
    this.props.history.push('/generator')
  }

  render() {
    return (

      <section className="homepage">
        <h1>#stayhome #staysafe</h1>
        <div className="homepage-text">
          <h2>We're here to curate your lockdown experience</h2>
          <p>Pick a spirit and a word, and we'll find the perfect cocktail and movie for you to watch.</p>

          <p>No worries about your socials though, we're also making a pretentious tweet about books for you to share!</p>
        </div>

        <button onClick={this.toGenerator}>Click this to start!</button>

      </section>

    )

  }


}

export default Home