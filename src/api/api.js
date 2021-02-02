import axios from 'axios';


const host ="http://localhost:8080"
const API = {
    login : (email , pass , success) => {
        axios.post(`${host}/user/login` , {email : email , password : pass }).then(res => {
            success(res)
        })
    }
}

export default API