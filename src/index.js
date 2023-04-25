import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import WhatWeDo from './views/what-we-do'
import OurFirm from './views/our-firm'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={WhatWeDo} exact path="/what-we-do" />
        <Route component={OurFirm} exact path="/our-firm" />
        <Route component={Home} exact path="/home" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
