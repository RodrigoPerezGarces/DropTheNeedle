import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import VinylList from './vinyls/vinyl-list/Vinyl-list'

function App() {
  return (
    <Switch>
      <Route path='/vinyls' render={() => <VinylList />}/>
    
    </Switch>
  )
}

export default App;
