import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import VinylList from './vinyls/vinyl-list/Vinyl-list'
import VinylDetail from './vinyls/vinyl-detail/Vinyl-detail'

function App() {
  return (
    <Switch>
      <Route exact path='/vinyls' render={() => <VinylList />} />
      <Route path='/vinyls/:vinyl_id' render={props => <VinylDetail {...props} />} />
    
    </Switch>
  )
}

export default App;
