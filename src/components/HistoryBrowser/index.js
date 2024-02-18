import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class HistoryBrowser extends Component {
  render() {
    const {HistoryList} = this.props
    return (
      <div className="app-container">
        <div className="history-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="search"
              placeholder="Search history"
            />
          </div>
        </div>

        <ul className="list-container">
          {HistoryList.map(each => (
            <HistoryItem historyObj={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default HistoryBrowser
