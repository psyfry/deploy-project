/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = 'https://crowdref.onrender.com/api/login/'

const login = async (credentials) => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

export default { login }
