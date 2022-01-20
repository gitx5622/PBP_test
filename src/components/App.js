import React, {Fragment } from 'react'
import { Panel } from 'rsuite';
import BankContainer from './transanctions/bankContainer'

const App = () => {
    return (
      <Fragment>
        <Panel bordered className="navbar">
          <h2>PBP Expense Calculator</h2>
        </Panel>
        <BankContainer />
      </Fragment>
    )
}

export default App
