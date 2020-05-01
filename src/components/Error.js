import React from 'react'


class Error extends React.Component {

  goBack = () => {
    this.props.history.push('/generator')
  }

  render() {
    return (
      <section className="errorpage">

        <h1>What did you do!?</h1>
        <h2>You broke everything!</h2>
        <button onClick={this.goBack}>Go Back and Fix It!</button>

      </section>
    )

  }


}

export default Error