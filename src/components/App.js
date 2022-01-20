import React, { Component, Fragment } from 'react'
import { Panel } from 'rsuite';
import BankContainer from './transanctions/bankContainer'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Panel bordered style={{display:"flex", justifyContent: "center", background:"#6435c9", color:"white"}}>
          <h2>PBP Expense Calculator</h2>
        </Panel>
        <BankContainer />
      </Fragment>
    )
  }
}

export default App
