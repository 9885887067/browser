import './index.css'

const HistoryItem = props => {
  const {historyObj} = props
  const {timeAccessed, logoUrl, title, domainUrl} = historyObj
  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="logo-container">
        <img src={logoUrl} className="logo" />

        <div className="container">
          <p className="title">{title}</p>
          <p className="url" alt="domain logo">
            {domainUrl}
          </p>
        </div>

        <button className="button" data-testid="delete" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-logo"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
