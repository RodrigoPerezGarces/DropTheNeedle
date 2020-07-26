import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Navigation from './ui/navbar'
import VinylList from './vinyls/vinyl-pages'
import VinylDetail from './vinyls/vinyl-detail'
import SignupForm from './auth/Signup-form'
import LoginForm from './auth/Login-form'


function App() {
  return (

    <>
    <Navigation />
    
      
    <Switch>
      <Route exact path='/vinyls' render={() => <VinylList />} />
      <Route path='/vinyls/:vinyl_id' render={props => <VinylDetail {...props} />} />
      <Route path='/signup' render={props => <SignupForm {...props} />} />
      <Route path='/login' render={props => <LoginForm {...props} />} />

    </Switch>

    </>
  )
}

export default App;
