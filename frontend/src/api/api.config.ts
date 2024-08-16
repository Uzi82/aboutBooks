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


// instance.interceptors.request.use(
//     (config) => {
//         config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//         return config;
//     }
// )

// instance.interceptors.response.use(
//     (config) => config,
//     async (error) => {
//         const originRequest = {...error.config};
//         originRequest._isRetry= true; 
        
//         if(error.response.status === 401 && error.config && !error._isRetry) {
//             try {
//                 const response = await instance.get('/api/refresh');
//                 localStorage.setItem('token', response.data.accessToken);
//                 return instance.request(originRequest);
//             }
//             catch (error) {
//                 console.log('Auth Error');
//                 throw error;
//             }
//         }

//         throw error;
//     }
// );