const axios = require('axios').default;
axios.defaults.withCredentials = true;
const api = (baseURL = 'http://34.89.93.186:8080/apiv1') => {
    const registerApiEndpoint = `${baseURL}/register`;
    const loginApiEndpoint = `${baseURL}/login`;
    const getAdsApiEndpoint = `${baseURL}/anuncios`;
    return {
        registerUser: async data => {
            try {
                const response = await axios({
                    method: 'post',
                    url: registerApiEndpoint,
                    withCredentials: true,
                    data: {
                        username: data.username,
                        password: data.password
                    }
                })
                if (response.data){
                    return response.data;
                }
                return response;
            } catch (error) {
                return error;
            }
        }
        /*registerUser: (data) => (
            fetch(`${registerApiEndpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then((response) => {
                return response.json();
            })
            .catch((err) => {
                throw err;
            })
        )*/,
        /*loginUser: (data) => (
            fetch(`${loginApiEndpoint}`, {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify (data)
            })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                throw err;
            })
        ),*/
        loginUser: async data => {
            try {
                const response = await axios({
                    method:'post',
                    url: loginApiEndpoint,
                    withCredentials: true,
                    data: {
                        username: data.username,
                        password: data.password
                    }
                })
                if(response.data){
                    return response.data;
                }
                return response; 
            } catch (error) {
                return error;
            }
            /*.then(response => {
                if (response.data){
                    console.log("response.data ", response.data);
                    return response.data.success;
                }
                console.log("se retorna: ", response.data);
                return response.data;
            })*/
            /*.catch(err => {
                throw err;
            })*/
        },
        getAds: async () => {
            try {
                const response = await axios({
                    method:'get',
                    url: getAdsApiEndpoint,
                    withCredentials: true
                })
                console.log("ads response:",response);
                return response;
            } catch (error) {
                console.log("response error: ", error);
                return error;
            }
            
            /*fetch(`${getAdsApiEndpoint}`, {
                credentials: 'include'
            })
            .then((response) => {
                if (!response.ok){
                    throw new Error("error getting ads");
                }
                console.log(`response ads es: ${response.json()}`);
                return response.json();
            })
            .catch(err => {
                throw err;
            })*/
        }
    }
}

export default api;