import axios from 'axios'

export default class VinylService {

    constructor() {
        this.service = axios.create({
            baseURL: 'https://drop-the-needle.herokuapp.com/api/vinyls',
            withCredentials: true
        })
    }

    getAllVinyls = () => this.service.get('/getAllVinyls')
    getoneVinyl = id => this.service.get(`/getOneVinyl/${id}`)
    createVinyl = vinyl => this.service.post('/newVinyl', vinyl)
    deleteVinyl = id => this.service.delete(`/getOneVinyl/${id}`)
    updateVinyl = (id, data) => this.service.put(`/getOneVinyl/${id}`, data)

}
