// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details
  return (
    <li className="app">
      <img src={imageUrl} className="app-img" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
