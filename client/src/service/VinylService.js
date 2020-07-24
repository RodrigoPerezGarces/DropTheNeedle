import axios from 'axios'

export default class VinylService {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/vinyls'
        })
    }

    getAllVinyls = () => this.service.get('/getAllVinyls')
    getoneVinyl = id => this.service.get(`/getOneVinyl/${id}`)
    createVinyl = vinyl => this.service.post('/newVinyl', vinyl)
    deleteVinyl = id => this.service.delete(`/getOneVinyl/${id}`)
    updateVinyl = (id,data) => this.service.put(`/getOneVinyl/${id}`, data)
    
}
