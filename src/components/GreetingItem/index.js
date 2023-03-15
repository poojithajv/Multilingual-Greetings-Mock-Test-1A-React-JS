import './index.css'

const GreetingItem = props => {
  const {languageDetails, onClickChangeLanguage, isActive} = props
  const {id, buttonText} = languageDetails
  const onClickButton = () => {
    onClickChangeLanguage(id)
  }
  const activeButton = isActive ? 'ActiveButton' : 'button'
  return (
    <li className="list-item">
      <button className={activeButton} type="button" onClick={onClickButton}>
        {buttonText}
      </button>
    </li>
  )
}
export default GreetingItem
