// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`prevState value ${prevState.mangoes}`)
      return {mangoes: prevState.mangoes + 1}
    })
  }

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`prevState value ${prevState.bananas}`)
      return {bananas: prevState.bananas + 1}
    })
  }

  render() {
    const {mangoes} = this.state
    const {bananas} = this.state
    return (
      <div className="fruitsCounterPage">
        <div className="white-background">
          <h1 className="heading">
            Bob ate {mangoes} mangoes {bananas} bananas
          </h1>
          <div className="fruit-section">
            <div className="mango-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoes"
                className="mangoes"
              />
              <button
                type="button"
                className="mango-button"
                onClick={this.onIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="mango-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="bananas"
                className="bananas"
              />
              <button
                type="button"
                className="bananas-button"
                onClick={this.onIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
