import axios from '../axios';

const authService = {
    RegisterClient(body) {
        return axios.post('register', body)
    },
    LoginClient(body) {
        return axios.post('loign', body, { headers: { "Content-Type": "application/json" } })
    }
}

export default authService