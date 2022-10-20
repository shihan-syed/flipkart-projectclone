import axios from "axios";

const apiurl = "http://localhost:4000"
const accessToken = localStorage.getItem("token")

export const authaxios = axios.create({
    baseURL: apiurl,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})