import axios from "axios";

//make axios instance named api
export const api =axios.create({
    baseURL:'http://localhost:3000'
})