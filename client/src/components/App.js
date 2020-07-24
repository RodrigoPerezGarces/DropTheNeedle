import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Navigation from './ui/navbar'
import VinylList from './vinyls/vinyl-pages'
import VinylDetail from './vinyls/vinyl-detail'
// import VinylForm from './vinyls/vinyl-form'

function App() {
  return (

    <>
    <Navigation />
    
      
    <Switch>
      <Route exact path='/vinyls' render={() => <VinylList />} />
      {/* <Route path='/vinyls/newVinyl' render={() => <VinylForm />} /> */}
      <Route path='/vinyls/:vinyl_id' render={props => <VinylDetail {...props} />} />
    </Switch>

    </>
  )
}

export default App;
