import React from 'react'
import './App.scss'
import List from './List'
import Home from './Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Error from './404'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/todo'>
            <List />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
