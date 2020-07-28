import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './ui/navbar'
import VinylList from './vinyls/vinyl-pages'
import VinylDetail from './vinyls/vinyl-detail'
import SignupForm from './auth/Signup-form'
import LoginForm from './auth/Login-form'
import VinylForm from './vinyls/vinyl-form'
import AuthService from '../service/AuthService'
import ProfilePage from './pages/profile'
import IndexPage from './pages/index'
import Toast from 'react-bootstrap/Toast'


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: null,
      toast: {
        show: true,
        text: ''
      }
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

  handleToast = (visible, text ='') => this.setState({
    ...this.state,
    toast: { show: visible, text }
  })

  render() {

    //this.fetchUser()

    return (

      <>
        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} handle={this.handleToast} />


        <Switch>

          <Route exact path='/' render={() => <IndexPage />} />
          <Route path='/profile' render={() =>
            this.state.loggedInUser ? <ProfilePage loggedInUser={this.state.loggedInUser} /> : <Redirect to='/login' />} />

          <Route exact path='/vinyls' render={props => <VinylList {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />

          <Route path='/vinyls/:vinyl_id' render={props => <VinylDetail {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />
          <Route path='/add' render={props => this.state.loggedInUser.isAdmin === true ? (<VinylForm {...props} />) : (<Redirect to='/vinyls' />)} />

          <Route path='/signup' render={props => <SignupForm {...props} setTheUser={this.setTheUser} />} />
          <Route path='/login' render={props => <LoginForm {...props} setTheUser={this.setTheUser} />} />

        </Switch>

        <Toast style={{
          position: 'fixed',
          top: 60,
          right: 600,
        }}
          show={this.state.toast.show} onClose={() => this.handleToast(false)}  delay={4000} autohide>
          
          <Toast.Header>
            <h5 className='mr-auto'>DropTheNeedle_</h5>
          
          </Toast.Header>
          <Toast.Body>{this.state.toast.text}</Toast.Body>
        </Toast>
    

      </>
    )
  }
}

export default App;
