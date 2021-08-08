import axios from "axios"

const clint = axios.create({
    baseURL: "https://api.github.com",
    timeout: 5000
})


export { clint };
// clint.interceptors.request.use(()=>{})