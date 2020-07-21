import axios from 'axios'

export default class VinylService {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/vinyls'
        })
    }

    getAllVinyls = () => this.service.get('/getAllVinyls')
}
