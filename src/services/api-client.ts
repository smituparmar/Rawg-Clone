import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '3779623001574726985fbd25bc62fd87'
    }
})