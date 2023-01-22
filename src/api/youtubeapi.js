import axios from "axios"

const api = 'AIzaSyCWJucV5ZixXFqA3TxIPuGUgkXGhjO1aik'

export default axios.create({
    baseURL :' https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResult:5 ,
        key:api
    }
})