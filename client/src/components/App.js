import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Navigation from './ui/navbar'
import VinylList from './vinyls/vinyl-pages'
import VinylDetail from './vinyls/vinyl-detail'
import SignupForm from './auth/Signup-form'
import LoginForm from './auth/Login-form'
import AuthService from '../service/AuthService'


class App extends Component{

  constructor() {
    super()
    this.state = {
      loggedInUser : null
    }

    this.authService = new AuthService()
  }

  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('the state has changed:', this.state))
  

  componentDidMount = () => this.fetchUser()

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.state.loggedInUser === null && this.setState({ loggedInUser: response.data }))
      .catch(err => console.log({ err }))
  }

  render() {

    console.log(this.props)
    return (

      <>
        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser}/> //
        
          
        <Switch>
          <Route exact path='/vinyls' render={() => <VinylList />} />
          <Route path='/vinyls/:vinyl_id' render={props => <VinylDetail {...props} />} />
          <Route path='/signup' render={props => <SignupForm {...props} setTheUser={this.setTheUser}/>} />
          <Route path='/login' render={props => <LoginForm {...props} setTheUser={this.setTheUser} />} />
 

        </Switch>

      </>
    )
  }
}

export default App;
