import axios from 'axios';


const host ="http://localhost:8080"
class API {
    login = (email , pass , success) => {
        axios.post(`${host}/api/user/login` , {params : {email : email , password : pass}}).then(res => {
            success(res)
        })
    }
}

export default API