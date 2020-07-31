import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './ui/navbar'
import Message from './ui/CustomToast'
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
        visible: false,
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

  handleToast = (visible, text ='') => {
    let toastCopy = { ...this.state.toast }
    toastCopy = { visible, text  }
    this.setState({ toast: toastCopy})
  }
    
   

  render() {

    //this.fetchUser()

    return (

      <>
       
        
        <div>
        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} handleToast={this.handleToast} />
        </div>

        

        <Switch>

          <Route exact path='/' render={() => <IndexPage />} />
          <Route path='/profile' render={() =>
            this.state.loggedInUser ? <ProfilePage loggedInUser={this.state.loggedInUser} /> : <Redirect to='/login' />} />

          <Route exact path='/vinyls' render={props => <VinylList {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />

          <Route path='/vinyls/:vinyl_id' render={props => <VinylDetail {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />
          <Route path='/add' render={props => this.state.loggedInUser.isAdmin === true ? (<VinylForm {...props} />) : (<Redirect to='/vinyls' />)} />

          <Route path='/signup' render={props => <SignupForm {...props} setTheUser={this.setTheUser} handleToast={this.handleToast} />} />
          <Route path='/login' render={props => <LoginForm {...props} setTheUser={this.setTheUser} handleToast={this.handleToast} />} />

        </Switch>
        
       

        <Message {...this.state.toast} handleToast={this.handleToast}/>

        
    

      </>
    )
  }
}

export default App;
