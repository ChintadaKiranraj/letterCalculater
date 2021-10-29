// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: 0}

  sentenceIsClicked = event => {
    this.setState({letterCount: event.target.value.length})
    console.log(event.target.value)
  }

  render() {
    const {letterCount} = this.state
    return (
      <div className="bgImage">
        <di className="textContainer">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="labelandphrase">
            <label htmlFor="textLabel">Enter the phrase</label>

            <input
              type="text"
              className="inputelement"
              id="textLabel"
              placeholder="Enter the phrase"
              onChange={this.sentenceIsClicked}
            />
          </div>
          <p className="letterCounter">No.of letters: {letterCount}</p>
        </di>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="lettersCalculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
