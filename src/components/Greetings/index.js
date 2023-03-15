import {Component} from 'react'

import './index.css'
import GreetingItem from '../GreetingItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {
    activeLanguageId: languageGreetingsList[0].id,
  }

  changeLanguage = id => {
    this.setState({activeLanguageId: id})
  }

  renderSelectedLanguage = () => {
    const {activeLanguageId} = this.state
    const activeLanguage = languageGreetingsList.find(
      each => each.id === activeLanguageId,
    )
    return (
      <img
        className="image-style"
        src={activeLanguage.imageUrl}
        alt={activeLanguage.imageAltText}
      />
    )
  }

  render() {
    const {activeLanguageId} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul className="buttons-container">
          {languageGreetingsList.map(each => (
            <GreetingItem
              key={each.id}
              languageDetails={each}
              onClickChangeLanguage={this.changeLanguage}
              isActive={activeLanguageId === each.id}
            />
          ))}
        </ul>
        {this.renderSelectedLanguage()}
      </div>
    )
  }
}
export default Greetings
