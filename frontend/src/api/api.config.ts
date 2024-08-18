import axios  from 'axios';

export const instance = axios.create({
    baseURL: "http://localhost:8080",
    // withCredentials: true,
    headers: {
        "Accept":"application/json",
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS,PUT,PATCH,DELETE",

    },
});
