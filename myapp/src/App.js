import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './component/functionComponent/About'
import Home from './component/functionComponent/Home'
import Navbar from './component/functionComponent/Navbar'

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  )
}
