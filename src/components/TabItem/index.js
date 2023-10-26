// Write your code here
import './index.css'

const TabItem = props => {
  const {details, onchangeTab, isActive} = props
  const {tabId, displayText} = details
  const onchange = () => {
    onchangeTab(tabId)
  }
  const tog = isActive ? 'newitem' : ''
  const togline = isActive ? 'newline' : ''
  return (
    <li className="item">
      <button type="button" onClick={onchange} className={`${tog}`}>
        {displayText}
      </button>
      <hr className={`${togline}`} />
    </li>
  )
}

export default TabItem
