import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeOption: countryAndCapitalsList[0],
  }

  updateOption = event => {
    const selectedOptionId = event.target.value
    const selectedOption = countryAndCapitalsList.find(
      option => option.capitalDisplayText === selectedOptionId,
    )
    this.setState({activeOption: selectedOption})
  }

  render() {
    const {activeOption} = this.state
    return (
      <div className="background-section">
        <div className="second-background">
          <div className="question-container">
            <select className="form-control" onChange={this.updateOption}>
              {countryAndCapitalsList.map(eachOption => (
                <option
                  key={eachOption.id}
                  value={eachOption.capitalDisplayText}
                >
                  {eachOption.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is the capital of which country?</p>
          </div>

          <h1>{activeOption.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
