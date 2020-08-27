import React from 'react'
import './App.scss'
import List from './List'
import Home from './Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route path='/todo'>
            <List />
          </Route>
          <Route path='/about'></Route>
          <Route path='/' exact>
            <Navbar />
            <Home />
          </Route>
          <Route></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
