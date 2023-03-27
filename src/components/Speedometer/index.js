// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(previousSpeed => ({speed: previousSpeed.speed + 10}))
    }
  }

  applyBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(previousSpeed => ({speed: previousSpeed.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speedometer-container">
        <h1 className="speedometer-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-image"
        />
        <h1 className="speedometer-speed">Speed is {speed}mph</h1>
        <p className="speedometer-limit">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="speedometer-button-container">
          <button
            type="button"
            className="button accelerate-button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button brake-button"
            onClick={this.applyBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
