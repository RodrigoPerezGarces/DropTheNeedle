import axios from 'axios'

export default class AuthService {

    constructor() {
        this.service = axios.create({
            baseURL: 'https://drop-the-needle.herokuapp.com/api',
            withCredentials: true
        })
    }

    login = credentials => this.service.post('/login', credentials)
    signup = credentials => this.service.post('/signup', credentials)
    logout = () => this.service.post('/logout')
    isLoggedIn = () => this.service.get('/loggedin')
}
