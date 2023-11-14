import axios from 'axios'

export const api = axios.create ({
    baseURL: 'https://biz24mctej.us-east-1.awsapprunner.com/api/',
    timeout: 5000,
})